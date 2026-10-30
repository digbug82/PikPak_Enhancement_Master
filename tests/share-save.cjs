const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert/strict');

const source = fs.readFileSync(path.join(__dirname, '..', 'PikPak_Enhancement_Master.user.js'), 'utf8');
function section(start, end) {
  const a = source.indexOf(start), b = source.indexOf(end, a + start.length);
  assert(a >= 0 && b > a, `missing section: ${start}`);
  return source.slice(a, b);
}
const program = [
  section('function getShareParsePayload(', 'function readOfficialFieldValue('),
  section('function getSelectedShareParseItems(', 'function resolveShareParseSaveErrorKey('),
  section('function extractShareParseSaveTaskIds(', 'async function syncShareRestoreGlobalIndex('),
  section('async function handleShareParseSaveSelected(', 'function getShareParseRootParentId('),
  section('function parseShareRestoreTraceMap(', 'async function restoreShareFileForOpen(')
].join('\n');

async function run(options = {}) {
  const a = { id: 'source-a', kind: 'drive#file', _isShareItem: true, _shareParentId: 'shared' };
  const b = { id: 'source-b', kind: 'drive#file', _isShareItem: true, _shareParentId: options.split ? 'other' : 'shared' };
  const items = options.single ? [a] : [a, b];
  const state = { shareParseMode: true, shareParseListActive: true, shareParseInfo: { share_id: 'share', pass_code_token: 'token' }, itemMap: new Map(items.map(i => [i.id, i])), clearSelection() {} };
  const files = new Map(), calls = [], messages = [], progress = [];
  let picker, sequence = 0;
  const translations = new Proxy({}, { get: (_, key) => String(key) });
  const ctx = {
    S: state, window: { pkGlobalIndex: { markDirty() {} } }, console,
    getStrings: () => translations, getContextMenuTargetIds: () => items.map(i => i.id),
    showToast: (text, type) => messages.push({ text, type }),
    showFolderSelector: (initial, callback) => { picker = callback; },
    updateShareParseSaveButton() {}, updateStat() {}, renderVisible() {},
    FloatBarManager: { create: () => ({ update: s => progress.push(s), destroy() {} }) },
    formatI18nCount: (s, values) => s + JSON.stringify(values),
    getHeaders: () => ({ Authorization: 'Bearer fake-token' }),
    resolveCloudTargetFolderId: () => 'default', getRealFolderCacheSignature: () => '',
    beginFolderMutation: () => ({ finished: false }), finishFolderMutation: m => { m.finished = true; return []; },
    scheduleRealFolderRevalidation() {}, registerCloudTaskTarget() {}, syncTime() {},
    syncShareRestoreGlobalIndex: async () => {}, waitForStableRealFolder: async () => {},
    resolveShareParseSaveErrorKey: () => '', getShareParseSaveErrorMessage: () => 'save-error',
    makeShareParseError: key => new Error(key), sleep: async () => {},
    normalizeRealFolderId: id => !id || id === 'root' ? '' : String(id),
    isRealHomeFolderId: () => true,
    resolveKnownRealParentId: item => item.parent_id ?? null,
    apiGet: async id => files.get(id) || null,
    requestFileTransferChunk: async (endpoint, chunk, target) => {
      calls.push({ endpoint, ids: Array.from(chunk, x => x.id), target });
      if (options.moveFailure) throw new Error('move failed');
      if (!options.unconfirmed) chunk.forEach(item => files.set(item.id, { ...item, parent_id: target }));
    },
    fetch: async (url, init) => {
      if (url.endsWith('/share/restore')) {
        const payload = JSON.parse(init.body);
        const taskId = `task-${++sequence}`;
        const map = {};
        payload.file_ids.forEach(id => {
          const newId = 'restored-' + id;
          files.set(newId, { id: newId, parent_id: 'default', kind: 'drive#file' });
          if (!(options.missing && id === 'source-b')) map[id] = options.sourceId ? id : newId;
        });
        ctx._tasks[taskId] = { phase: 'PHASE_TYPE_COMPLETE', params: { trace_file_ids: JSON.stringify(map) } };
        return { ok: true, headers: {}, text: async () => JSON.stringify({ task_id: taskId }) };
      }
      const taskId = url.match(/tasks\/([^?]+)/)[1];
      return { ok: true, json: async () => ctx._tasks[taskId] };
    },
    _tasks: {}
  };
  vm.createContext(ctx);
  vm.runInContext(program, ctx);
  await ctx.handleShareParseSaveSelected();
  assert.equal(typeof picker, 'function');
  assert.equal(sequence, 0, 'must wait for folder selection');
  if (options.cancel) return { calls, messages, sequence };
  picker(options.root ? '' : 'destination', 'Destination');
  for (let i = 0; state.shareParseSaving && i < 100; i++) await new Promise(resolve => setImmediate(resolve));
  assert.equal(state.shareParseSaving, false, 'operation should finish');
  return { calls, messages, files, sequence, progress };
}

(async () => {
  let result = await run({ cancel: true });
  assert.equal(result.sequence, 0);
  result = await run();
  assert.deepEqual(result.calls[0].ids, ['restored-source-a', 'restored-source-b']);
  assert.equal(result.calls[0].target, 'destination');
  assert(result.messages.some(x => x.text.startsWith('share_save_move_success')));
  result = await run({ split: true, root: true });
  assert.equal(result.sequence, 2);
  assert.equal(result.calls[0].target, '');
  assert.deepEqual(result.calls[0].ids, ['restored-source-a', 'restored-source-b']);
  result = await run({ missing: true });
  assert.equal(result.calls.length, 0, 'missing mapping must never move');
  assert(result.messages.some(x => x.text === 'share_save_move_incomplete'));
  result = await run({ moveFailure: true });
  assert(result.messages.some(x => x.text === 'share_save_move_incomplete'));
  assert(!result.messages.some(x => x.text.startsWith('share_save_move_success')));
  result = await run({ unconfirmed: true });
  assert(result.messages.some(x => x.text === 'share_save_move_incomplete'));
  result = await run({ sourceId: true });
  assert.equal(result.calls.length, 0, 'original share IDs must never be moved');
  assert(result.messages.some(x => x.text === 'share_save_move_incomplete'));
  console.log('share-save integration mock: 7 scenarios passed');
})().catch(error => { console.error(error); process.exitCode = 1; });
