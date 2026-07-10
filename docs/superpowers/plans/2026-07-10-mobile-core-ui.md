# Mobile Core UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the PikPak Enhancement Master manager usable on Android Chromium viewports from 360px to 480px wide without changing the desktop layout above 720px.

**Architecture:** Keep the upstream single-file userscript structure. Add a pure responsive grid-metrics helper, a mobile-only CSS layer inside the existing `CSS` template, a touch-capable launcher, and a proxy overflow menu for advanced actions; desktop selectors and behavior remain the default path.

**Tech Stack:** Vanilla JavaScript userscript, CSS media queries, Node.js built-in test runner, and Git static checks.

## Global Constraints

- Target Android Chromium userscript environments at widths `360-480px`, with common portrait and landscape heights.
- Activate the mobile manager layout only at `max-width: 720px`; desktop appearance and interaction stay unchanged.
- Keep core browse, search, upload/download, copy/move/delete, share, media, and settings actions directly usable.
- Put analysis, deduplication, migration, archive, and other secondary actions in a mobile-only overflow menu.
- Add no runtime dependency and preserve the repository's single-file distribution format.

---

### Task 1: Add Mobile Contract Tests

**Files:**
- Create: `tests/mobile-ui.test.mjs`
- Test: `PikPak_Enhancement_Master.user.js`

**Interfaces:**
- Consumes: the userscript source and its embedded `CSS` template.
- Produces: regression checks for the responsive helper, breakpoint CSS, launcher pointer support, and advanced-action menu.

- [x] **Step 1: Write failing source-contract and grid-metrics tests**

```js
test('mobile grid uses two columns at 390px and preserves desktop metrics', () => {
  assert.equal(computeResponsiveGridLayout(390, false, 228).cols, 2);
  assert.equal(computeResponsiveGridLayout(1200, false, 286).minCardWidth, 208);
});

test('userscript exposes the manager below 720px and adds mobile UI contracts', () => {
  assert.doesNotMatch(source, /window\.innerWidth < 720[\s\S]{0,80}return/);
  assert.match(css, /@media \(max-width:720px\)/);
  assert.match(source, /pk-mobile-more/);
  assert.match(source, /pointerdown/);
});
```

- [x] **Step 2: Run the tests and verify RED**

Run: `node --test tests/mobile-ui.test.mjs`

Expected: failures for the missing helper, mobile media query, overflow menu, and pointer launcher.

- [x] **Step 3: Commit the test baseline with the implementation task once GREEN**

Run after Task 2: `git add tests/mobile-ui.test.mjs PikPak_Enhancement_Master.user.js && git commit -m "feat: add mobile core manager layout"`

### Task 2: Implement Responsive Manager and Touch Interaction

**Files:**
- Modify: `PikPak_Enhancement_Master.user.js`
- Test: `tests/mobile-ui.test.mjs`

**Interfaces:**
- Produces: `computeResponsiveGridLayout(vpWidth, isMax, rowHeight) -> { mobile, padX, gapX, gapY, cols, cardWidth, cardHeight, minCardWidth }`.
- Produces: mobile-only elements `#pk-mobile-more` and `.pk-mobile-more-menu` that proxy clicks to existing advanced-action buttons.

- [x] **Step 1: Add the pure layout helper and route grid calculations through it**

```js
function computeResponsiveGridLayout(vpWidth, isMax, rowHeight) {
  const mobile = vpWidth <= 720;
  const padX = mobile ? 10 : (isMax ? 20 : 16);
  const gapX = mobile ? 10 : (isMax ? 18 : 16);
  const gapY = mobile ? 12 : (isMax ? 20 : 16);
  const minCardWidth = mobile ? 152 : (isMax ? 236 : 208);
  const innerWidth = Math.max(minCardWidth, vpWidth - padX * 2);
  const cols = Math.max(1, Math.floor((innerWidth + gapX) / (minCardWidth + gapX)));
  const cardWidth = Math.max(mobile ? 144 : 188, Math.floor((innerWidth - gapX * (cols - 1)) / cols));
  return { mobile, padX, gapX, gapY, cols, cardWidth, cardHeight: Math.max(mobile ? 208 : 220, rowHeight - gapY), minCardWidth };
}
```

- [x] **Step 2: Add a `max-width:720px` CSS layer**

The mobile layer makes `.pk-win` fill `100dvh`, moves `.pk-sidebar` to a safe-area-aware horizontal bottom bar, makes toolbars horizontally scrollable, uses compact mode-specific list columns that retain file names and primary task state, reduces grid-card geometry, exposes card check/more controls without hover, adapts modal/settings/bookmark/share layouts, and makes video/image viewers full screen.

- [x] **Step 3: Add the advanced-action overflow proxy**

Create a mobile-only button in `.pk-ft .pk-grp`. On open, rebuild menu items from the current icon, label, visibility, and disabled state of `pk-export`, `pk-scan-dup`, `pk-analyze`, `pk-migrate`, `pk-magnet-archive-check`, `pk-img-search`, `pk-export-m3u`, `pk-ext`, `pk-aria2`, and `pk-blacklist-manager`; proxy each menu selection to the original button.

- [x] **Step 4: Replace mouse-only launcher dragging with pointer events**

Set `touch-action:none`, use `pointerdown`/`pointermove`/`pointerup`, preserve click-versus-drag thresholds and saved position, and remove the `<720px` early return.

- [x] **Step 5: Run tests and verify GREEN**

Run: `node --test tests/mobile-ui.test.mjs`

Expected: all tests pass.

### Task 3: Distribution Verification

**Files:**
- Modify: `README.md`
- Modify: `PikPak_Enhancement_Master.meta.js`
- Modify: `version.json`

**Interfaces:**
- Consumes: the userscript source-contract test and distribution metadata.
- Produces: a consistent `4.4.1` userscript release with syntax, tests, and diff checks passing.

- [x] **Step 1: Honor the user's verification preference**

Browser-based verification was explicitly stopped at the user's request. Do not add or retain a browser preview harness.

- [x] **Step 2: Update distribution metadata and README**

Bump the userscript patch version consistently to `4.4.1` in `PikPak_Enhancement_Master.user.js`, `PikPak_Enhancement_Master.meta.js`, and `version.json`, and add a concise README changelog entry describing Android Chromium mobile manager support.

- [x] **Step 3: Run final verification**

Run:

```bash
node --check PikPak_Enhancement_Master.user.js
node --test tests/mobile-ui.test.mjs
git diff --check
```

Expected: syntax check succeeds, all tests pass, and `git diff --check` reports no whitespace errors.

- [x] **Step 4: Commit verification and documentation**

Run: `git add README.md PikPak_Enhancement_Master.meta.js version.json && git commit -m "docs: document Android mobile support"`
