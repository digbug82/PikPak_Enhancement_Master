<p align="center">
  <img src="https://socialify.git.ci/digbug82/PikPak_Enhancement_Master/image?font=Inter&forks=1&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2Fdigbug82%2FPikPak_Enhancement_Master%2Fmain%2Fimg%2Flogo-socialify.svg&name=1&owner=1&pattern=Plus&stargazers=1&theme=Auto" alt="PikPak Enhancement Master" width="100%" />
</p>

<p align="center"><strong>Feature-rich, elegant interface.</strong></p>

---

# 📦 PikPak Enhancement Master

[![Install / Update Latest Version](https://img.shields.io/badge/Install%20/%20Update%20Latest%20Version-GitHub%20Latest-2EA44F?style=for-the-badge&logo=github&logoColor=white)](https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/PikPak_Enhancement_Master.user.js)

[![Version](https://img.shields.io/badge/dynamic/json?style=flat-square&label=Version&color=0067C0&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fdigbug82%2FPikPak_Enhancement_Master%2Fmain%2Fversion.json)](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js)
[![License](https://img.shields.io/badge/License-AGPL--3.0--or--later-red?style=flat-square)](https://spdx.org/licenses/AGPL-3.0-or-later.html)
[![Platform](https://img.shields.io/badge/Platform-PikPak%20Web-orange?style=flat-square)](https://mypikpak.com/drive/all)
[![GitHub Stars](https://img.shields.io/github/stars/digbug82/PikPak_Enhancement_Master?style=flat-square&logo=github&label=Star)](https://github.com/digbug82/PikPak_Enhancement_Master)

⭐ If this script helped you, please give the project a Star

---

## 🌍 Supported Languages

[English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(en).md) | [简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/README.md) | [繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(tc).md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ja).md) | [Indonesia](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(id).md) | [Bahasa Melayu](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ms).md)

---

## ✨ Main Features

### ✨ Experience and Navigation Engine

* **Side-button navigation**: supports mouse side buttons for forward / back navigation, making it quick to move across folder levels.
* **Advanced path bar**: supports wheel scrolling, same-level folder dropdown switching, path echoing, and trace-back jumps.
* **Enhanced global search**: supports searching by file name and file path, highlights matched keywords, and prioritizes showing the area around matched keywords for long file names.
* **Browsing preferences**: supports sorting preferences, view preferences, keeping browsing position, media mode, hiding button text, blurring media cover thumbnails, and dark mode.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/table/table_en.gif" width="1100" alt="Path">
</p>

---

### 📂 Bulk and Space Management

* **Bulk Rename**: supports regex replace / delete, episode serial numbers, text formatting, FC2 standard naming, ad-prefix removal, and MIME-based smart extension repair.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/rename/rename_en.gif" width="550" alt="Bulk Rename">
</p>

* **File analysis**: combines file filtering and Deduplicate Files capabilities. Deduplication supports three analysis types: **Exact Match / Duration Sim / Name Sim**.
* **Filter enhancement**: supports filtering by size, type, path, keywords, and more, with one-click selection, invert selection, folder-based selection, in-group sorting, and other bulk helpers.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_scan/file_scan_en.gif" alt="File Perspective">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_dup/file_dup_en.gif" alt="Deduplicate Files">
</p>

* **Folder analysis**: combines Folder Analysis and folder deduplication capabilities. Deduplication supports three modes: **name / similarity / containment ratio**, useful for duplicate episodes, image packs, document directories, and more.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_scan/folder_scan_en.gif" alt="Folder Perspective">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_dup/folder_dup_en.gif" alt="Folder Deduplication">
</p>

* **M3U playlist export**: supports exporting selected videos as an M3U file.
* **Export Directory**: supports exporting the current directory as a directory tree or directory list.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/tree/tree_en.png" width="350" alt="Export Directory">
</p>

* **Smart organization**: supports permanent deletion, empty-folder cleanup, Bulk Extract, and automatic cleanup of already extracted files.
* **Resource Manager**: supports custom resource records. It can run cleanup as a blacklist, or act as a protected list that automatically skips matched items during bulk deletion.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/manager/manager_en.gif" width="550" alt="Resource Manager">
</p>

> ⚠️ During heavy operations such as analysis, organization, bulk deletion, bulk moving, and Bulk Extract, it is not recommended to modify the same batch of files in other clients at the same time, to avoid sync conflicts.

---

### 🌐 Transfer, Cloud Download, and Share Parser

* **Share Parser**: supports parsing share links and viewing shared content before saving it, without occupying your own cloud drive space before saving.
* **Shared File Insight**: supports recursive scanning, filtering, and previewing of shared content, useful for checking internal share structure before saving.
* **Share Parsing History**: can record parsed share links and passwords for quick reopening later.
* **Share management**: supports setting an access count limit for shares. When the condition is reached, the share can be automatically cancelled to invalidate the link.
* **Upload protection**: includes upload leave reminders and protection / cleanup for interrupted uploads, residual tasks, and abnormal files.
* **Enhanced Cloud Download**: supports automatic deduplication for batch offline links. Built-in smart magnet cleanup can extract Base32 / Hex hashes and remove noisy text.
* **TXT magnet extraction**: supports previewing TXT text and detecting magnet, HTTP, FTP, ed2k, thunder, and other download links from the text for Cloud Download submission.
* **Magnet preview**: when public preview information is available, displays file count, total size, type, hash, and multiple preview images.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/torrent/torrent_en.png" height="320" alt="Magnet">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/share/share_en.gif" height="320" alt="Share">
</p>

> ⚠️ Automatic blocking based on share access count only works while the web page stays open and the device is not asleep.

---

### 🎬 Immersive Media Enhancement

* **Playback engine enhancement**: supports 0.5x - 3.0x speed, rotate / flip, forced aspect ratio, automatic intro / outro skipping, continuous playback / loop, and progress-bar thumbnail preview.
* **Default opening method**: choose the default playback method between the script player and PotPlayer, with default video quality / external playback quality settings.
* **Music Player**: supports online audio playback, playlists, sequential playback, shuffle, single-track loop, mini-window mode, cover display, and volume control.
* **Audio mini-window mode**: supports detaching the Music Player into a small window while keeping playback controls, cover display, and theme adaptation.
* **Subtitle system**: supports cloud same-name subtitle loading, local subtitle import, and online subtitle search. It also supports subtitle offset, position, font size, and background opacity adjustment.
* **Visual assistance**: supports image search from an image or the current video frame. Choose Google Lens, Yandex, SauceNAO, or trace.moe to look up covers, actors, anime, or source material.
* **Media mode**: can be enabled in Settings so pure video or pure image directories default to A-Z sorting, improving continuity when browsing episodes or comics.
* **PotPlayer protocol repair assistant**: built-in PotPlayer protocol detection and repair assistance to reduce cases where the browser cannot launch the external player.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/video/video_en.gif" alt="Video">
</p>

---

### ⚡ Download and Distribution

* **Downloader Type**: supports Aria2-compatible RPC, Gopeed API, ABDM API, and IDM list export, adapting to different local download tools.
* **Directory structure restore**: when pushing a whole folder, it can automatically restore the cloud drive tree structure, avoiding flattened folders after download.
* **Video download acceleration**: video downloads can prefer the playback pipeline to obtain original-quality direct links and improve download speed.
* **Download Filter**: supports filtering files by size, extension, and name keywords, applied to browser downloads and downloader distribution.
* **Direct download acceleration domain**: supports a download acceleration domain, with two reverse-proxy rewrite modes: original-link concatenation and URL parameter forwarding.
* **Exception handling**: automatically skips invalid 0KB files during push and supports failed-list export.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/filter/filter_en.png" height="290" alt="Download Filter">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/aria2/aria2_en.gif" height="290" alt="Aria2">
</p>

---

### ⚙️ Config and Data Management

* **Config Management and cleanup**: supports exporting script config for cross-device use, importing config with merge and deduplication, and cleaning by config type.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/cache/cache_en.png" width="350" alt="Cache">
</p>

* **Extract Password Vault**: records passwords that successfully extracted archives, so Bulk Extract can auto-fill them later.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/archive/archive_en.png" width="250" alt="Password Vault">
</p>

* **Multi-account Data Migration**: supports encrypting selected items into a one-click package, then automatically recognizing and taking over the transfer after you sign in to another account.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/migrate/migrate_en.gif" alt="Data Migration">
</p>

---

## 📥 Installation Guide

1. **Install a userscript manager**: [ScriptCat](https://scriptcat.org/), [Violentmonkey](https://violentmonkey.github.io/get-it/), or [Tampermonkey](https://www.tampermonkey.net/) is recommended.
2. **Install the script**: click **[Install Now](https://github.com/digbug82/PikPak_Enhancement_Master/raw/main/PikPak_Enhancement_Master.user.js)**.
3. **Open PikPak Web**: visit [PikPak](https://mypikpak.com/drive) and sign in.
4. **Start Enhancement Master**:
   * In normal mode: after login, click the floating blue **PikPak Logo ball** in the sidebar to enter.
   * In Turbo Mode: after login, the script can automatically start and take over the web client.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/turbo/turbo_en.gif" alt="Cover">
</p>

---

## ❓ FAQ

**Q: Why is the blue floating ball not shown after installing the script?**  
**A:** Please check in this order:

1. Make sure **PikPak Enhancement Master** is enabled in your userscript manager.
2. Make sure you are signed in to PikPak Web.
3. If you are using **Tampermonkey**, confirm that **"Allow User Scripts"** is enabled on the browser extension details page.
4. Use the latest version of **Edge / Chrome** if possible.
5. If the floating ball still does not appear after the steps above, temporarily disable all other browser extensions, then refresh the page (F5) and try again.

**Q: Returning from deeply nested folders is troublesome. Do I have to re-enter from the main page?**  
**A:** No. All pages with a path bar in the script support **horizontal scrolling with the mouse wheel**.

When the folder level is deep and earlier parent folders are hidden, move the cursor to the top path bar area and scroll the mouse wheel. The path bar will scroll horizontally and reveal hidden parent paths.

After they are shown, click the corresponding parent folder name to quickly return to the previous level or jump to any parent directory.

**Q: In Deduplicate Files / folder deduplication, will selected files automatically keep one original file, or do I need to filter again in the list?**  
**A:** Selected items in Deduplicate Files and folder deduplication are essentially **actual operation targets**. Deduplication mode does not directly delete files by itself; it only lists items that may be duplicates. You need to confirm and select them, then click delete to actually clean them.

In deduplication results:

* The checkbox in each group header means selecting the whole group;
* In-group sorting only rearranges display order by time, size, path, name, and other rules. It does not decide who to delete or keep automatically;
* Only when you click **one-click select** will the script process by rule: keep 1 item in each group and select the rest.

Also, **folder-based selection** in Deduplicate Files selects files inside a certain folder from the duplicate list; **invert selection** selects files outside that folder from the duplicate list.

Note that **Exact Match** in Deduplicate Files uses hash matching and is usually suitable for cleanup with one-click selection. **Duration Sim / Name Sim** in Deduplicate Files, and folder deduplication, are similarity-algorithm matches. Manual confirmation before deletion is recommended to avoid accidental deletion.

**Q: Why does the script's "Exact Match" report no duplicates, while the client shows duplicate files? Refreshing the page or switching browsers still cannot scan them. What should I do?**  
**A:** The script's "Exact Match" judges by **file content hash**, not by file name. Only files with identical hash and identical size are considered exact duplicates.

"Duplicate files" shown in the client are not necessarily completely identical files. They may include files with the same name, names ending with `(1)` / `(2)`, or files with similar size or duration. As long as the actual content differs, the script's "Exact Match" will not classify them as duplicates.

If you want to find files that "look duplicated", use the **Name Sim** mode in Deduplicate Files or folder deduplication.

**Q: Why do some videos show an unable-to-play message the first time they are opened or when switching quality, but play normally later?**  
**A:** This is usually related to the preparation status of PikPak's official video stream or the browser decoding state, and is not necessarily a script-side judgment error.

Some videos may also fail to open the first time, fail briefly when switching quality, and then play later on the official web client. The lower-level error received by the script is usually similar to:

```text
[VideoError] Code: 4, Msg: PipelineStatus::DEMUXER_ERROR_COULD_NOT_OPEN: FFmpegDemuxer: open context failed
```

This error cannot reliably distinguish between "the official resource is still preparing" and "the current quality is truly unplayable". If the script forcibly treats it as "preparing" and keeps retrying, truly unplayable videos may be misjudged as playable, causing a worse experience.

Therefore, the script currently keeps the "current quality unavailable" prompt to avoid misleading users.

When this happens, you can try:

* Wait a few seconds and open the video again;
* Switch to another quality;
* Try using external playback.

If a more reliable official status field is found later, this type of false alarm can be further optimized.

**Q: Bulk Extract shows "system busy / waiting to retry". Is this a script bug?**  
**A:** No. This usually means the PikPak cloud server has triggered concurrent frequency limits. It is the official API being busy, not an exception in the script itself.

If a file still fails after multiple retries, it usually means the resource may already be damaged, restricted, or affected by poor server status in the cloud. Try again later, or download the file locally before handling it.

**Q: After bulk deletion and restore, the file count is correct, but files did not return to their original folders and the directory structure looks messy. Can it be restored with one click?**  
**A:** This is usually not an operation mistake and not lost-file logic in the script. It is closer to how PikPak's official recycle bin behaves when restoring from **virtual paths / aggregated results**.

When files are bulk-deleted from **aggregated views or virtual paths** such as Deduplicate Files, File Perspective, Folder Perspective, Recently Added, or Favorites, those files may originally come from many different folders. After deletion, restoring from the recycle bin may not restore each item to its original parent folder. The official restore mechanism may instead restore many files into one unified directory, breaking the original multi-level structure.

Before bulk-deleting in aggregated results such as Deduplicate Files, File Perspective, Folder Perspective, Recently Added, or Favorites, confirm that these files are truly no longer needed. Especially when files come from many different directories, avoid relying on recycle-bin bulk restore after deletion.

**Q: Why are some files protected or unable to be deleted during bulk deletion?**  
**A:** First check whether these files have been recorded in **Resource Manager**. If "skip resources recorded in manager on delete" is enabled in Settings, the script treats matched files as protected items to avoid accidental deletion.

**Solution:**

1. Go to Settings and uncheck this protection rule, then run deletion again;
2. Or click the **"Resource Manager"** entry in the toolbar / sidebar and choose **"Run Cleanup Now"** to force physical cleanup on these recorded items.

**Q: Why are files not shown in the list after I run "paste"?**  
**A:** First check whether your cloud drive has enough remaining space. PikPak currently often handles "insufficient space" by **silent blocking**, meaning it may not show a clear prompt when capacity is exceeded and instead directly stops the operation in the background.

So if files do not appear after pasting, the most common reason is a capacity limit. Clean up space first, then try again.

**Q: What is "multi-account Data Migration" and how do I use it?**  
**A:** This feature can quickly transfer files or folders from your current account to another PikPak account.

**Steps:**

1. Select the files or folders to migrate in the current account;
2. Click the **"Data Migration"** button at the bottom;
3. The script will automatically encrypt and package the data, then log out of the current account;
4. Then sign in to the target account normally;
5. After successful login, the script will automatically detect the migration package in local cache and show a popup for one-click receiving.

---

## 🛡️ Privacy and Security Statement

* **Local-first**: all core capabilities of this script interact directly with PikPak official APIs through the browser. Your account Token, Extract Password Vault, and most local configuration data are stored in the local browser environment by default.
* **Zero collection**: the script **does not actively collect** user privacy data and **will never** upload your file information or account credentials to any third-party server.
* **Third-party APIs**: only when using extension features such as "online subtitle search", "image search", or "magnet preview" will the script send necessary search keywords, image feature parameters, or magnet feature information to related public services. This does not involve your personal identity information.
* **Membership boundary**: this script is only used to enhance the PikPak web operation experience. It **does not have the ability to crack, bypass, or forge PikPak membership benefits**, and it does not provide any membership-unlocking function that violates official service rules.

---

## 🚀 Changelog

### V3.1.0

* Added **multi-downloader support**, expanding Downloader Type to Aria2, Gopeed, ABDM, and IDM.
* Added **Share Parsing History**, supporting records for successfully parsed shares, search, re-parse, pinning, notes, deletion, and clearing.
* Optimized **download pipeline handling**, supporting videos to prefer the playback pipeline for accelerated downloads.
* Optimized **Music Player mini-window**, with continuous scrolling for long song names when collapsed.
* UI and stability improvements.

### V3.0.3

* Added **Aria2 download path**.

### V3.0.2

* Changed the project license to **AGPL-3.0-or-later**, removed non-commercial use restrictions, and retained the open-source requirement for modified versions.
* Added third-party MIT License statements and thanks to the original project.

### V3.0.1

* Stability improvements and config file completion.

### V3.0.0

* Added **Music Player**, supporting online audio playback, playlists, sequential playback, shuffle, single-track loop, mini-window mode, cover display, and volume control. 
* Added **TXT Preview**, supporting detection of download links from text and submission to Cloud Download. 
* Added **Export M3U**, supporting export of selected videos as an M3U file for batch playback in external players.
* Added **Default opening method** setting, allowing the default playback path to be selected between the script player and PotPlayer.
* Optimized **Share Parser mode**, improving paginated loading, directory cache, recursive insight, share preview limit prompts, and shared file opening.
* Optimized **sorting and view preferences**, unifying sorting and view status for Home, Recycle Bin, Watch History, File Perspective, Share Parser, and other scenarios.
* Optimized **Recycle Bin**, adding grid view. 
* Optimized **local upload and login recovery**, adding official upload fallback prompts, direct-upload signature error prompts, and official login-state recovery detection.

<details>
<summary>View historical changelog</summary>
  
### V2.5.1

* Added **Aria2 save folder internal structure** setting.
* Optimized **Share Parser File Perspective**, fixing issues such as abnormal Folders on top button status after returning.
* Fixed abnormal switch behavior when the script blocks official web popups.
* Removed the old logic that forcibly hid the script UI in small windows, and changed to adaptive hiding of button text.

### V2.5.0

* Added **Share Parser mode**, supporting share link parsing, clipboard recognition, recursive insight, file saving, media preview, and archive handling.
* Added **direct download acceleration domain setting**, supporting prefix mode and query-parameter mode, usable for browser downloads and Aria2 / Motrix push link rewriting.
* Added player mouse-wheel volume adjustment, with volume overlay prompt and mute icon status.
* Optimized Web Fullscreen player, narrow-screen adaptation, search highlighting, archive preview, and settings save prompts.
* Fixed Aria2 / Motrix push of 0KB files, abnormal row height, unified icons, English column width, path dropdown font, and other issues.

### V2.4.0

* Added version check and update prompts.
* Added video playback settings, supporting playback progress reading and default quality selection.
* Added Web Fullscreen for video playback.
* Added hide button text setting, allowing only icons and hover tips to be kept.
* Optimized grid view, video playback experience, settings window, password vault popup, Recently Added, and Watch History data fetching.
* Cleaned debug output, redundant config, and low-risk dead code to reduce script size.

### V2.3.0

* Added **PotPlayer protocol repair assistant**.

### V2.2.3

* Fixed upload failure.
* Improved UI stability.

### V2.2.2

* Fixed shortcut hierarchy conflicts.

### V2.2.1

* Fixed Aria2 / Motrix download issues.

### V2.2.0

* Added **clipboard magnet listening** and **magnet preview** features.
* Improved UI stability.

### V2.1.1

* Fixed Aria2 / Motrix connection failure in reverse-proxy environments that only support ws:// / wss:// RPC or non-standard ports.

### V2.1.0

* Added support for listening to mouse side buttons for directory-level navigation.
* Improved stability.

### V2.0.0

* Supported languages expanded to **简体中文 / 繁體中文 / English / 한국어 / 日本語 / Indonesia / Bahasa Melayu**.
* Upgraded UI and architecture, externalized the image search button, and added grid view.

### V1.3.2

* Hardened local upload logic and added direct connection for Mainland China IP.
* Adjusted the duration-similarity threshold for Deduplicate Files to improve detection accuracy.

### V1.3.1

* Further optimized login flicker.

### V1.3.0

* Added multi-account Data Migration.
* Added permanent deletion mechanism, supporting skipping the recycle bin to free space.

### V1.2.0

* Refactored the video duration sniffing engine.

### V1.1.0

* Aria2 supports keeping folder path structure, with added missing-delivery reminders and failed-list export.
* Cloud Download supports batch submission and smart deduplication, with automatic cleanup of polluted magnet links and Base32 auto-decoding.
* Bulk Rename preview interface adds icons and cover display, and supports folder hover large-image preview.
* Import upgraded to smart merge mode. Imported backups no longer overwrite existing local lists and records.

</details>

---

## 🤝 Thanks

This project's UI design language and some web API call logic are deeply inspired by [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager) (by 브랜뉴). Respect and thanks.
