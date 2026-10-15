# Regression checks

Run from the repository root with Node.js (no dependencies):

```sh
node --check PikPak_Enhancement_Master.user.js
node tests/duration.cjs
node tests/scoped-search.cjs
node tests/duplicate.cjs
```

The tests evaluate relevant sections of the actual userscript in isolated Node VM contexts. Network calls, directory listings, timers, storage, and media elements are mocked; they do not connect to PikPak, read an account, or delete files.

- **Duration (20 checks):** metadata and cache handling, source fallback, HLS and bounded Range reads, visible-item priority, concurrency and throttling, cancellation, scoped-search eligibility, and scroll preservation when closing video in duration order.
- **Scoped search (14 checks):** current-folder and recursive scope, category/keyword/starred intersections, cache reuse, stale responses, cancellation, clearing results, and keeping the result pool consistent after successful deletion.
- **Duplicates (17 checks):** missing MIME types, normalized hashes/sizes, cached durations, episode/segment conflicts, unknown metadata, copy suffixes, unrelated titles with coincidentally close durations/sizes, and pairwise grouping constraints.

These synthetic checks do not measure real account duplicate accuracy, media-source compatibility, or end-to-end ScriptCat integration.

For manual review, open the manager in a small folder and expand the search filters. Compare current-folder versus recursive results, combine categories with a keyword/starred filter, clear the results, and check the controls at narrow widths. In duration order, open a video whose duration is unknown and close it after loading; the list should keep its scroll position. Review duplicate candidates against known copies and distinct episodes before taking any file action. Some sources may still provide no usable duration, and the new scoped-search labels currently use Simplified Chinese.
