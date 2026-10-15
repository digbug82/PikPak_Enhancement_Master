const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(process.argv[2] || path.join(__dirname, '..', 'PikPak_Enhancement_Master.user.js'), 'utf8').replace(/\r\n/g, '\n');
function section(start, end) {
  const a = source.indexOf(start), b = source.indexOf(end, a);
  assert(a >= 0 && b > a, start);
  return source.slice(a, b);
}
function harness({durations = new Map(), store = new Map(), strictness = 'strict'} = {}) {
  const S = {dupReasons: new Map(), durationMap: durations};
  const context = vm.createContext({S, Map, Set, Number,
    gmGet: (key, fallback) => key === 'pk_dup_strictness' ? strictness : (store.get(key) ?? fallback),
    L: {tag_hash: 'hash', tag_sim: 'sim', tag_name: 'name', loading_dup: '{p}'},
    updateLoadTxt() {}, sleep: async () => {}, getItemExt: item => String(item.name || '').toLowerCase().split('.').pop()});
  vm.runInContext(section('const FOLDER_SEARCH_EXTS =', '\nfunction filterFolderSearchItems(') +
    section('function getFileDurationSeconds(', '\nfunction getDurationProbeSources(') +
    section(source.includes('const getDuplicateItemType =') ? 'const getDuplicateItemType =' : 'const computeDuplicateGroups =', '\nfunction buildDuplicateBucketsFromGroups(') +
    '\nthis.compute = computeDuplicateGroups;', context);
  return {
    async groups(items, cfg = {video: true, image: true, other: true}) {
      context.tempItems = items; context.tempDupCfg = cfg;
      vm.runInContext(section('const tempDupCandidates = tempItems.filter(i => {', '\n\nconst tempDupGroups =') + '\nthis.candidates = tempDupCandidates;', context);
      return JSON.parse(JSON.stringify(await context.compute(context.candidates, cfg, () => true)));
    }
  };
}
const file = (id, extra = {}) => ({id, kind: 'drive#file', name: 'sample.mp4', mime_type: 'video/mp4', size: 1000000, params: {duration: 0}, ...extra});
const tests = [];
const test = (name, run) => tests.push({name, run});
test('精准匹配统一哈希大小写、空白及数字大小表示', async () => {
  const g = await harness().groups([file('a', {hash: ' AABB ', size: '01000000', name: 'first.mp4'}), file('b', {hash: 'aabb', name: 'unrelated.mp4'})]);
  assert.equal(g.length, 1); assert.equal(g[0].type, 'hash');
});
test('缺MIME和通用MIME的视频仍纳入视频查重，图片和音频不误入', async () => {
  const items = [file('a', {mime_type: '', hash: 'same'}), file('b', {mime_type: 'application/octet-stream', hash: 'same'}),
    file('c', {name: 'sample.jpg', mime_type: '', hash: 'same'}), file('d', {name: 'sample.mp3', mime_type: '', hash: 'same'})];
  const g = await harness().groups(items, {video: true, image: false, other: false});
  assert.deepEqual(g.map(g => g.ids), [['a', 'b']]);
});
test('复用内存时长，避免同名同大小但时长不同的误判', async () => {
  const h = harness({durations: new Map([['a', 100], ['b', 200]])});
  assert.equal((await h.groups([file('a'), file('b')])).length, 0);
});
test('复用持久缓存时长，重开界面也能排除不同内容', async () => {
  const h = harness({store: new Map([['pk_duration_a', 100], ['pk_duration_b', 200]])});
  assert.equal((await h.groups([file('a'), file('b')])).length, 0);
});
test('读取接口元数据时长，不能只读params', async () => {
  const g = await harness().groups([file('a', {video_media_metadata: {duration: 100}}), file('b', {medias: [{duration: 200}]})]);
  assert.equal(g.length, 0);
});
test('保留数字后缀，不把不同分段合并', async () => {
  const g = await harness().groups([file('a', {name: 'Concert (1).mp4', params: {duration: 1000}}), file('b', {name: 'Concert (2).mp4', params: {duration: 1000}})]);
  assert.equal(g.length, 0);
});
test('近似长名称和相同时长大小不能掩盖不同集号', async () => {
  for (const strictness of ['strict', 'loose']) {
    const g = await harness({strictness}).groups([file('a', {name: 'Holiday concert episode 01.mp4', params: {duration: 1000}}), file('b', {name: 'Holiday concert episode 02.mp4', params: {duration: 1000}})]);
    assert.equal(g.length, 0);
  }
});
test('季集、part、中文集号及方括号分段均保留差异', async () => {
  for (const [a, b] of [
    ['Long holiday concert S01E01.mp4', 'Long holiday concert S01E02.mp4'],
    ['Long holiday concert part 01.mp4', 'Long holiday concert part 02.mp4'],
    ['假期演唱会完整版第01集.mp4', '假期演唱会完整版第02集.mp4'],
    ['假期演唱会完整版第01段.mp4', '假期演唱会完整版第02段.mp4'],
    ['Holiday concert [1].mp4', 'Holiday concert [2].mp4']
  ]) {
    assert.equal((await harness().groups([file('a', {name: a, params: {duration: 1000}}), file('b', {name: b, params: {duration: 1000}})])).length, 0, a);
  }
});
test('名称相同但大小时长都未知，不归为重复', async () => {
  assert.equal((await harness().groups([file('a', {size: 0}), file('b', {size: 0})])).length, 0);
});
test('视频时长未知时，同名而大小仅相近不够成为重复', async () => {
  assert.equal((await harness().groups([file('a'), file('b', {size: 1000100})])).length, 0);
});
test('明确副本名称、相同已知大小仍可找出', async () => {
  const g = await harness().groups([file('a'), file('b', {name: 'sample - copy (1).mp4'})]);
  assert.equal(g.length, 1); assert.equal(g[0].type, 'name');
});
test('原名与下载编号副本仍作为名称候选，不能把编号差异一律排除', async () => {
  const g = await harness().groups([file('a'), file('b', {name: 'sample (1).mp4'})]);
  assert.equal(g.length, 1); assert.equal(g[0].type, 'name');
});
test('显式副本编号不同仍保留名称候选', async () => {
  const g = await harness().groups([file('a', {name: 'sample - copy (1).mp4'}), file('b', {name: 'sample - copy (2).mp4'})]);
  assert.equal(g.length, 1); assert.equal(g[0].type, 'name');
});
test('不同封装、不同哈希但名称时长大小吻合仍保留相似候选', async () => {
  const g = await harness().groups([file('a', {hash: 'a', params: {duration: 1000}}), file('b', {name: 'sample.mkv', hash: 'b', size: 1005000, params: {duration: 1001}})]);
  assert.equal(g.length, 1); assert.equal(g[0].type, 'sim');
});
test('Unrelated titles are not grouped only because duration and size are close', async () => {
  for (const strictness of ['strict', 'loose']) {
    const items = [
      file('a', {name: 'Coastal sunrise.mp4', size: 1000000, params: {duration: 600}}),
      file('b', {name: 'Camera workshop.mp4', size: 1009000, params: {duration: 598}}),
      file('c', {name: 'Acoustic lesson.mp4', size: 1012000, params: {duration: 598}})
    ];
    assert.equal((await harness({strictness}).groups(items)).length, 0);
  }
});

test('内容哈希一致优先于分集名称差异', async () => {
  const g = await harness().groups([file('a', {name: 'episode 1.mp4', hash: 'same'}), file('b', {name: 'episode 2.mp4', hash: 'same'})]);
  assert.equal(g.length, 1); assert.equal(g[0].type, 'hash');
});
test('同一组必须两两满足，不能通过中间文件串联', async () => {
  const g = await harness().groups([file('a', {params: {duration: 1200}}), file('b', {params: {duration: 1208}}), file('c', {params: {duration: 1216}})]);
  assert(g.every(g => g.ids.length <= 2));
});
(async () => {
  let failures = 0;
  for (const t of tests) {
    try { await t.run(); console.log('PASS ' + t.name); }
    catch (e) { failures++; console.error('FAIL ' + t.name + ': ' + e.message); }
  }
  console.log(`${tests.length - failures}/${tests.length} duplicate checks passed; synthetic files only, no cloud reads or deletes.`);
  process.exitCode = failures ? 1 : 0;
})();
