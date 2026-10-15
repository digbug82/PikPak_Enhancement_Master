const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const fixed = fs.readFileSync(process.argv[2] || path.join(__dirname, '..', 'PikPak_Enhancement_Master.user.js'), 'utf8').replace(/\r\n/g, '\n');
new vm.Script(fixed);

function section(source, start, end) {
  const from = source.indexOf(start);
  assert(from >= 0, start);
  const to = source.indexOf(end, from);
  assert(to > from, end);
  return source.slice(from, to);
}

function harness() {
  const timers = new Map();
  const store = new Map();
  const requests = [];
  const events = [];
  const mediaOutcomes = new Map();
  let seq = 0;
  let now = 0;
  class TestDate extends Date { static now() { return now; } }
  let paused = false;
  let uiRefreshes = 0;
  const state = { durationMap: new Map(), itemMap: new Map(), items: [], display: [], refreshDurationView() { uiRefreshes++; } };
  const sandbox = {
    console, URL, AbortController, queueMicrotask, Date: TestDate,
    CustomEvent: class { constructor(type, options) { this.type = type; this.detail = options.detail; } },
    pkState: state,
    gmGet: (key, fallback) => store.has(key) ? store.get(key) : fallback,
    gmSet: (key, value) => store.set(key, value),
    computeOfficialVideoEvidence: () => true,
    isPkBackgroundPaused: () => paused,
    setTimeout: (fn, ms) => { const id = ++seq; timers.set(id, {fn, ms, due: now + ms}); return id; },
    clearTimeout: id => timers.delete(id),
    apiGet: async (id, options) => { requests.push({id, options}); return { params: { duration: 123 } }; },
    fetch: async () => { throw new Error('Unexpected network request'); },
    document: {
      hidden: false,
      dispatchEvent: event => events.push(event),
      createElement(type) {
        const listeners = new Map();
        return {
          type, src: '', duration: 0,
          addEventListener: (name, fn) => listeners.set(name, fn),
          removeEventListener: name => listeners.delete(name),
          removeAttribute(name) { if (name === 'src') this.src = ''; },
          load() {
            if (!this.src) return;
            const outcome = mediaOutcomes.get(this.src);
            if (outcome === 'hang') return;
            queueMicrotask(() => {
              if (typeof outcome === 'number') { this.duration = outcome; listeners.get('loadedmetadata')?.(); }
              else listeners.get('error')?.();
            });
          }
        };
      }
    }
  };
  const context = vm.createContext(sandbox);
  const code = section(fixed, 'const AUDIO_FILE_EXTS =', '\nasync function runBackgroundCrawler()') +
    '\nglobalThis.prober = DurationProber; globalThis.minify = minifyFile; globalThis.duration = getFileDurationSeconds; globalThis.sources = getDurationProbeSources;';
  vm.runInContext(code, context);
  return {
    context, timers, store, state, requests, events, mediaOutcomes,
    setPaused: value => { paused = value; },
    uiRefreshes: () => uiRefreshes,
    now: () => now,
    async flush() { for (let i = 0; i < 25; i++) await Promise.resolve(); },
    async runTimers(ms) {
      const target = now + ms;
      while (true) {
        const entry = [...timers].filter(([, timer]) => timer.due <= target)
          .sort((a, b) => a[1].due - b[1].due)[0];
        if (!entry) break;
        const [id, timer] = entry;
        now = timer.due;
        timers.delete(id); timer.fn();
        await this.flush();
      }
      now = target;
      await this.flush();
    }
  };
}

const video = id => ({id, name: id + '.mp4', kind: 'drive#file', mime_type: 'video/mp4', params: { duration: 0 }});
const tests = [];
const test = (name, run) => tests.push({name, run});

