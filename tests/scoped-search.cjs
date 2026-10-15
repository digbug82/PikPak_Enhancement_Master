const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(process.argv[2] || path.join(__dirname, '..', 'PikPak_Enhancement_Master.user.js'), 'utf8').replace(/\r\n/g, '\n');
const section = (start, end) => {
  const from = source.indexOf(start), to = source.indexOf(end, from);
  assert(from >= 0 && to > from);
  return source.slice(from, to);
};
const helpers = section('const FOLDER_SEARCH_EXTS =', 'const AUDIO_FILE_EXTS =');
const tests = [];
const test = (name, run) => tests.push({ name, run });
const folder = (id, name) => ({id, name, kind:'drive#folder'});
const file = (id, name, mime_type = '', starred = false) => ({id, name, kind:'drive#file', mime_type, starred});
const tree = new Map([
  ['scope', [folder('child','子目录'), file('top','Sample.MP4'), file('img','Sample.png','image/png')]],
  ['child', [folder('deep','深层'), file('song','Sample.flac','audio/flac'), file('v','Sample clip','video/mp4', true)]],
  ['deep', [file('deep-v','Sample.mkv'), file('other','Other.mp4'), file('star-tag','Sample.jpg')]],
  ['outside', [file('outside-v','Sample.mp4')]]
]);
tree.get('deep')[2].tags = [{name:'STAR'}];
const parentPath = [{id:'',name:'主页'},{id:'scope',name:'测试目录'}];
const root = {id:'scope',name:'测试目录',lineage:parentPath};
const pureContext = vm.createContext({DOMException});
vm.runInContext(helpers + '\nglobalThis.filter = filterFolderSearchItems; globalThis.collect = collectFolderSearchItems;', pureContext);
const ids = items => Array.from(items, item => item.id);

test('递归范围覆盖多层，只读取目标子树并保留真实父路径', async () => {
  const calls = [];
  const all = await pureContext.collect(root, async id => {calls.push(id); return tree.get(id);}, new AbortController().signal, true);
  assert.deepEqual(calls, ['scope','child','deep']);
  assert(!ids(all).includes('outside-v'));
  assert.deepEqual(Array.from(all.find(f=>f.id==='deep-v')._lineage,n=>n.id),['','scope','child','deep']);
  assert.deepEqual(ids(pureContext.filter(all,'sample','video')),['top','v','deep-v']);
});
test('关闭包含子文件夹，仅筛选当前层；支持文件夹分类', async () => {
  const calls = [];
  const all = await pureContext.collect(root, async id => {calls.push(id);return tree.get(id);}, null, false);
  assert.deepEqual(calls,['scope']);
  assert.deepEqual(ids(pureContext.filter(all,'','folder')),['child']);
  assert.deepEqual(ids(pureContext.filter(all,'sample','video')),['top']);
});
test('关键词、类型和星标取交集，MIME 与扩展名均能识别', async () => {
  const all = await pureContext.collect(root, async id => tree.get(id), null, true);
  assert.deepEqual(ids(pureContext.filter(all,'sample','video',true)),['v']);
  assert.deepEqual(ids(pureContext.filter(all,'sample','image',true)),['star-tag']);
  assert.deepEqual(ids(pureContext.filter(all,'sample','audio')),['song']);
  assert.deepEqual(ids(pureContext.filter(all,'absent','all')),[]);
  assert.equal(pureContext.filter([{...file('trash','x.mp4'),trashed:true}], '', 'video').length,0);
});
test('取消不返回不完整结果；目录读取失败不伪报成功', async () => {
  const controller = new AbortController();
  await assert.rejects(pureContext.collect(root, async id => {controller.abort();return tree.get(id);}, controller.signal, true), e=>e.name==='AbortError');
  await assert.rejects(pureContext.collect(root, async()=>{throw new Error('403');},null,true), /403/);
  await assert.rejects(pureContext.collect(root, async()=>null,null,true), /incomplete/);
});
test('重复目录和重复文件不会重复检索或产生循环', async () => {
  const calls=[];
  const cyclic = new Map([['scope',[folder('child','子目录'),folder('child','子目录')]],['child',[folder('scope','回链'),file('one','one.mp4'),file('one','one.mp4')]]]);
  const result = await pureContext.collect(root, async id => {calls.push(id);return cyclic.get(id);},null,true);
  assert.deepEqual(calls,['scope','child']);
  assert.equal(ids(result).filter(id=>id==='one').length,1);
});

