import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const sourceUrl = new URL('../PikPak_Enhancement_Master.user.js', import.meta.url);
const source = await readFile(sourceUrl, 'utf8');

function extractCss(text) {
  const startToken = 'const CSS = `';
  const start = text.indexOf(startToken);
  assert.notEqual(start, -1, 'embedded CSS template should exist');
  const bodyStart = start + startToken.length;
  const end = text.indexOf('\n`;', bodyStart);
  assert.notEqual(end, -1, 'embedded CSS template should terminate');
  return text.slice(bodyStart, end);
}

function extractFunction(text, name) {
  const signature = `function ${name}(`;
  const start = text.indexOf(signature);
  if (start === -1) return '';

  const bodyStart = text.indexOf('{', start);
  let depth = 0;
  let quote = '';
  let escaped = false;

  for (let i = bodyStart; i < text.length; i += 1) {
    const char = text[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = '';
      continue;
    }
    if (char === "'" || char === '"' || char === '`') {
      quote = char;
      continue;
    }
    if (char === '{') depth += 1;
    if (char === '}') {
      depth -= 1;
      if (depth === 0) return text.slice(start, i + 1);
    }
  }
  return '';
}

const css = extractCss(source);

test('responsive grid uses two columns on a 390px viewport', () => {
  const functionSource = extractFunction(source, 'computeResponsiveGridLayout');
  assert.notEqual(functionSource, '', 'computeResponsiveGridLayout should exist');
  const context = {};
  vm.runInNewContext(`${functionSource}; this.computeResponsiveGridLayout = computeResponsiveGridLayout;`, context);

  const mobile = context.computeResponsiveGridLayout(390, false, 228);
  assert.equal(mobile.mobile, true);
  assert.equal(mobile.cols, 2);
  assert.equal(mobile.padX, 10);
  assert.ok(mobile.cardWidth >= 144);
  assert.equal(mobile.cardHeight + mobile.gapY, 228);

  assert.equal(context.computeResponsiveGridLayout(360, false, 228).cols, 2);
  assert.equal(context.computeResponsiveGridLayout(480, false, 228).cols, 2);

  const landscape = context.computeResponsiveGridLayout(844, false, 228, true);
  assert.equal(landscape.mobile, true);
  assert.ok(landscape.cols >= 4);

  const desktop = context.computeResponsiveGridLayout(1200, false, 286);
  assert.equal(desktop.mobile, false);
  assert.equal(desktop.minCardWidth, 208);
  assert.equal(desktop.padX, 16);
  assert.equal(desktop.gapX, 16);
});

test('mobile breakpoint turns the manager into a safe-area full-screen shell', () => {
  assert.match(css, /@media\s*\(max-width:\s*720px\)/);
  assert.match(css, /\.pk-win\s*\{[^}]*min-width:\s*0\s*!important/);
  assert.match(css, /\.pk-win\s*\{[^}]*height:\s*100dvh\s*!important/);
  assert.match(css, /\.pk-sidebar\s*\{[^}]*overflow-x:\s*auto\s*!important/);
  assert.match(css, /safe-area-inset-bottom/);
  assert.match(css, /\.pk-tb[^}]*overflow-x:\s*auto\s*!important/);
});

test('desktop manager defaults remain unchanged outside the mobile breakpoint', () => {
  const mobileStart = css.indexOf('@media (max-width:720px)');
  assert.ok(mobileStart > 0);
  const desktopCss = css.slice(0, mobileStart);
  assert.match(desktopCss, /\.pk-win \{[^}]*min-width: 720px[^}]*height: 80%/);
  assert.match(desktopCss, /\.pk-sidebar \{[^}]*width: 68px[^}]*flex-direction: column/);
  assert.match(desktopCss, /\.pk-hd \{[^}]*height: 48px/);
});

test('mobile cards expose touch controls and media viewers fill the viewport', () => {
  assert.match(css, /\.pk-grid-view \.pk-row \.pk-gv-more[^}]*opacity:\s*1\s*!important/);
  assert.match(css, /\.pk-grid-view \.pk-row \.pk-gv-check[^}]*pointer-events:\s*auto\s*!important/);
  assert.match(css, /#pk_p_box[^}]*min-width:\s*0\s*!important/);
  assert.match(css, /\.pk-img-box[^}]*width:\s*100vw\s*!important/);
});