test('修正版自动入队、详情时长保存、显示同步，外层无需 S', async () => {
  const h = harness();
  const item = h.context.minify(video('a'));
  h.state.items.push(item); h.state.display.push({...item, params: {duration: 0}}); h.state.itemMap.set('a', item);
  await h.runTimers(3000);
  assert.equal(h.requests.length, 1);
  assert.equal(h.store.get('pk_duration_a'), 123);
  assert.equal(h.state.display[0].params.duration, 123);
  assert.equal(h.state.durationMap.get('a'), 123);
  assert.equal(h.events[0].detail.duration, 123);
  assert.equal(h.uiRefreshes(), 1);
});
test('支持详情各时长字段，拒绝无效值，不把音频误判为视频', () => {
  const h = harness();
  const inputs = [
    {video_media_metadata: {duration: '120.8'}}, {audio_media_metadata: {duration: 121}},
    {params: {duration: 121}}, {medias: [{duration: 121}]},
    {medias: [{video: {duration: 121}}]}, {medias: [{audio: {duration: 121}}]}
  ];
  for (const input of inputs) assert.equal(h.context.duration(input), 121);
  assert.equal(h.context.duration({params: {duration: 'Infinity'}}), 0);
  assert.equal(h.context.duration({params: {duration: -1}}), 0);
  assert.equal(vm.runInContext("isVideoLikeItem({name:'a.mp3', params:{duration:120}})", h.context), false);
});
test('后台/明确跳过文件不新增探测，已缓存时长无需再次请求', async () => {
  const h = harness();
  h.context.minify(video('background'), true);
  h.context.minify({...video('skip'), _pkSkipDurationProbe: true});
  h.store.set('pk_duration_cached', 120);
  const item = h.context.minify(video('cached'));
  assert.equal(item.params.duration, 120);
  assert.equal(h.timers.size, 0);
});
test('转码探测失败后回退原文件；按实际播放源而非原文件扩展名探测', async () => {
  const h = harness();
  const item = {...video('mkv'), name: 'mkv.mkv'};
  h.context.apiGet = async () => ({web_content_link: 'https://test/original', medias: [{link: {url: 'https://test/transcode.mp4'}}]});
  h.mediaOutcomes.set('https://test/transcode.mp4', 432);
  h.context.prober.add(item); await h.flush();
  assert.equal(h.store.get('pk_duration_mkv'), 432);
  h.context.prober.reset();
  h.context.apiGet = async () => ({web_content_link: 'https://test/direct.mp4', medias: [{link: {url: 'https://test/broken.mp4'}}]});
  h.mediaOutcomes.set('https://test/direct.mp4', 543);
  h.context.prober.add(video('fallback')); await h.flush();
  assert.equal(h.store.get('pk_duration_fallback'), 543);
});
test('HLS 主播放列表选择低带宽分支，解析相对链接并计算完整时长', async () => {
  const h = harness();
  const urls = [];
  h.context.apiGet = async () => ({medias: [{link: {url: 'https://test/master.m3u8'}}]});
  h.context.fetch = async url => {
    urls.push(url);
    return new Response(url.endsWith('master.m3u8')
      ? '#EXTM3U\n#EXT-X-STREAM-INF:BANDWIDTH=900\nhigh.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=100\nlow.m3u8\n'
      : '#EXTM3U\n#EXTINF:10.25,\na.ts\n#EXTINF:20.75,\nb.ts\n#EXT-X-ENDLIST\n');
  };
  h.context.prober.add(video('hls')); await h.flush();
  assert.deepEqual(urls, ['https://test/master.m3u8', 'https://test/low.m3u8']);
  assert.equal(h.store.get('pk_duration_hls'), 31);
});
test('不把直播滑动窗口当完整时长；没有详情时长时允许回退原文件', async () => {
  const h = harness();
  h.context.apiGet = async () => ({web_content_link: 'https://test/direct.mp4', medias: [{link: {url: 'https://test/live.m3u8'}}]});
  h.context.fetch = async () => new Response('#EXTM3U\n#EXTINF:6,\na.ts\n');
  h.mediaOutcomes.set('https://test/direct.mp4', 600);
  h.context.prober.add(video('live')); await h.flush();
  assert.equal(h.store.get('pk_duration_live'), 600);
});
test('暂停/隐藏时不请求，恢复后继续，重复入队不重复请求', async () => {
  const h = harness();
  h.setPaused(true);
  h.context.prober.add(video('paused'));
  h.context.prober.add(video('paused'));
  assert.equal(h.requests.length, 0);
  h.setPaused(false); h.context.document.hidden = true;
  await h.runTimers(2000); assert.equal(h.requests.length, 0);
  h.context.document.hidden = false;
  await h.runTimers(2000); assert.equal(h.requests.length, 1);
});
test('重置取消未完成请求，迟到响应不污染缓存，新队列仍可运行', async () => {
  const h = harness();
  let deliver;
  let signal;
  h.context.apiGet = async (id, options) => { signal = options.signal; return new Promise(resolve => { deliver = resolve; }); };
  h.context.prober.add(video('old')); await h.flush();
  h.context.prober.reset(); assert.equal(signal.aborted, true);
  h.context.apiGet = async () => ({params: {duration: 200}});
  h.context.prober.add(video('new')); await h.flush();
  deliver({params: {duration: 999}}); await h.flush();
  assert.equal(h.store.has('pk_duration_old'), false);
  assert.equal(h.store.get('pk_duration_new'), 200);
});
test('媒体超时后回退备用链接，全部失败保留会话内跳过策略', async () => {
  const h = harness();
  h.context.apiGet = async () => ({web_content_link: 'https://test/good.mp4', medias: [{link: {url: 'https://test/hang.mp4'}}]});
  h.mediaOutcomes.set('https://test/hang.mp4', 'hang');
  h.mediaOutcomes.set('https://test/good.mp4', 300);
  h.context.prober.add(video('timeout')); await h.flush();
  await h.runTimers(15000);
  assert.equal(h.store.get('pk_duration_timeout'), 300);
  h.context.prober.reset();
  let calls = 0;
  h.context.apiGet = async () => { calls++; return {}; };
  h.context.prober.add(video('failed')); await h.flush();
  h.context.prober.add(video('failed')); await h.flush();
  assert.equal(calls, 1);
});
test('原始 MKV Range 头解析保留，服务端忽略 Range 时停止读取全文件', async () => {
  const h = harness();
  h.context.apiGet = async () => ({web_content_link: 'https://test/original'});
  const bytes = new Uint8Array(32);
  bytes.set([0x44, 0x89, 0x88], 0);
  new DataView(bytes.buffer).setFloat64(3, 250000, false);
  h.context.fetch = async (_, options) => {
    assert.equal(options.headers.Range, 'bytes=0-65535');
    return new Response(bytes, {status: 206});
  };
  h.context.prober.add({...video('binary'), name: 'binary.mkv'}); await h.flush();
  assert.equal(h.store.get('pk_duration_binary'), 250);
  h.context.prober.reset();
  let cancelled = false;
  h.context.fetch = async () => ({ok: true, status: 200, headers: new Headers(), body: {cancel: async () => {cancelled = true;}}, arrayBuffer: () => {throw new Error('Must not download original');}});
  h.context.prober.add({...video('range'), name: 'range.mkv'}); await h.flush();
  assert.equal(cancelled, true);
  assert.equal(h.store.has('pk_duration_range'), false);
});
test('界面桥接合并刷新，只在时长排序时重排，关闭界面后不刷新', async () => {
  const h = harness();
  let renders = 0, sorts = 0;
  h.context.S = h.state;
  h.context.refresh = () => {sorts++;};
  h.context.renderVisible = () => {renders++;};
  const bridge = section(fixed, 'pkState = S;\n// Keep UI-only', '\nfunction isLocalSearchBackActive()');
  vm.runInContext(bridge, h.context);
  h.state.sort = 'duration';
  h.state.refreshDurationView(); h.state.refreshDurationView();
  assert.equal([...h.timers.values()].filter(t => t.ms === 250).length, 1);
  await h.runTimers(250); assert.equal(sorts, 1);
  h.state.sort = 'name'; h.state.refreshDurationView(); await h.runTimers(250);
  assert.equal(renders, 1);
  h.state.sort = 'duration'; h.state.refreshDurationView(); h.context.pkState = null;
  await h.runTimers(250); assert.equal(sorts, 1);
});
test('时长排序能补探测已缓存列表，特殊模式不新增探测', async () => {
  const h = harness();
  h.context.S = h.state;
  h.state.sort = 'duration';
  h.state.display.push({...video('cachedView'), _minified: true});
  h.context.isPkBackgroundSpecialMode = () => false;
  const enqueue = section(fixed, "if (S.sort === 'duration' && !isPkBackgroundSpecialMode(S", '\nconst currentIds = new Set');
  vm.runInContext(enqueue, h.context); await h.flush();
  assert.equal(h.store.get('pk_duration_cachedView'), 123);
  h.state.display.push(video('special'));
  h.context.isPkBackgroundSpecialMode = () => true;
  vm.runInContext(enqueue, h.context); await h.flush();
  assert.equal(h.requests.length, 1);
});
test('并发上限为二，启动间隔至少500毫秒，空位释放后按队列继续', async () => {
  const h = harness();
  const pending = new Map(), starts = [];
  let active = 0, peak = 0;
  h.context.apiGet = (id) => {
    starts.push({id, at: h.now()}); peak = Math.max(peak, ++active);
    return new Promise(resolve => pending.set(id, duration => {
      active--; resolve({params: {duration}});
    }));
  };
  for (const id of ['a', 'b', 'c', 'd']) h.context.prober.add(video(id));
  assert.equal(starts.length, 1);
  await h.runTimers(499); assert.equal(starts.length, 1);
  await h.runTimers(1); assert.equal(starts.length, 2);
  await h.runTimers(500); assert.equal(starts.length, 2);
  pending.get('a')(100); await h.flush();
  assert.deepEqual(starts.map(x => x.id), ['a', 'b', 'c']);
  pending.get('b')(200); await h.flush();
  await h.runTimers(499); assert.equal(starts.length, 3);
  await h.runTimers(1); assert.equal(starts.length, 4);
  assert.equal(peak, 2);
  assert(starts.every((entry, i) => !i || entry.at - starts[i - 1].at >= 500));
  pending.get('c')(300); pending.get('d')(400); await h.flush();
});