function harness() {
  const elements = new Map();
  const make = (id, data={}) => ({id, style:{}, dataset:data, checked:false, value:'', textContent:'', open:false, attrs:{}, setAttribute(k,v){this.attrs[k]=v;}});
  for(const id of ['pk-folder-search-controls','pk-folder-search-recursive','pk-folder-search-starred','pk-folder-search-status','pk-folder-search-scope','pk-folder-search-apply']) elements.set('#'+id,make(id));
  elements.get('#pk-folder-search-recursive').checked=true;
  const buttons=['all','audio','image','video','folder'].map(cat=>make(cat,{folderSearchCat:cat}));
  const S={path:parentPath.map(p=>({...p})),items:[...tree.get('scope')],display:[],itemMap:new Map(),sel:new Set(),sortId:0};
  const UI={searchInput:make('pk-search-input'),searchClear:make('clear'),chkGlobal:make('global'),stopBtn:make('stop')};
  const calls=[],alerts=[],loads=[],hist=[];
  const sandbox={S,UI,pkState:S,window:{},globalCache:tree,AbortController,DOMException,
    el:{querySelector:s=>elements.get(s),querySelectorAll:()=>buttons},L:{btn_nav_home:'主页'},
    apiList:async id=>{calls.push(id);return tree.get(id);},
    stopLiveManualRefreshBeforePathChange:()=>{},cancelSharePhraseSearchLookup:()=>{},
    setLoad:v=>loads.push(v),updateLoadTxt:()=>{},DEFERRED_LOAD_MASK_DELAY:0,
    showAlert:x=>alerts.push(x),formatCloudErrorMessage:e=>e.message,saveHistory:q=>hist.push(q),
    renderCrumb:()=>{},ensureItemMap:()=>{S.itemMap.clear();S.items.forEach(f=>S.itemMap.set(f.id,f));}
  };
  const context=vm.createContext(sandbox);
  vm.runInContext(helpers+section('// Scoped search is independent', 'const performSearch = (val) => {')+'\nglobalThis.search=performFolderSearch; globalThis.cancel=cancelFolderSearch; globalThis.config=folderSearchConfig; globalThis.sync=syncFolderSearchControls;',context);
  sandbox.refresh=async()=>{
    context.sync();
    vm.runInContext('{ const cur = S.path[S.path.length - 1];'+section("if (S.folderSearch && cur.id === 'virtual_search_root') {", '\nelse if (S.search && !S.dupMode')+'}', context);
  };
  return {context,S,UI,elements,buttons,calls,alerts,loads,hist,sandbox};
}

