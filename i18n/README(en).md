<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/turbo/turbo_en.gif" alt="Cover">
</p>

# 📦 PikPak Enhancement Master

[![Install / Update Latest](https://img.shields.io/badge/Install%20/%20Update%20Latest-GitHub%20Latest-2EA44F?style=for-the-badge&logo=github&logoColor=white)](https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/PikPak_Enhancement_Master.user.js)

[![Version](https://img.shields.io/badge/Version-2.5.0-0067C0?style=flat-square)](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js)
[![License](https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-red?style=flat-square)](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html)
[![Platform](https://img.shields.io/badge/Platform-PikPak%20Web-orange?style=flat-square)](https://mypikpak.com/drive/all)
[![GitHub Stars](https://img.shields.io/github/stars/digbug82/PikPak_Enhancement_Master?style=flat-square&logo=github&label=Star)](https://github.com/digbug82/PikPak_Enhancement_Master/stargazers)

⭐ If this script helps you, feel free to give the project a Star.

> A desktop-grade enhancement suite for PikPak Web.  
> From browsing, searching, analyzing, and organizing to playback, downloading, and migration, it brings cloud file management much closer to the efficiency and smoothness of a local file manager.

---

## 🌍 Languages

[English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(en).md) | [简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/README.md) | [繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(tc).md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ja).md) | [Indonesia](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(id).md) | [Bahasa Melayu](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ms).md)

---

## ✨ Features

### ✨ Experience & Navigation Engine

* **UI Refactoring**: Built on top of the official features, the overall interface is redesigned with the usage habits of **Windows File Explorer** in mind, making navigation paths more intuitive.
* **Turbo Mode**: Deeply takes over native web logic after being enabled, significantly reducing lag, crashes, and memory pressure in massive-file scenarios.
* **Side Button Navigation**: Supports mouse side-button forward / back actions, allowing fast directory-level switching across different views.
* **Advanced Path Bar**: Supports mouse-wheel scrolling, same-level directory switching via dropdown, path echoing, and breadcrumb backtracking. Both Global Search and analysis tools share the same path system.
* **Enhanced Experience**: Supports multi-dimensional sorting such as Favorites and Type, dark theme, one-click **Blur Cover Images**, and uses an **SWR strategy** for silent view updates.
* **Background Indexing & Protection**: A blinking blue dot on the Home icon indicates directory tree syncing in the background. A built-in concurrency protection mechanism helps reduce dirty data and conflicting operations.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/table/table_en.gif" width="1100" alt="Path">
</p>

> 📌 The default folder **My Pack** is officially protected. The script will not perform high-risk operations on it that could cause accidental deletion.

---

### 📂 Batch & Space Management

* **Bulk Rename**: Supports **Regex replace/delete**, **TV Show Mode**, text **Formatting**, **FC2 standardized naming**, **Ad-prefix cleanup**, and MIME-based **smart extension repair**.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/rename/rename_en.gif" width="550" alt="Bulk Rename">
</p>

* **File Analysis**: Integrates file filtering and deduplication. Deduplication supports **Hash / Duration / Name** tri-modal analysis.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_scan/file_scan_en.gif" alt="File Perspective">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_dup/file_dup_en.gif" alt="Deduplicate Files">
</p>

* **Folder Analysis**: Integrates folder filtering and deduplication. Deduplication supports **Name / Similarity / Containment** tri-modal analysis.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_scan/folder_scan_en.gif" alt="Folder Perspective">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_dup/folder_dup_en.gif" alt="Folder Deduplication">
</p>

* **Export Directory**: Supports exporting the **directory tree** of the current path.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/tree/tree_en.png" width="350" alt="Export Directory">
</p>

* **Smart Organizing**: Supports **Delete Permanently** by skipping Trash, one-click empty folder cleanup, Bulk Extract, and built-in **automatic password memory** with **smart autofill** logic.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/archive/archive_en.png" width="250" alt="Password Vault">
</p>

* **Resource Manager**: Supports a custom **file blacklist** for one-click junk cleanup. It can also work as a **file whitelist** to automatically protect matched items during batch deletion.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/manager/manager_en.gif" width="550" alt="Resource Manager">
</p>

> ⚠️ To avoid sync conflicts, it is not recommended to modify the same batch of files from other clients while running heavy operations such as analysis, organizing, or batch deletion.

---

### 🌐 Transfer & Sharing Hub

* **Share Management**: Supports setting extraction limits. Shares are automatically canceled once the limit is reached.
* **Turbo Upload**: Supports dragging local files / folders directly into the page for upload, improving interruption resistance and the overall transfer experience for small-file-heavy tasks.
* **Cloud Download Enhancements**: Supports **auto-deduplication** for batch offline links. Includes a built-in **magnet smart cleaning engine** that extracts Base32 / Hex hashes and removes noisy text.
* **Torrent & Fallback**: Supports parsing **.torrent** files, and provides **web snapshot saving** as a fallback for some restricted links.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/torrent/torrent_en.png" height="320" alt="Magnet">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/share/share_en.gif" height="320" alt="Share">
</p>

> ⚠️ Automatic interception based on extraction limits only works while the webpage remains open and the device is not sleeping.

---

### 🎬 Immersive Media Enhancement

* **Playback Engine**: Supports **0.5x - 3.0x speed**, rotation, flipping, forced aspect ratio, automatic intro/outro skipping, **playlist / loop** modes, and **thumbnail preview** on the progress bar.
* **Compatibility Fallback**: Built-in watchdog and compatibility logic can automatically fall back to a playable quality when black screens, unavailable resolutions, or codec compatibility issues occur.
* **Subtitle System**: Supports **cloud same-name subtitle loading**, **local subtitle file import**, and **online subtitle search**. It also supports millisecond subtitle offset adjustment, position switching, size adjustment, and local text drag-and-drop loading.
* **Visual Assistance**: Supports **Image Search** for images or the current video frame, making it easy to trace covers, actors, anime, or source materials.
* **Media Mode**: Can be enabled in Settings so that series / comic-style folders are sorted by **A-Z** by default for better browsing continuity.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/video/video_en.gif" alt="Video">
</p>

---

### ⚡ Download & Distribution

* **External Direct Link**: Supports one-click export of direct video stream links, or launching **PotPlayer** for external playback.
* **RPC Distribution**: Supports pushing files to download tools such as **Aria2 / Motrix** with one click through the RPC protocol.
* **Directory Structure Restoration**: When pushing an entire folder, the script can automatically restore the cloud drive’s **tree-style directory structure**, preventing the downloaded folder hierarchy from being flattened.
* **Enhanced Distribution**: Supports persistent connection monitoring, automatic export of detailed error lists after failures, and **Folder Download Filter** support.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/filter/filter_en.png" height="290" alt="Folder Download Filter">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/aria2/aria2_en.gif" height="290" alt="Aria2">
</p>

---

### ⚙️ Configuration & Data Management

* **Export Backup**: Supports exporting preferences, management rules, Password Vault data, and more into JSON backup files with digital fingerprints.
* **Import Backup**: Supports **smart merge deduplication** on import, avoiding simple overwrites that would erase existing rules or records.
* **Clear Local Data**: Supports clearing **full-disk index**, **preferences**, **management rules**, **password vault**, and **cache** on demand to free local space and improve privacy protection.
* **Password Vault**: Built-in centralized management for common extraction passwords, allowing automatic use and quick autofill during Bulk Extract.
* **Data Migration**: Supports encrypted packaging of selected items and automatic takeover after logging into another account, enabling **seamless cross-account transfer**.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/cache/cache_en.png" width="350" alt="Cache">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/migrate/migrate_en.gif" alt="Data Migration">
</p>

> 📌 The full-disk index is cleared when the webpage is closed, while preferences, management rules, Password Vault data, and similar data remain persistent in the local script environment.

---

## 💻 Compatibility

* **Recommended Browsers**: Chrome / Edge (latest versions)
* **Preferred Script Manager**: Violentmonkey (tested to be smoother in scrolling, uploading, and large-list scenarios)
* **Compatible Script Manager**: Tampermonkey
* **Supported Platform**: PikPak Web
* *Note: Safari / Firefox and other script managers have not yet been fully tested in depth. The recommended environment above is suggested for the best experience.*

---

## 📥 Installation

1. **Install a script manager**: [Violentmonkey](https://violentmonkey.github.io/get-it/) is recommended first. [Tampermonkey](https://www.tampermonkey.net/) is also supported.
2. **Install the script**: Click **[Install Now](https://github.com/digbug82/PikPak_Enhancement_Master/raw/main/PikPak_Enhancement_Master.user.js)**.
3. **Open PikPak Web**: Visit [PikPak](https://mypikpak.com/drive) and log in to your account.
4. **Launch PikPak Enhancement Master**:
   * In normal mode: after login, click the floating blue **PikPak Logo ball** in the sidebar.
   * In Turbo Mode: after login, the script can open automatically and take over the native web interface.

---

## ❓ FAQ

**Q: Why doesn’t the blue floating ball appear after installing the script?**  
**A: Please check the following in order:**

1. Make sure **PikPak Enhancement Master** is enabled in your script manager.
2. Make sure you have logged in to PikPak Web.
3. If you are using **Tampermonkey**, make sure **“Allow user scripts”** is enabled on the browser extension details page.
4. Chrome / Edge latest versions are recommended.
5. If the floating ball still does not appear after the steps above, temporarily disable all other browser extensions and refresh the page (F5).

**Q: What is Turbo Mode, and why is it recommended?**  
**A:** Once enabled, the script deeply takes over the native web logic and covers the main interface in full screen. It actively blocks the original page’s high-memory sync workflow, which significantly reduces lag, crashes, and loading delays in large-file environments.  
**Note:** After enabling Turbo Mode, the minimize and close buttons are hidden automatically. To return to the original web page, disable it in Settings.  
**Recommendation:** If your cloud drive contains many files, Turbo Mode is strongly recommended for a smoother and more stable experience.

**Q: Why does My Pack show the “Default” tag, and why can’t it be starred, copied, moved, renamed, or deleted?**  
**A:** This is PikPak’s official protection mechanism for the default directory. The script keeps this protection logic, but it removes the sharing restriction on the default folder **My Pack**.

**Q: What is the difference between Deduplicate Files and Folder Deduplication? How should I choose between them?**  
**A:**  
**Deduplicate Files:** Designed for single-file-level comparison. It uses **Hash Exact Match, Video Duration Similarity, and Name Similarity**, making it suitable for cleaning scattered duplicate files such as repeated single-episode videos, single images, or standalone archives.  

**Folder Deduplication:** Designed for whole-folder-level comparison. It uses **Name Matching, internal file overlap matching, and containment matching**, making it more suitable for cleaning duplicated full series folders, image packs, or multi-level resource folders. Even if two folders have different names, they can still be detected if their internal files are highly similar or if one folder is largely contained within another.

> **Recommendation:**  
> In file deduplication, **Exact Match** is hash-based and the most reliable, so it is usually safe to batch-select for deletion.  
> **Duration Match**, **Name Match**, and the three folder deduplication modes are all similarity-based matching methods, so manual review is recommended before batch deletion.

**Q: Why do more and more duplicates appear over time? Did the full-disk index miss some files?**  
**A:** No. This is not caused by missing index data or data corruption. The number of results in **Exact Match** is usually stable. The reason more duplicates appear later is that similarity matching based on **video duration** becomes more complete over time.  

Some PikPak APIs do not directly provide video duration, so many duplicate videos are skipped in early analysis because duration data is missing. To solve this, the script includes a background metadata sniffing mechanism that reads video metadata, fills in precise durations, and stores them persistently in the browser. As your local duration database becomes more complete, the deduplication engine can detect more hidden duplicates with different names but the same actual duration.

**Q: Why does Image Search sometimes ask me to paste instead of uploading the image directly?**  
**A:** This is caused by browser security restrictions, mainly **CORS** limitations. When the script cannot directly send the image from your cloud drive to the target search service, it automatically copies the current frame or image to your clipboard. You can then press `Ctrl + V` in the opened search page to submit it.

**Q: Why do I get audio but no video when playing certain files?**  
**A:** This usually happens when the video is an **m3u8 multi-audio-track / multi-track stream**. After cloud transcoding, the audio and video tracks may be separated, and the browser player may not support full online parsing of this type of stream.  
In this case, click **External Play** and use a professional local player such as PotPlayer.

**Q: What is the difference between “Original (Fast)” and regular “Original”?**  
**A:** In most cases, the picture quality is nearly identical. The main difference is the underlying transmission and decoding route.  
**Original (Fast)** uses an official streaming-optimized path, which usually provides faster loading, smoother seeking, and more stable playback in external players such as PotPlayer.  
**Recommendation:** Whether playing in the browser or externally, **Original (Fast)** is usually the better first choice.

**Q: Why don’t changes I made in the mobile app or official web client appear immediately in File Analysis or deduplication lists?**  
**A:** To keep searching, filtering, and analysis fast, the script relies heavily on local memory snapshots and cached indexes instead of refetching tens of thousands of files every time.  
If you have just made many changes in the mobile app or official web client, refresh the page to rebuild the latest full-disk index.  
**Recommendation:** Avoid modifying the same batch of files from multiple clients while running analysis, deduplication, or organizing tasks.

**Q: Can I assign different passwords for multiple archives during Bulk Extract?**  
**A:** Yes. **Bulk Extract** uses the **Password Vault** for smart matching. As long as you save known passwords in the vault in advance, the script will automatically try all stored passwords on each archive. Once a match is found, extraction starts automatically with no need for manual input one by one.

**Q: When Bulk Extract says “System busy / Waiting to retry,” is the script broken?**  
**A:** No. This usually means PikPak’s cloud service has triggered concurrency or rate limits. It is an official-side busy-state issue, not a script malfunction.  
If a file still fails after several retries, it may be damaged, restricted, or affected by temporary cloud-side instability. Try again later or download it locally and process it there.

**Q: What is included in the exported JSON backup?**  
**A:** The exported JSON contains only local configuration data from PikPak Enhancement Master, such as deduplication preferences, blacklist / whitelist rules, Password Vault data, some history records, and feature settings.  
It **does not include** your PikPak account password, so it is safe to use for backup and migration across devices.

**Q: Will Import Backup overwrite my current settings or lists?**  
**A:** Usually not. The script uses a **smart merge** strategy on import. List-type data such as Resource Manager records and history entries are deduplicated and merged instead of simply overwritten.  
Only a small number of basic settings, such as the image search engine or Aria2 RPC URL, may use the values from the imported file, so your long-term local lists and records are usually preserved.

**Q: Why are some files protected or not deleted during batch deletion?**  
**A:** Check whether those files have already been recorded in **Resource Manager**. If you have enabled “skip resources recorded in Resource Manager when deleting” in Settings, matched files will be treated as protected items to prevent accidental deletion.  
**Solutions:**  
1. Disable the protection rule in Settings and try deleting again.  
2. Or open **Resource Manager** from the toolbar / sidebar and choose **Run Cleanup Now** to physically clean those recorded items.

**Q: Why doesn’t anything appear after I use Paste?**  
**A:** First check whether your cloud storage still has enough free space. PikPak often handles **storage quota exceeded** situations through a silent block, meaning the action may simply stop in the background without a clear popup warning.  
If nothing appears after Paste, the most common cause is insufficient remaining storage. Clean up some space first, then try again.

**Q: What is “Auto repair anti-block magnet links,” and when should I enable it?**  
**A:** This feature automatically removes unrelated Chinese text, emojis, symbols, and other noise inserted into magnet links, then extracts the useful hash and reconstructs a standard magnet format.  
**Recommendation:** Keep it enabled by default. It is especially useful for links copied from social platforms, forums, or chat apps where the magnet string may be polluted, partially removed, or intentionally obfuscated.  
For already standard links beginning with `magnet:?`, the script will skip repair automatically and download normally.

**Q: What is Folder Download Filter, and which download methods does it affect?**  
**A:** **Folder Download Filter** automatically excludes matched files by extension or naming rules when downloading an entire folder. For example, you can exclude `.txt`, `.jpg`, or files whose names contain certain keywords. It affects both normal folder downloads and **Aria2 / Motrix** folder-push scenarios.

**Q: Is folder structure preserved when downloading via Aria2 / Motrix or the browser?**  
**A:**  
**Aria2 / Motrix: Yes, structure is preserved.**  
The script automatically clones and restores the cloud directory tree when pushing tasks. After download, the local folder hierarchy will match the cloud structure as closely as possible. It also sanitizes Windows-unsupported characters such as `:` `*` `?` and shortens overly long paths to reduce download failures.  

**Browser native download: No, structure is not preserved.**  
Due to browser download limitations, files inside folders are usually flattened into a single local directory.  

**Recommendation:** If you need the original folder hierarchy, use **Aria2 / Motrix** whenever possible.

**Q: What is Data Migration, and how does it work?**  
**A:** **Data Migration** lets you quickly and seamlessly transfer files or folders from the current account to another PikPak account.  
**Steps:**  
1. Select the files or folders you want to migrate in the current account.  
2. Click the **Data Migration** button.  
3. The script encrypts and packages the data automatically, then logs out of the current account.  
4. Log in to the target account.  
5. After login, the script detects the local migration package automatically and prompts you to receive it in one click.

---

## 🛡️ Privacy & Security

* **Local-first**: All core capabilities interact directly with official PikPak APIs through your browser. Your account token, Password Vault data, and most local configuration data remain in the local browser environment by default.
* **No active collection**: The script **does not actively collect** user privacy data, and **will never** upload your file information or account credentials to any third-party server.
* **Third-party services**: Only when using extended features such as **Search Online** subtitles or **Image Search** will the script send the necessary search keywords or image features to related public services. No personal identity information is involved.

---

## 🚀 Changelog

### V2.5.0
* Added **Share Parsing Mode**, supporting share link parsing, clipboard detection, recursive insight scanning, file saving, media preview, and archive preview/extraction.
* Added **direct download acceleration domain settings**, supporting prefix mode and query parameter mode for rewriting browser download and Aria2 / Motrix push links.
* Added **mouse wheel volume control in the player**, with volume overlay feedback and muted icon state.
* Optimized the **web fullscreen player**, fixing unsynchronized upward movement and jitter in the playlist, control bar, progress bar, and side buttons.
* Optimized **narrow-screen and window scaling adaptation**, replacing the old scaling logic with adaptive button text hiding to keep text clear on small screens.
* Optimized **play history grid sorting**, fixing the issue where the sort button icon and text did not update immediately after selecting from the dropdown.
* Optimized **search keyword highlighting**, so long file names prioritize showing content around matched keywords.
* Optimized **archive preview**, adding a sort menu and path dropdown, with support for extracting selected files only.
* Optimized **settings save prompts**, so no prompt is shown when nothing changes, and normal settings no longer incorrectly prompt for a page refresh.
* Fixed **Aria2 / Motrix pushing 0KB files**, automatically skipping invalid empty files.
* Fixed several UI details, including abnormal line height, unified icons, English column width, and maximized path dropdown font size.

### V2.4.0
* Added **version checking and update notifications**.
* Added **video playback settings**, including reading playback progress when opening videos and choosing the default quality.
* Added **web fullscreen** support for video playback.
* Added a **hide button labels** setting, allowing only icons and hover tooltips to remain.
* Improved Grid View and video playback experience.
* Improved the width of the Settings window and Password Vault dialog.
* Optimized data fetching for Recently Added and Playback History modes.
* Improved part of the interaction logic.
* Cleaned up debug output, redundant configuration, and low-risk dead code to reduce script size.

### V2.3.0 
* Added **PotPlayer Protocol Repair Assistant**.

### V2.2.3
* Fixed upload failures.
* Improved UI stability.

### V2.2.2
* Fixed shortcut key hierarchy conflicts.

### V2.2.1
* Fixed Aria2 / Motrix download issues.

### V2.2.0
* Added **clipboard magnet link monitoring** and **magnet link preview**.
* Improved UI stability.

### V2.1.1
* Fixed Aria2 / Motrix connection failures in reverse proxy environments that only support `ws://` / `wss://` RPC or use non-standard ports.

### V2.1.0
* Support **mouse side button listening** for directory-level navigation.
* Stability improvements.

### V2.0.0
* Added support for **简体中文 / 繁體中文 / English / 한국어 / 日本語 / Indonesia / Bahasa Melayu**.
* UI and architecture upgraded, **Image Search** button moved outside, and **Grid View** added.

### V1.3.2
* Strengthened **Local Upload** logic and added direct connection support for mainland China IP ranges.
* Adjusted the duration similarity threshold for file deduplication to improve detection accuracy.

### V1.3.1
* Further optimized login flicker issues.

### V1.3.0
* Added **Data Migration**, allowing massive files to be encrypted, packaged, and transferred seamlessly to another account.
* Added **Delete Permanently** support to skip Trash and free cloud space instantly.

### V1.2.0
* Rebuilt the video duration sniffing engine.

### V1.1.0
* Added Aria2 support for **preserving folder path structure**, plus packet-loss reminders and one-click export of failure lists.
* Added batch cloud download submission and smart deduplication, including **automatic cleaning of polluted magnet links** with Base32 auto-decoding.
* Added **icon and cover preview** to the Bulk Rename preview interface, including large-hover previews for folders.
* Upgraded import behavior to **smart merge**, so imported backups no longer overwrite existing local lists and records.

---

## 🤝 Acknowledgements

This project is deeply inspired by [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager) (by 브랜뉴) in both UI design language and parts of its web API interaction logic.

---

## ⚖️ License

This project follows the **CC-BY-NC-SA-4.0** license:

* 🚫 No commercial use allowed
* 🧪 For personal learning, research, and technical exchange only
* 📢 Redistributions must keep attribution and use the same license