test('慢媒体未超时时另一文件可完成时长保存', async () => {
  const h = harness();
  h.context.apiGet = async id => id === 'slow'
    ? {medias: [{link: {url: 'https://test/hang.mp4'}}]}
    : {params: {duration: 222}};
  h.mediaOutcomes.set('https://test/hang.mp4', 'hang');
  h.context.prober.add(video('slow')); h.context.prober.add(video('fast'));
  await h.flush(); await h.runTimers(500);
  assert.equal(h.store.get('pk_duration_fast'), 222);
  assert.equal(h.store.has('pk_duration_slow'), false);
  assert([...h.timers.values()].some(timer => timer.ms === 15000));
  h.context.prober.reset(); await h.flush();
  assert.equal(h.timers.size, 0);
});

test('实际渲染入口优先可见窗口，去重且保留剩余队列顺序', async () => {
  const h = harness();
  const pending = new Map(), starts = [];
  h.context.apiGet = id => {
    starts.push(id);
    return new Promise(resolve => pending.set(id, () => resolve({params: {duration: 100}})));
  };
  for (const id of ['active', 'old1', 'old2']) h.context.prober.add(video(id));
  h.context.S = h.state; h.context.start = 1; h.context.end = 3;
  h.state.display = [video('outside'), video('visible1'), video('visible2'), video('outside2')];
  h.context.isPkBackgroundSpecialMode = () => false;
  const hook = section(fixed, '// Probe the rendered window first', '\nconst isBlur =');
  vm.runInContext(hook, h.context); vm.runInContext(hook, h.context);
  await h.runTimers(500);
  assert.deepEqual(starts, ['active', 'visible1']);
  pending.get('visible1')(); await h.flush(); await h.runTimers(500);
  assert.deepEqual(starts, ['active', 'visible1', 'visible2']);
  pending.get('visible2')(); await h.flush(); await h.runTimers(500);
  pending.get('old1')(); await h.flush(); await h.runTimers(500);
  assert.deepEqual(starts, ['active', 'visible1', 'visible2', 'old1', 'old2']);
  h.context.prober.reset();
  pending.get('active')(); pending.get('old2')(); await h.flush();
  h.state.loading = true;
  vm.runInContext(hook, h.context); await h.flush();
  assert.equal(starts.length, 5);
  h.state.loading = false; h.context.isPkBackgroundSpecialMode = () => true;
  vm.runInContext(hook, h.context); await h.flush();
  assert.equal(starts.length, 5);
});