test('空关键词分类独立显示结果、保留返回路径和清除入口', async () => {
  const h=harness();h.context.config.category='video';
  await h.context.search('');
  assert.equal(h.S.path.at(-1).id,'virtual_search_root');
  assert.deepEqual(ids(h.S.display),['top','v','deep-v','other']);
  assert(h.S.itemMap.has('deep-v'));
  assert.deepEqual(Array.from(h.S.preSearchPath,n=>n.id),['','scope']);
  assert.equal(h.S.lastSearchGlobal,false);
  assert.equal(h.UI.searchClear.style.display,'flex');
  assert.equal(h.loads.at(-1),false);
  assert.equal(h.alerts.length,0);
});
test('连续改分类复用目录缓存，结果含深层图片而无目录外文件', async () => {
  const h=harness();h.context.config.category='video';await h.context.search('sample');
  h.context.config.category='image';await h.context.search('sample');
  assert.deepEqual(ids(h.S.display),['img','star-tag']);
  assert.deepEqual(h.calls,[]);
  assert.equal(h.S.folderSearch.path.at(-1).id,'scope');
});
test('被新搜索取代的迟到响应不能覆盖结果', async () => {
  const h=harness();let release;
  h.sandbox.window.pkGlobalIndex={ensureFolder:async id=>{if(id==='scope'&&!release)return new Promise(r=>{release=r;});return tree.get(id);}};
  h.context.config.category='video';const first=h.context.search('sample');
  h.context.config.category='audio';await h.context.search('sample');
  release(tree.get('scope'));await first;
  assert.deepEqual(ids(h.S.display),['song']);
  assert.equal(h.S.folderSearch.category,'audio');
});
test('离开目录或关闭界面后，未完成请求不改变新页面', async () => {
  for(const close of [false,true]) {
    const h=harness();let release;
    h.sandbox.window.pkGlobalIndex={ensureFolder:()=>new Promise(r=>{release=r;})};
    const pending=h.context.search('sample');
    if(close){h.context.cancel();h.sandbox.pkState=null;}
    else {h.S.path=[{id:'outside',name:'其他目录'}];h.context.sync();}
    release(tree.get('scope'));await pending;
    assert.equal(h.S.folderSearch,undefined);
    assert.notEqual(h.S.path.at(-1).id,'virtual_search_root');
  }
});
test('特殊页面拒绝目录搜索；全盘页面不显示作用域筛选', async () => {
  const h=harness();h.S.trashMode=true;
  await h.context.search('sample');assert.equal(h.S.folderSearch,undefined);
  h.context.sync();assert.equal(h.elements.get('#pk-folder-search-controls').style.display,'none');
  h.S.trashMode=false;h.UI.chkGlobal.checked=true;h.context.sync();
  assert.equal(h.elements.get('#pk-folder-search-controls').style.display,'none');
});
test('强制刷新只读取当前作用域，失败保留上次搜索结果', async () => {
  const h=harness();await h.context.search('sample');
  h.sandbox.apiList=async id=>{h.calls.push(id);return tree.get(id);};
  await h.context.search('sample',true);
  assert.deepEqual(h.calls,['scope','child','deep']);
  const previous=ids(h.S.display);
  h.sandbox.apiList=async()=>{throw new Error('403');};
  await h.context.search('changed',true);
  assert.deepEqual(ids(h.S.display),previous);
  assert.match(h.alerts.at(-1),/403/);
  assert.equal(h.loads.at(-1),false);
});
test('生成脚本的搜索、取消、刷新接线存在，分类搜索清除按钮不依赖关键词', async () => {
  assert(source.includes('const searchWasActive = !!(S.search || S.folderSearch);\ncancelFolderSearch();'));
  assert(source.includes("input.id === 'pk-search-input' && pkState && pkState.folderSearch"));
  assert(source.includes("const isSearchResultRoot = curId === 'virtual_search_root' && !S.folderSearch;"));
  assert(source.includes("cancelFolderSearch();\nDurationProber.reset();\npkState = null;"));
  const route=section('async function submitSearch(val)', 'if (!text || S.shareParseMode)');
  assert(route.includes('await performFolderSearch(val);'));
});

test('执行实际清除处理器，空关键词分类能退出并恢复原目录列表', async () => {
  const h=harness();h.context.config.category='video';await h.context.search('');
  Object.assign(h.sandbox,{
    gmGet:(_,fallback)=>fallback,gmSet:()=>{},globalParentIndex:new Map(),
    syncLocalUploadVisibility:()=>{},syncSearchClearVisibility:(input,clear)=>{clear.style.display=input.value?'flex':'none';},
    updateStat:()=>{},consumeOfflineLightProbePendingWrite:()=>{},
    load:async()=>{h.S.items=[...tree.get(h.S.path.at(-1).id)];h.sandbox.setLoad(false);}
  });
  h.S.getRealCacheKey=id=>id;
  h.UI.searchHist={style:{}};
  const from=source.indexOf('UI.searchClear.onclick = async () => {');
  const to=source.indexOf('\n};\n}\n}\n\nconst guardGlobalSearchResultCheckboxLock',from)+3;
  assert(to>from);
  vm.runInContext(source.slice(from,to),h.context);
  await h.UI.searchClear.onclick();
  assert.equal(h.S.folderSearch,null);
  assert.deepEqual(Array.from(h.S.path,n=>n.id),['','scope']);
  assert.deepEqual(ids(h.S.items),ids(tree.get('scope')));
  assert.equal(h.context.config.category,'all');
  assert.equal(h.UI.searchClear.style.display,'none');
});
test('成功删除后，搜索池同步移除目标文件夹及子孙，刷新不会重新出现', async () => {
  const h=harness();await h.context.search('');
  h.sandbox.deletedSet=new Set(['child']);
  const from=source.indexOf('S.lastGlobalResults = S.lastGlobalResults.filter(x => !deletedSet.has(x.id));');
  const to=source.indexOf('\n',source.indexOf('\n',from)+1);
  vm.runInContext(source.slice(from,to),h.context);
  await h.sandbox.refresh();
  assert.deepEqual(ids(h.S.display),['top','img']);
});

(async()=>{
  for(const {name,run} of tests){
    let timer;
    try {await Promise.race([run(),new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error('Test timed out: '+name)),2000);})]);}
    finally {clearTimeout(timer);}
    console.log('PASS',name);
  }
  console.log(tests.length+'/'+tests.length+' scoped search checks passed; mocked listings only.');
})().catch(error=>{console.error(error);process.exitCode=1;});