test('advanced actions are available through a mobile overflow proxy', () => {
  assert.match(source, /id="pk-mobile-more"/);
  assert.match(source, /pk-mobile-more-menu/);
  assert.match(source, /<\/div>\s*<div class="pk-mobile-more-menu" id="pk-mobile-more-menu"/);
  assert.match(source, /hostBar && getComputedStyle\(hostBar\)\.display === 'none'/);
  assert.match(css, /\.pk-grp\[style\*="display: none"\] \+ \.pk-mobile-more-menu/);
  for (const id of ['pk-scan-dup', 'pk-analyze', 'pk-migrate', 'pk-magnet-archive-check']) {
    assert.match(source, new RegExp(`['"]${id}['"]`));
  }
});

test('external player and downloader stay directly visible on mobile', () => {
  const mobileMoreStart = source.indexOf('const MOBILE_ADVANCED_ACTION_IDS = [');
  assert.notEqual(mobileMoreStart, -1);
  const mobileMoreEnd = source.indexOf('];', mobileMoreStart);
  const mobileMoreIds = source.slice(mobileMoreStart, mobileMoreEnd);
  assert.doesNotMatch(mobileMoreIds, /'pk-ext'/);
  assert.doesNotMatch(mobileMoreIds, /'pk-aria2'/);

  const mobileStart = css.indexOf('@media (max-width:720px)');
  assert.notEqual(mobileStart, -1);
  const mobileCss = css.slice(mobileStart);
  assert.doesNotMatch(mobileCss, /#pk-ext[^}]*display:\s*none\s*!important/);
  assert.doesNotMatch(mobileCss, /#pk-aria2[^}]*display:\s*none\s*!important/);
});

test('mobile directory list upload menu uses the viewport portal', () => {
  const uploadBindingStart = source.indexOf('if (UI.uploadWrap && UI.btnUpload) {');
  assert.notEqual(uploadBindingStart, -1);
  const uploadBinding = source.slice(uploadBindingStart, uploadBindingStart + 7500);
  assert.match(uploadBinding, /const useUploadMenuPortal = isGridView \|\| isMobileManagerEnvironment\(\);/);
  assert.match(uploadBinding, /if \(!useUploadMenuPortal\) \{/);
});

test('portaled upload menu is treated as part of the upload control', () => {
  const functionSource = extractFunction(source, 'isUploadMenuEventInside');
  assert.notEqual(functionSource, '', 'isUploadMenuEventInside should exist');
  const context = {};
  vm.runInNewContext(`${functionSource}; this.isUploadMenuEventInside = isUploadMenuEventInside;`, context);

  const wrapTarget = {};
  const menuTarget = {};
  const outsideTarget = {};
  const wrap = { contains: target => target === wrapTarget };
  const menu = { contains: target => target === menuTarget };

  assert.equal(context.isUploadMenuEventInside(wrapTarget, wrap, menu), true);
  assert.equal(context.isUploadMenuEventInside(menuTarget, wrap, menu), true);
  assert.equal(context.isUploadMenuEventInside(outsideTarget, wrap, menu), false);
  assert.equal(context.isUploadMenuEventInside(null, wrap, menu), false);
});

test('upload menu portal listeners are replaceable and removed during auth cleanup', () => {
  const uploadBindingStart = source.indexOf('if (UI.uploadWrap && UI.btnUpload) {');
  assert.notEqual(uploadBindingStart, -1);
  const uploadBinding = source.slice(uploadBindingStart, uploadBindingStart + 9000);
  assert.match(uploadBinding, /window\.__pkDestroyUploadMenuPortal\(\)/);
  assert.match(uploadBinding, /addEventListener\('pointerdown', handleUploadMenuOutsideEvent, true\)/);
  assert.match(uploadBinding, /removeEventListener\('pointerdown', handleUploadMenuOutsideEvent, true\)/);
  assert.match(uploadBinding, /addEventListener\('click', handleUploadMenuOutsideEvent, true\)/);
  assert.match(uploadBinding, /removeEventListener\('click', handleUploadMenuOutsideEvent, true\)/);
  assert.doesNotMatch(uploadBinding, /__pkUploadMenuPortalBound/);
  assert.doesNotMatch(source, /UI\.uploadWrap\.querySelector\('\.pk-dropdown-menu'\)\.style/);

  for (const functionName of ['purgeAllCachesOnLogout', 'pkCleanupLoginUI']) {
    const cleanupSource = extractFunction(source, functionName);
    assert.notEqual(cleanupSource, '', `${functionName} should exist`);
    assert.match(cleanupSource, /window\.__pkDestroyUploadMenuPortal\(\)/);
  }
});

test('launcher supports pointer dragging and no longer rejects narrow screens', () => {
  assert.match(source, /touchAction\s*=\s*['"]none['"]/);
  assert.match(source, /addEventListener\(['"]pointerdown['"]/);
  assert.match(source, /addEventListener\(['"]pointermove['"]/);
  assert.doesNotMatch(source, /b\.onmousedown\s*=/);
  assert.doesNotMatch(source, /if\s*\(window\.innerWidth\s*<\s*720\s*\|\|\s*window\.innerHeight\s*<\s*340\)\s*\{\s*return;\s*\}/);
});

test('viewport popup positioning clamps menus to every screen edge', () => {
  const functionSource = extractFunction(source, 'computeViewportPopupPosition');
  assert.notEqual(functionSource, '', 'computeViewportPopupPosition should exist');
  const context = {};
  vm.runInNewContext(`${functionSource}; this.computeViewportPopupPosition = computeViewportPopupPosition;`, context);

  const bottomRight = context.computeViewportPopupPosition(450, 700, 140, 96, 480, 720, 8);
  assert.equal(bottomRight.left, 332);
  assert.equal(bottomRight.top, 616);

  const topLeft = context.computeViewportPopupPosition(-30, -20, 140, 96, 480, 720, 8);
  assert.equal(topLeft.left, 8);
  assert.equal(topLeft.top, 8);
  assert.equal(
    context.computeViewportPopupPosition(200, 350, 160, 360, 844, 390, 8).top,
    22,
  );
});

test('mobile settings and context menus stay usable inside short viewports', () => {
  assert.match(css, /\.pk-ctx\s*\{[^}]*max-height:\s*calc\(100dvh - 16px\)[^}]*overflow-y:\s*auto/);
  assert.match(css, /\.pk-ctx-item,\.pk-dropdown-item,\.pk-select-item,\.pk-crumb-item\s*\{[^}]*min-height:\s*44px/);

  const settingsStart = source.indexOf('UI.btnSettings.onclick');
  assert.notEqual(settingsStart, -1);
  const settingsSection = source.slice(settingsStart, settingsStart + 2500);
  assert.match(settingsSection, /isMobileManagerEnvironment\(\)/);
  assert.match(settingsSection, /computeViewportPopupPosition\(/);
  assert.match(settingsSection, /pop\.style\.top\s*=/);
  assert.match(settingsSection, /pop\.style\.position\s*=\s*'absolute'/);

  const contextStart = source.indexOf("UI.ctx.style.display = useFlexOrder ? 'flex' : 'block'");
  assert.notEqual(contextStart, -1);
  const contextSection = source.slice(contextStart, contextStart + 1200);
  assert.match(contextSection, /computeViewportPopupPosition\(/);
});

test('special mobile lists preserve the name and primary task state columns', () => {
  for (const [className, stateName] of [
    ['pk-offline-list', 'S.offlineMode'],
    ['pk-upload-list', 'S.uploadMode'],
    ['pk-share-list', 'S.shareMode'],
    ['pk-share-parse-list', 'S.shareParseMode'],
  ]) {
    assert.match(source, new RegExp(`classList\\.toggle\\('${className}', \\!\\!${stateName.replace('.', '\\.')}\\)`));
    assert.match(css, new RegExp(`\\.pk-win\\.${className}[^}]*grid-template-columns:`));
  }
  assert.match(css, /\.pk-win\.pk-offline-list[^}]*>\s*:nth-child\(3\)[^}]*display:\s*none\s*!important/);
  assert.match(css, /\.pk-win\.pk-upload-list[^}]*>\s*:nth-child\(3\)[^}]*display:\s*none\s*!important/);
});

test('share parse mobile headers account for their hidden starred column', () => {
  assert.match(css, /\.pk-win\.pk-share-parse-list:not\(\.pk-share-parse-insight-list\)[^}]*\.pk-grid-hd[^}]*>\s*:nth-child\(n\+4\)/);
  assert.match(css, /\.pk-win\.pk-share-parse-list:not\(\.pk-share-parse-insight-list\)[^}]*\.pk-row\s*>\s*:nth-child\(n\+3\)/);
  assert.match(css, /\.pk-win\.pk-share-parse-list\.pk-share-parse-insight-list[^}]*\.pk-grid-hd[^}]*>\s*:nth-child\(n\+5\)/);
  assert.match(css, /\.pk-win\.pk-share-parse-list\.pk-share-parse-insight-list[^}]*\.pk-row\s*>\s*:nth-child\(n\+4\)/);
});

test('mobile modal touch sizing excludes compact input controls', () => {
  assert.match(css, /\.pk-modal input:not\(\[type="checkbox"\]\):not\(\[type="radio"\]\)/);
  assert.doesNotMatch(css, /\.pk-modal input,\.pk-modal select[^}]*min-height:\s*44px/);
});

test('mobile filter and calendar popups fit and clamp within the viewport', () => {
  assert.match(css, /#pk-filter-cat-pop\s*\{[^}]*width:\s*min\(420px,calc\(100vw - 16px\)\)\s*!important/);
  assert.match(css, /\.pk-cal-pop\s*\{[^}]*max-width:\s*calc\(100vw - 16px\)[^}]*max-height:\s*calc\(100dvh - 16px\)/);
  assert.match(css, /\.pk-cal-main\s*\{[^}]*min-width:\s*0[^}]*flex:\s*1/);

  const filterStart = source.indexOf('const showFilterCatPopup');
  assert.notEqual(filterStart, -1);
  const filterSection = source.slice(filterStart, filterStart + 6500);
  assert.ok((filterSection.match(/computeViewportPopupPosition\(/g) || []).length >= 2);
  assert.ok((filterSection.match(/pop\.style\.position\s*=\s*'absolute'/g) || []).length >= 2);

  const calendarStart = source.indexOf('const renderCalendar');
  assert.notEqual(calendarStart, -1);
  const calendarSection = source.slice(calendarStart, calendarStart + 8000);
  assert.match(calendarSection, /isMobileManagerEnvironment\(\)/);
  assert.match(calendarSection, /computeViewportPopupPosition\(/);
  assert.match(calendarSection, /pop\.style\.position\s*=\s*'absolute'/);
});

test('mobile player auxiliary panels cannot exceed the screen', () => {
  assert.match(css, /\.pk-err-dialog\s*\{[^}]*min-width:\s*0\s*!important[^}]*width:\s*calc\(100vw - 32px\)\s*!important/);
  assert.match(css, /\.pk-err-dialog\s*\{[^}]*max-height:\s*calc\(100dvh - 32px\)[^}]*overflow:\s*auto/);
  assert.match(css, /\.pk-sub-search-modal\s*\{[^}]*width:\s*calc\(100vw - 24px\)\s*!important[^}]*height:\s*min\(450px,calc\(100dvh - 24px\)\)\s*!important/);
});

test('mobile analysis popup width includes its padding and uses measured positioning', () => {
  assert.match(css, /\.pk-dropdown-menu,\.pk-select-menu,\.pk-ana-pop,\.pk-ctx\s*\{[^}]*box-sizing:\s*border-box/);
  const analysisPopupStart = source.indexOf('const updatePopPos = () =>');
  assert.notEqual(analysisPopupStart, -1);
  const analysisPopupSection = source.slice(analysisPopupStart, analysisPopupStart + 1000);
  assert.match(analysisPopupSection, /activePop\.offsetWidth\s*\|\|/);
});

test('touch landscape keeps a compact header with the close control available', () => {
  const landscapeStart = css.indexOf('@media (max-height:520px) and (pointer:coarse)');
  assert.notEqual(landscapeStart, -1);
  const landscapeCss = css.slice(landscapeStart);
  assert.doesNotMatch(landscapeCss, /\.pk-hd\s*\{[^}]*display:\s*none\s*!important/);
  assert.match(landscapeCss, /\.pk-hd\s*\{[^}]*display:\s*flex\s*!important[^}]*height:\s*42px\s*!important/);
  assert.match(landscapeCss, /\.pk-hd \.pk-tt\s*\{[^}]*display:\s*none\s*!important/);
});