test('重置同时取消两个任务，旧响应不释放新任务的并发槽', async () => {
  const h = harness();
  const pending = new Map(), signals = new Map(), starts = [];
  h.context.apiGet = (id, options) => {
    starts.push(id); signals.set(id, options.signal);
    return new Promise(resolve => pending.set(id, () => resolve({params: {duration: 111}})));
  };
  h.context.prober.add(video('a')); h.context.prober.add(video('b'));
  await h.runTimers(500); h.context.prober.reset();
  assert(signals.get('a').aborted && signals.get('b').aborted);
  h.context.prober.add(video('new1')); h.context.prober.add(video('new2')); h.context.prober.add(video('new3'));
  await h.runTimers(500);
  pending.get('a')(); pending.get('b')(); await h.flush(); await h.runTimers(500);
  assert.deepEqual(starts, ['a', 'b', 'new1', 'new2']);
  assert(!h.store.has('pk_duration_a') && !h.store.has('pk_duration_b'));
  pending.get('new1')(); await h.flush();
  assert.equal(starts.at(-1), 'new3');
  pending.get('new2')(); pending.get('new3')(); await h.flush();
});

test('详情接口429后等待30秒再处理队列，不自动重试失败文件', async () => {
  const h = harness();
  const starts = [];
  h.context.apiGet = async id => {
    starts.push({id, at: h.now()});
    if (id === 'limited') throw Object.assign(new Error('Rate limit'), {status: 429});
    return {params: {duration: 333}};
  };
  h.context.prober.add(video('limited')); h.context.prober.add(video('next'));
  await h.flush(); await h.runTimers(29999);
  assert.equal(starts.length, 1);
  await h.runTimers(1);
  assert.deepEqual(starts, [{id: 'limited', at: 0}, {id: 'next', at: 30000}]);
  assert.equal(h.store.get('pk_duration_next'), 333);
  h.context.prober.add(video('limited')); await h.flush();
  assert.equal(starts.length, 2);
});

