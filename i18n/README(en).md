<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/turbo/turbo_en.gif" alt="Cover">
</p>

# 📦 PikPak Enhancement Master

[![Install / Update Latest Version](https://img.shields.io/badge/Install%20/%20Update%20Latest%20Version-GitHub%20Latest-2EA44F?style=for-the-badge&logo=github&logoColor=white)](https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/PikPak_Enhancement_Master.user.js)

[![Version](https://img.shields.io/badge/Version-3.0.0-0067C0?style=flat-square)](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js)
[![License](https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-red?style=flat-square)](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html)
[![Platform](https://img.shields.io/badge/Platform-PikPak%20Web-orange?style=flat-square)](https://mypikpak.com/drive/all)
[![GitHub Stars](https://img.shields.io/github/stars/digbug82/PikPak_Enhancement_Master?style=flat-square&logo=github&label=Star)](https://github.com/digbug82/PikPak_Enhancement_Master/stargazers)

⭐ If this script helped you, please give the project a Star

---

## 🌍 Supported Languages

[English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(en).md) | [简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/README.md) | [繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(tc).md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ja).md) | [Indonesia](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(id).md) | [Bahasa Melayu](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ms).md)

---

## ✨ Main Features

### ✨ Experience and Navigation Engine

* **Side-button navigation**: Supports mouse side buttons for forward / back navigation, letting you switch quickly between directory levels.
* **Advanced path bar**: Supports mouse-wheel sliding, sibling folder drop-down switching, path display, and jump-back tracing.
* **Enhanced global search**: Supports searching by file name and file path, highlights matched keyword segments in red, and prioritizes content near the hit for long file names.
* **Browsing preferences**: Supports sort preferences, view preferences, retaining browsing position, Media Mode, Hide Button Text, blurred media cover thumbnails, and night mode.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/table/table_en.gif" width="1100" alt="Path">
</p>

---

### 📂 Batch and Space Management

* **Bulk Rename**: Supports regex replace / delete, episode serial numbers, text formatting, FC2 naming conventions, ad-prefix removal, and MIME-based smart extension repair.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/rename/rename_en.gif" width="550" alt="Bulk Rename">
</p>

* **File analysis**: Combines file filtering and Deduplicate Files capabilities. Deduplication supports three analysis types: **hash Exact Match / video Duration Sim / Name Sim**.
* **Enhanced filtering**: Supports filtering by size, type, path, keywords, and more, with batch helpers such as Smart Select, Invert Selection, and Select by Folder.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_scan/file_scan_en.gif" alt="File Perspective">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_dup/file_dup_en.gif" alt="Deduplicate Files">
</p>

* **Folder analysis**: Combines Folder Perspective and Folder Deduplication capabilities. Deduplication supports three modes: **name / similarity / inclusion rate**, suitable for handling duplicate episodes, image packs, document folders, and more.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_scan/folder_scan_en.gif" alt="Folder Perspective">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_dup/folder_dup_en.gif" alt="Folder Deduplication">
</p>

* **Export Directory**: Supports exporting the current directory as a folder tree or directory list, making it easier to archive, verify, and share file structures.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/tree/tree_en.png" width="350" alt="Export Directory">
</p>

* **Smart organization**: Supports permanent deletion, Prune Empty Folders, Bulk Extract, and automatic cleanup of extracted files.
* **Resource Manager**: Supports custom resource lists that can be used as a blacklist for cleanup or as a protected list that automatically skips matched items during batch deletion.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/manager/manager_en.gif" width="550" alt="Resource Manager">
</p>

> ⚠️ During heavy operations such as analysis, organization, batch deletion, batch moving, or Bulk Extract, avoid modifying the same batch of files from other clients at the same time to prevent sync conflicts.

---

### 🌐 Transfer, Cloud Download, and Share Parser

* **Shared File Insight**: Supports recursive scanning and filtering of shared content, making it easy to preview the internal structure before saving.
* **Share management**: Supports setting a maximum number of share extractions. Once the condition is met, the share can be automatically canceled to invalidate the link.
* **Upload protection**: Includes upload-leave reminders, plus protection and cleanup for interrupted uploads, residual tasks, and abnormal files.
* **Cloud download enhancement**: Supports automatic deduplication for batched offline links. Built-in smart magnet cleaning can extract Base32 / Hex hashes and remove noisy text.
* **Magnet preview**: Supports multi-image preview when magnet content includes multiple preview images.
* **Torrent and snapshot fallback**: Supports parsing `.torrent` files. For some links whose media cannot be collected directly, it provides a web snapshot saving plan as a fallback.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/torrent/torrent_en.png" height="320" alt="Magnet">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/share/share_en.gif" height="320" alt="Share">
</p>

> ⚠️ Automatic interception for the share extraction limit only works while the web page remains open and the device is not asleep. 

---

### 🎬 Immersive Media Enhancement

* **Playback engine enhancement**: Supports 0.5x - 3.0x speed, rotate and flip, forced aspect ratio, automatic intro/outro skipping, continuous playback / loop, and progress-bar thumbnail previews.
* **Subtitle system**: Supports loading same-name cloud subtitles, importing local subtitles, and online subtitle search. It also supports subtitle time offset, position, font size, and background opacity adjustment.
* **Visual assistance**: Supports Image Search from an image or the current video frame, making it easier to trace covers, actors, anime, or source material.
* **Media Mode**: Can be enabled in settings so folders containing only videos or only images default to A-Z name sorting, improving episode / comic browsing continuity.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/video/video_en.gif" alt="Video">
</p>

---

### ⚡ Download, External Playback, and Distribution

* **PotPlayer protocol repair assistant**: Includes PotPlayer protocol detection and repair assistance to reduce cases where the browser cannot wake the external player.
* **RPC distribution**: Supports pushing files through the RPC protocol to download nodes such as Aria2 / Motrix.
* **Directory structure restoration**: When pushing an entire folder, it can automatically restore the tree structure from the cloud drive and avoid flattening directories after download.
* **Download Filter**: Supports filtering files by size, extension, and name keywords, applying to browser downloads and Aria2 / Motrix pushes.
* **Direct download acceleration domain**: Supports custom download acceleration domains, with two reverse-proxy rewrite modes: prefixing the full original link and passing URL parameters.
* **Exception handling**: Automatically skips invalid 0KB files during pushes and supports exporting a failure list.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/filter/filter_en.png" height="290" alt="Download Filter">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/aria2/aria2_en.gif" height="290" alt="Aria2">
</p>

---

### ⚙️ Config Management and Data Management

* **Configuration backup**: Supports exporting preferences, management rules, Password Vault, history records, and some feature configuration as JSON backup files with fingerprint verification.
* **Smart import**: During import, list-like data such as lists and records are merged and deduplicated. Basic settings are updated according to the imported file.
* **Local data cleanup**: Supports cleaning the global index, preferences, management rules, Password Vault, video cache, and runtime cache by category.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/cache/cache_en.png" width="350" alt="Cache">
</p>

* **Password Vault**: Centrally manages common extraction passwords for automatic Bulk Extract attempts and quick filling.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/archive/archive_en.png" width="250" alt="Password Vault">
</p>

* **Multi-account Data Migration**: Supports encrypting and packaging selected items, then automatically recognizing and taking over after another account logs in, enabling cross-account transfer.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/migrate/migrate_en.gif" alt="Data Migration">
</p>

> 📌 Preferences, management rules, Password Vault, cache, and history data are all stored in the local environment.

---

## 📥 Installation Guide

1. **Install a script manager**: [Violentmonkey](https://violentmonkey.github.io/get-it/) is recommended first, and [Tampermonkey](https://www.tampermonkey.net/) can also be used.
2. **Install the script**: Click **[Install Now](https://github.com/digbug82/PikPak_Enhancement_Master/raw/main/PikPak_Enhancement_Master.user.js)**.
3. **Open PikPak Web**: Visit [PikPak](https://mypikpak.com/drive) and log in to your account.
4. **Launch Enhancement Master**:
   * In normal mode: after login, click the floating blue **PikPak Logo ball** in the sidebar.
   * In Turbo Mode: after login, the script can start automatically and take over the web client.

---

## ❓ FAQ

**Q: Why does the blue floating ball not appear after installing the script?**  
**A:** Check in the following order:

1. Make sure **PikPak Enhancement Master** is enabled in your script manager.
2. Make sure you have logged in to your PikPak Web account.
3. If you are using **Tampermonkey**, confirm that **"Allow user scripts"** is checked on the browser extension details page.
4. Using the latest version of **Edge / Chrome** is recommended.
5. If the floating ball still does not appear after the steps above, temporarily disable all other browser extensions, then refresh the page (F5) and try again.

**Q: Returning to the previous level in multi-level folders is troublesome. Do I have to re-enter from the main page?**  
**A:** No. All pages in the script that have a path bar support **horizontal scrolling with the mouse wheel**.

When the directory level is deep and earlier parent folder paths are hidden, move the mouse to the top path bar area, then scroll the mouse wheel. The path bar will scroll horizontally and reveal the hidden parent paths.

After they appear, click the corresponding parent folder name to quickly return to the previous level or jump to any parent directory.

**Q: During Deduplicate Files / Folder Deduplication, will checked files automatically keep one original file, or do I need to filter again in the list?**  
**A:** Checked items in Deduplicate Files and Folder Deduplication are essentially **actual operation items**. Deduplication mode itself does not directly delete files; it only lists items that may be duplicates. You need to confirm and check items, then click delete to actually clean them up.

In deduplication results:

* The checkbox in each group header means selecting the entire group;
* Sorting within a group only rearranges the display by time, size, path, name, and other rules. It does not automatically decide what to delete or keep;
* Only when you click **Smart Select** will the script automatically process by rule: keep 1 item in each group, and check the remaining items.

In addition, **Select by Folder** in Deduplicate Files checks files inside a specific folder in the duplicate list. **Invert Selection** checks files outside that folder in the duplicate list.

Note that **Exact Match** in Deduplicate Files uses hash matching and is usually better suited for cleanup together with Smart Select. **Duration Sim / Name Sim** in Deduplicate Files, as well as Folder Deduplication, are similarity-algorithm matches, so manual confirmation before deletion is recommended to avoid accidental deletion.

**Q: Why does the script say there are no duplicate files in "Exact Match", while the client shows duplicate files? Refreshing the page or changing browsers still cannot scan them. What should I do?**  
**A:** The script's "Exact Match" judges by **file content hash**, not by file name. Only files with the same hash value and file size are considered exact duplicates.

"Duplicate files" shown by the client are not necessarily files with completely identical content. They may include files with the same name, file names ending in `(1)` / `(2)`, or files with similar size or duration. As long as the actual content differs, the script's "Exact Match" will not classify them as duplicates.

If you want to find these "seemingly duplicate" files, use the **Name Sim** mode in Deduplicate Files or Folder Deduplication.

**Q: Why do some videos show that they cannot be played the first time they are opened or when switching quality, but can be played again later?**  
**A:** This usually relates to the preparation state of PikPak's official video stream or the browser decoding state, and is not necessarily a script-side judgment error.

Some videos may also fail to open the first time, fail briefly after switching quality, then play after being reopened later on the official web client. The underlying error received by the script is generally similar to:

```text
[VideoError] Code: 4, Msg: PipelineStatus::DEMUXER_ERROR_COULD_NOT_OPEN: FFmpegDemuxer: open context failed
```

This error cannot reliably distinguish whether "the official resource is still preparing" or "the current quality is truly unplayable". If the script forcibly treats it as "preparing" and keeps retrying, videos that truly cannot play may also be misjudged as playable, leading to a worse experience.

Therefore, the script currently preserves the "current quality unavailable" prompt to avoid misleading users.

When this happens, you can try:

* Reopen the video after waiting a few seconds;
* Switch to another quality;
* Try playing it with an external player.

If a more reliable official status field is found later, this type of false positive can be further optimized.

**Q: During Bulk Extract, the prompt says "system busy / waiting to retry". Is this a script bug?**  
**A:** No. This usually happens because PikPak cloud servers have triggered a concurrency or frequency limit. It means the official interface is currently busy, not that the script itself is abnormal.

If a file still fails after multiple retries, it usually means the resource may already be damaged in the cloud, restricted, or the current server state is poor. Try again later, or download the file locally before processing it.

**Q: After batch deletion and restore, the file count is correct, but files did not return to their original folders. The directory structure looks messed up. Can it be restored with one click?**  
**A:** This is usually not an operation mistake, nor does it mean the script logic lost files. It is closer to how PikPak's official recycle bin behaves when restoring from **virtual paths / aggregated results**.

When files are batch deleted from **aggregated views or virtual paths** such as Deduplicate Files, File Perspective, Folder Perspective, Recent Added, or Starred, the files themselves may come from multiple different original folders. After deletion, restoring them from the recycle bin may not always restore each item to its original parent directory. The official restore mechanism may instead restore many files into one unified directory, breaking the original multi-level directory structure.

Before batch deleting from aggregated results such as Deduplicate Files, File Perspective, Folder Perspective, Recent Added, or Starred, confirm that these files are truly no longer needed. Especially when files come from multiple different directories, avoid relying on recycle-bin batch restore after deletion.

**Q: Why do some files show as protected or cannot be deleted during batch deletion?**  
**A:** First check whether these files have been recorded in **Resource Manager**. If you have enabled "Skip resources recorded in manager on delete" in settings, the script treats matched files as protected items to avoid accidental deletion.

**Solution:**

1. Go to settings, uncheck this protection rule, and run deletion again;
2. Or click the **"Resource Manager"** entry in the toolbar / sidebar, choose **"Run Cleanup Now"**, and perform forced physical cleanup on these recorded items.

**Q: Why does the file not appear in the list after I perform "Paste"?**  
**A:** First check whether your cloud drive has enough remaining space. PikPak currently usually applies a **silent interception** strategy for "insufficient space", meaning that when capacity is exceeded it may not show a clear prompt and instead directly abort the operation in the background.

Therefore, if files do not appear after paste, the most common reason is that the capacity limit was triggered. Clean up space first, then try again.

**Q: What is "Multi-account Data Migration"? How exactly do I use it?**  
**A:** This feature can quickly transfer files or folders from the current account to another PikPak account of yours.

**Steps:**

1. Select the files or folders to migrate in the current account;
2. Click the **"Data Migration"** button at the bottom;
3. The script automatically encrypts and packages the data, then logs out of the current account;
4. Then you only need to log in to the target account normally;
5. After login succeeds, the script automatically detects the migration package in the local cache and prompts you to receive it with one click.

---

## 🛡️ Privacy and Security Statement

* **Local first**: All core capabilities of this script interact directly with PikPak's official API through the browser. Your account Token, Password Vault, and most local configuration data are stored in the local browser environment by default.
* **Zero collection**: The script **does not actively collect** user privacy data and **will never** upload your file information or account credentials to any third-party server.
* **Third-party interfaces**: Only when using extended features such as "online subtitle search" or "Image Search" will the script send necessary search keywords or image feature parameters to relevant public services. This does not involve your personal identity information.

---

## 🚀 Changelog

### V3.0.0

* Added **Music Player**, supporting online audio playback, playlists, sequential play, shuffle, single-track repeat, popup mode, cover display, and volume control.
* Added **TXT Preview**, supporting download link detection from text and submission to cloud downloads.
* Added **M3U Playlist Export**, allowing selected videos to be exported as M3U files for batch playback in external players.
* Added **Default Open Method** setting, allowing the default playback path to be selected between the script player and PotPlayer.
* Optimized **Share Parsing Mode**, improving paged loading, directory cache, recursive insight, share preview limitation prompts, and shared file opening.
* Optimized **Sorting and View Preferences**, unifying sorting and view states across Home, Trash, Playback History, File Insight, and Share Parsing.
* Optimized **Trash**, adding grid view support.
* Optimized **Local Upload and Login Recovery**, adding official upload fallback prompts, direct-upload signature error prompts, and official login state recovery detection.

<details>
<summary>View historical changelog</summary>

### V2.5.1

* Added the **Preserve folder structure when downloading with Aria2** setting.
* Optimized **Share Parser File Perspective**, fixing issues such as abnormal Folders on top button state after returning.
* Fixed abnormal behavior of the switch that blocks official web pop-ups.
* Removed the old logic that forcibly hid the script interface in small windows, changing it to adaptive hiding of button text.

### V2.5.0

* Added **Share Parser mode**, supporting share link parsing, clipboard recognition, recursive perspective, file saving, media preview, and archive handling.
* Added **direct download acceleration domain setting**, supporting prefix mode and query-parameter mode, usable for browser downloads and Aria2 / Motrix push link rewriting.
* Added mouse-wheel volume adjustment in the player, with volume overlay prompts and mute icon status.
* Optimized the Web Fullscreen player, narrow-screen adaptation, search highlighting, archive preview, and settings-save prompts.
* Fixed issues with Aria2 / Motrix pushing 0KB files, abnormal row height, icon consistency, English column widths, 和 path drop-down fonts.

### V2.4.0

* Added version checking and update prompts.
* Added video playback settings, supporting playback progress reading and default quality selection.
* Added Web Fullscreen for video playback.
* Added Hide Button Text setting, allowing only icons and hover tips to remain.
* Optimized grid view, video playback experience, settings window, Password Vault dialog, Recent Added, and Watch History data retrieval.
* Cleaned up debug output, redundant configuration, and low-risk dead code to reduce script size.

### V2.3.0

* Added **PotPlayer protocol repair assistant**.

### V2.2.3

* Fixed upload failure.
* Improved UI stability.

### V2.2.2

* Fixed shortcut-key hierarchy conflicts.

### V2.2.1

* Fixed Aria2 / Motrix download issues.

### V2.2.0

* Added **clipboard magnet link monitoring** and **magnet preview** features.
* Enhanced UI stability.

### V2.1.1

* Fixed Aria2 / Motrix connection failures in reverse-proxy environments that only support ws:// / wss:// RPC or non-standard ports.

### V2.1.0

* Supported listening to mouse side buttons for directory-level navigation.
* Improved stability.

### V2.0.0

* Expanded supported languages to **简体中文 / 繁體中文 / English / 한국어 / 日本語 / Indonesia / Bahasa Melayu**.
* Upgraded the UI and architecture, moved the Image Search button outside, and added grid view.

### V1.3.2

* Hardened local upload logic and added direct connection for mainland China IPs.
* Adjusted the Duration Sim threshold in Deduplicate Files and improved detection accuracy.

### V1.3.1

* Further optimized login flicker issues.

### V1.3.0

* Added multi-account Data Migration.
* Added a permanent deletion mechanism that can skip the recycle bin to free space.

### V1.2.0

* Refactored the video duration sniffing engine.

### V1.1.0

* Aria2 supports preserving folder path structure, with added delivery packet-loss reminders and error list export.
* Cloud download supports batch submission and smart deduplication, with automatic polluted magnet cleaning and Base32 auto-decoding.
* The Bulk Rename preview screen added icons and cover display, and supports large image preview on folder hover.
* The import feature was upgraded to smart merge mode, so importing backups no longer overwrites existing local lists and records.

</details>

---

## 🤝 Acknowledgements

This project is deeply inspired by [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager) (by 브랜뉴) in its UI design language and parts of its web API calling logic. Respect and thanks.

---

## ⚖️ License Statement

This project follows the **CC-BY-NC-SA-4.0** license:

* 🚫 Prohibited for any commercial use
* 🧪 For personal learning, research, and technical exchange only
* 📢 Redistribution must retain attribution and use the same license