test('关闭界面后延迟入队不会再发请求，关闭入口重置探测器', async () => {
  const h = harness();
  h.context.minify(video('delayed'));
  h.context.pkState = null;
  await h.runTimers(3000);
  assert.equal(h.requests.length, 0);
  assert(fixed.includes('DurationProber.reset();\npkState = null;\n\ndelete window.pkUpdateCrawlerUI;'));
});

test('时长排序播放补齐后退出保留滚动位置，其他排序仍定位文件', () => {
  const location = section(fixed, 'locatePreviewSourceItem:', '\ncloseBrowserOverlay:');
  const close = section(fixed, 'if (!d._pkSkipLocateOnDestroy)', '\nv.src = ""');
  const item = {id: 'played'};
  const S = {display: [item, {id: 'other'}], sort: 'duration', setAllSelection() {}, setSelected() {}};
  const UI = {vp: {scrollTop: 6400, clientHeight: 640}};
  let renders = 0;
  const context = vm.createContext({S, UI, item, d: {}, CONF: {rowHeight: 48},
    isMobileManagerEnvironment: () => false, getItemScrollTopByIndex: i => i * 48,
    renderVisible: () => renders++, updateStat() {}});
  vm.runInContext(`S.locatePreviewSourceItem = ({${location}}).locatePreviewSourceItem;`, context);
  vm.runInContext(close, context);
  assert.equal(UI.vp.scrollTop, 6400);
  assert.equal(S.activeId, item.id);
  assert.equal(renders, 1);
  S.sort = 'name';
  vm.runInContext(close, context);
  assert.equal(UI.vp.scrollTop, 0);
  UI.vp.scrollTop = 3200; context.d._pkSkipLocateOnDestroy = true;
  vm.runInContext(close, context);
  assert.equal(UI.vp.scrollTop, 3200);
  assert.equal(renders, 2);
});

test('分类搜索结果可补时长，全库预加载仍暂停且其他特殊页面不放行', async () => {
  const h = harness();
  h.context.isGUISensitive = false;
  let player = null;
  h.context.document.getElementById = () => player;
  vm.runInContext(section(fixed, 'function isPkBackgroundSpecialMode(', '\nfunction scheduleBackgroundResume('), h.context);
  h.context.S = h.state;
  h.state.path = [{id: ''}, {id: 'virtual_search_root'}];
  h.state.folderSearch = {items: []};
  h.state.sort = 'duration'; h.state.loading = true;
  h.state.display = [video('filtered')];
  assert.equal(h.context.isPkBackgroundPaused(), true);
  const enqueue = section(fixed, "if (S.sort === 'duration' && !isPkBackgroundSpecialMode(S", '\nconst currentIds = new Set');
  vm.runInContext(enqueue, h.context); await h.flush();
  assert.equal(h.requests.length, 0);
  h.state.loading = false;
  await h.runTimers(2000);
  assert.equal(h.store.get('pk_duration_filtered'), 123);
  assert.equal(h.context.isPkBackgroundPaused(), true);
  assert.equal(h.context.isPkBackgroundPaused(true), false);
  for (const flag of ['trashMode', 'shareMode', 'shareParseMode', 'linkBookmarkMode', 'historyMode', 'offlineMode', 'uploadMode', 'dupMode', 'analyzeMode', 'isFlattened', 'loading', 'scanning']) {
    h.state[flag] = true;
    assert.equal(h.context.isPkBackgroundPaused(true), true, flag);
    h.state[flag] = false;
  }
  player = {};
  assert.equal(h.context.isPkBackgroundPaused(true), true);
  player = null; h.context.isGUISensitive = true;
  assert.equal(h.context.isPkBackgroundPaused(true), true);
  h.context.isGUISensitive = false; h.state.folderSearch = null;
  assert.equal(h.context.isPkBackgroundPaused(true), true);
  h.state.folderSearch = {}; h.state.path.at(-1).id = 'virtual_other';
  assert.equal(h.context.isPkBackgroundPaused(true), true);
});

(async () => {
  let failures = 0;
  for (const {name, run} of tests) {
    try { await run(); console.log('PASS ' + name); }
    catch (error) { failures++; console.error('FAIL ' + name, error); }
  }
  console.log(`${tests.length - failures}/${tests.length} checks passed; no live network or account access.`);
  process.exitCode = failures ? 1 : 0;
})();
