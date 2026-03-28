<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/turbo/turbo_en.gif" alt="Cover">
</p>

# 📦 PikPak Master Enhancer

[![Version](https://img.shields.io/badge/Version-1.2.0-0067C0?style=flat-square)](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js) [![License](https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-red?style=flat-square)](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html) [![Platform](https://img.shields.io/badge/Platform-PikPak%20Web-orange?style=flat-square)](https://mypikpak.com/drive/all)

> A desktop-level file manager integrating Bulk Extract, Smart Deduplication, Multi-modal Bulk Rename, Send to Aria2, Junk File Cleanup, Export Directory, and Media Playback Engine enhancements.

---

## 🌍 Supported Languages

[English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(en).md) | [简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/README.md) | [繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(tc).md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ja).md)

---

## ✨ Features

### ✨ Experience & Navigation Engine

* **UI Refactoring**: Interface redesigned to resemble Windows File Explorer, comprehensively improving the operating experience.
* **Turbo Mode**: Auto-replaces native web logic, blocking native sync (**Recommended to enable in Settings**).
* **Advanced Path Bar**: Supports scroll wheel navigation, dropdown switching, path echoing, and source backtracking.
* **Background Auto Indexing**: A blinking blue dot on the home icon indicates directory tree syncing status.
* **Enhanced UX**: Supports dark theme, video duration display, one-click Blur Cover Images (Privacy Mode), Starred, and file type sorting.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/table/table_en.gif" width="1100" alt="Path">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/path/path_en.gif" width="1100" alt="Search">
</p>

---

### 📂 Batch & Space Management

* **Bulk Rename**: Supports Regex replace/delete, TV Show Mode (episode serialization), text formatting, FC2 Clean Naming, Ad-Cleaner, and MIME-based Extension Fixing.
  
<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/rename/rename_en.gif" width="550" alt="Bulk Rename">
</p>

* **Analysis Suite**: Includes File Analysis (type filtering and Exact/Duration/Name deduplication), Folder Analysis (size filtering and Name/Similarity/Containment deduplication), and Export Directory tree function.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/tree/tree_en.png" width="350" alt="Export Directory">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file/file_en.gif" width="300" alt="File Analysis">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder/folder_en.gif" width="350" alt="Folder Analysis">
</p>

* **Smart Organizing**: One-click Prune Empty Folders; supports Bulk Extract (remembers successful passwords, auto-fills passwords for encrypted archives from the Vault, and supports auto-skipping/deleting extracted items).

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/archive/archive_en.png" width="250" alt="Password Vault">
</p>

* **Resource Manager**: Can be customized in Settings as a File Blacklist (quickly clean junk files via Run Cleanup Now) or File Whitelist (protect recorded files during batch deletion).

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/manager/manager_en.gif" width="550" alt="Resource Manager">
</p>

---

### 🌐 Transfer & Sharing Hub

* **Share Management**: Supports setting Access Limits, automatically stops sharing once the limit is reached.
* **Offline Transfers**: Batch offline tasks + link export.
* **Ultra-fast Upload**: Supports drag-and-drop direct uploading for massive files, significantly reducing the interruption rate of small file transfers.
* **Cloud Download Enhancements**: **Auto-deduplicates** when adding batch links; built-in **magnet smart cleaning engine**, automatically extracts magnets from garbled or noisy text and supports Base32 decoding.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/torrent/torrent_en.png" width="380" alt="Magnet">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/share/share_en.gif" width="350" alt="Share">
</p>

> ⚠️ The Access Limit feature in sharing only works when the webpage is kept open and the device is awake.

---

### 🎬 Immersive Media Enhancements

* **Playback Engine**: Supports 0.5x–3.0x speed, Rotation/Mirror, forced Aspect Ratio, auto Skip Intro/Outro, Repeat/Loop modes, and progress bar thumbnail previews.
* **Subtitle System**: Supports cloud/local/online search, subtitle personalization, and drag-and-drop subtitle loading.
* **Visual Aids**: Supports Image Search (image/video frames) and Media Mode (series/manga folders auto-sorted A-Z).

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/video/video_en.gif" alt="Video">
</p>

---

### ⚡ Download & Distribution

* **Aria2 Directory Reconstruction**: When pushing batch folders to Aria2 or Motrix, it **auto-reconstructs the original cloud tree directory structure**, eliminating the need to reorganize files after downloading.
* **Persistent Connection Monitoring**: Auto-verifies RPC connectivity when configuring Aria2, and auto-exports a `.txt` error list (Aria2_Failed_List.txt) upon batch push failure for tracking.
* **Download Filter**: Folder Download Filter supports excluding matching files by extension or keyword during downloads/pushes.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/aria2/aria2_en.gif" width="400" alt="Aria2">
</p>

---

### ⚙️ Configuration & Data Management

* **Config Backup**: Supports JSON Export Backup and cross-device migration.
* **Clear Local Data**: Supports clearing Global Index, Preferences, Rules, Password Vault, Video Cache, and Cache.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/cache/cache_en.png" width="350" alt="Cache">
</p>

> 📌 The Global Index is temporary data, rebuilt upon each page refresh. The rest are persistent data and do not disappear when the page is refreshed.

---

## 💻 Compatibility

* **Recommended Browsers**: Chrome / Edge (Latest versions)
* **Recommended Script Managers**: Tampermonkey / Violentmonkey
* *Note: Deep testing has not yet been conducted on Safari / Firefox or other script managers. The above environments are recommended for the best experience.*

---

## 📥 Installation

> 1. **Preparation**: Install the browser extension [Tampermonkey](https://www.tampermonkey.net/)
> 2. **Install Script**: Click **[Install Now](https://github.com/digbug82/PikPak_Enhancement_Master/raw/main/PikPak_Enhancement_Master.user.js)**
> 3. **Open Website**: Go to the [PikPak official web portal](https://mypikpak.com/drive)
> 4. **Enable Script**: After logging in, click the floating blue **PikPak Logo Orb** on the sidebar to enter PikPak Master Enhancer. The script will not open if you are not logged in.

---

## ❓ FAQ

**Q: Why is the blue floating orb not showing up after installing the script?**  
**A:** Please make sure you are logged into the PikPak web portal. If you are logged in but it's still not visible, try refreshing the page (F5); or check if it's mistakenly blocked by ad blockers (like AdGuard / uBlock Origin), and try temporarily disabling them or whitelisting the site.

**Q: What is "Turbo Mode", and why is it recommended?**  
**A:** When enabled, the script fully covers the web UI and takes over all native web functions. It physically blocks the memory-intensive native sync logic to completely resolve lag and crashes with massive files. **Note:** Minimize and Close buttons are auto-hidden in Turbo Mode (uncheck it in Settings to return to the native UI). **Recommendation:** Highly recommended if you have many files for ultimate response speed and smoothness.

**Q: Why does the "My Pack" folder on Home show a "Default" tag and cannot be starred, copied, moved, renamed, or deleted?**  
**A:** This is an official security protection mechanism. The script merely lifts the sharing restriction on the default My Pack folder based on this.

**Q: What is the difference between File Deduplication (File Analysis) and Folder Deduplication (Folder Analysis)? How to choose?**  
**A:** **File Deduplication:** Targets the "single file" level. Uses Exact Match (Hash), Duration Sim, and Name Sim tri-modal algorithms. Good for cleaning scattered duplicate files (e.g., duplicate episodes, single images).<br>
**Folder Deduplication:** Targets the "overall folder structure" level. Uses Name Match, Similarity Match, and Containment Match algorithms. It sees through the "internal essence" of folders, perfect for cleaning duplicate "entire seasons", "complete image packs", or "multi-level materials". Even if two folders have completely different names, they can be accurately caught as long as internal files highly overlap or have a containment relationship.

> **Recommendation:** "Exact Match" in File Deduplication uses Hash, which is safe for one-click deletion. Duration/Name Sim in File Deduplication, and all three modes in Folder Deduplication are algorithmic similarity matches; please double-check manually before deleting to prevent accidental deletion.

**Q: Why are there more and more duplicate files found over time? Is the Global Index losing packets?**  
**A:** Rest assured, this is not packet loss or a data error; the "Exact Match" numbers are always stable. The increase is because "Duration Sim" matches become more comprehensive: Since PikPak's raw API doesn't always provide video durations directly, many duplicate videos are skipped initially due to missing data. The script has a built-in background asynchronous sniffing algorithm to extract exact durations and persistently store them in the browser's local cache. As you use it longer, the local duration database becomes more complete, allowing the engine to catch more hidden duplicates with different names but identical lengths. Thus, results become more abundant and accurate.

**Q: Why does "Image Search" sometimes prompt me to paste instead of uploading directly?**  
**A:** This is limited by browser security policies (CORS). When the script cannot directly push the cloud image to the search server, it automatically copies a screenshot of the current frame to your clipboard. Just press `[Ctrl+V]` in the opened search page to identify it.

**Q: Why is there only sound and no picture when playing videos using the script?**  
**A:** This is usually because the video is an m3u8 multi-track stream where the audio and video tracks separated after cloud transcoding, and the web player doesn't support online multi-track parsing for such streams yet. Click the "External Play" button to use local players like PotPlayer for streaming.

**Q: What is the difference between "Original (High Speed)" and standard "Original" in the Quality menu?**  
**A:** Their quality is almost identical; the main difference lies in the underlying decoding and transmission protocols. "Original (High Speed)" uses an official link optimized for streaming. Using the "High Speed" link with external players like PotPlayer usually yields the fastest loading and smoothest seeking experience. It is highly recommended for both web playback and external streaming.

**Q: Why aren't my recent actions (upload, delete, move) from the mobile App or official web instantly synced in the script's Analysis lists?**  
**A:** To ensure ultimate search and analysis speed, the script uses a memory snapshot mechanism and doesn't re-fetch tens of thousands of files every time. Solution: If you modified many files on other clients, refresh the page to rebuild the Global Index. Avoid modifying data from multiple clients simultaneously during script operations.

**Q: Can I set different passwords for multiple files at once during Bulk Extract?**  
**A:** Yes. Smart matching logic: As long as you pre-save known passwords in the "Password Vault", the script will auto-try all vaulted passwords for each archive during Bulk Extract. If a match is found, it extracts automatically without manual intervention.

**Q: Is it a script bug if Bulk Extract prompts "System busy, retrying"?**  
**A:** No. This usually means the PikPak cloud server hit a concurrency rate limit, indicating the official API is also currently busy. If a file fails after multiple retries, the resource might be corrupted or restricted in the cloud. Try again later, or try re-uploading/downloading it locally.

**Q: What information is in the Export Backup JSON?**  
**A:** The JSON file only contains local configuration data you set in Master Enhancer, like deduplication Preferences, Black/Whitelist Rules, Password Vault, etc. It **does NOT** contain your PikPak account passwords and is completely safe for cross-device migration.

**Q: Will importing a backup overwrite my existing configs or lists?**  
**A:** No. The script uses a "Smart Merge" logic. Upon import, it auto-merges and deduplicates list items (Resource Manager, History) with your local data. Only basic settings (Search Engine, Aria2 RPC URL, etc.) will be overwritten by the imported file, ensuring your accumulated local data is not lost.

**Q: Why do some files prompt "protected" or cannot be deleted during batch deletion?**  
**A:** Check if these files are recorded in the Resource Manager. If "Skip resources recorded in manager on delete" is enabled in Settings, the script protects matching items to prevent accidental deletion.<br>
Solutions: 
1. Uncheck this rule in Settings before deleting; 
2. Or open the "Resource Manager" from the toolbar/sidebar and click "Run Cleanup Now" to force physical deletion of these recorded items.

**Q: Why don't files show up in the list after I "Paste" them?**  
**A:** Check if your drive has enough storage space to accommodate them. PikPak officially uses a **silent interception** strategy for "Quota Exceeded"; it aborts the operation in the background without explicit error popups. If pasted files don't appear, you likely hit the capacity limit. Free up space and try again.

**Q: What is the "Auto-fix masked magnets" feature in Cloud Download, and when should I use it?**  
**A:** This function automatically removes text noise like Chinese characters, emojis, and symbols mixed in the link, intelligently extracts the hash, and restores it to the standard format.<br>
**Recommendation:** Keep it checked by default. It auto-handles polluted magnets with irrelevant text or missing prefixes acquired from social platforms. **Standard magnets** already starting with `magnet:?` will skip fixing and download normally.

**Q: Will the folder hierarchy be preserved when downloading with Aria2/Motrix or Browser?**  
**A:** **Aria2/Motrix preserves hierarchy**. The script uses directory cloning technology. After downloading, your local disk will perfectly mirror the cloud tree structure. It also auto-cleans Windows-unsupported characters (like `:` `*` `?`) from folder names and shortens redundant paths to ensure error-free downloads.  
**Browser downloads do not preserve hierarchy**. Bound by native browser download protocols, all files in the folder will be "flattened" into a single directory. **Recommendation:** To preserve complex structures, always prioritize "Send to Aria2".

---

## 🛡️ Privacy & Security

* **Data Localization**: All core script functions (Bulk Rename, File Analysis, Extraction, etc.) interact directly with PikPak's official API via your browser. Your Account Token, Password Vault, and file data are **stored exclusively in your local browser**.
* **Zero Collection**: The script **does not** collect any user privacy data and will **never** upload your file info or account credentials to any third-party servers.
* **Third-party APIs**: Only when using extended features like "Search Online" (Subtitles) or "Image Search", the script sends necessary search keywords or image parameters to relevant public service APIs. This does not involve any personal identity information.

---

## 🤝 Acknowledgements

This project was deeply inspired by [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager) (by 브랜뉴) in terms of UI design language and some web API call logic. Special thanks to them.

---

## ⚖️ License

This project strictly adheres to the **CC-BY-NC-SA-4.0 License**
* 🚫 Strictly prohibited for any commercial use.
* 📢 Secondary distribution must be attributed and maintain the same license.

---

## 🚀 Changelog

### V1.2.0
* **Video Duration Sniffing Engine Refactored**: Deeply fortified the video duration sniffing logic.
* **UI/UX Optimization**: Refined the visual performance of some UI components under different zoom scales.
* **Core Bug Fixes**: Fixed highlight failure during path search; fixed a bug where saving "Turbo Mode" changes in Settings would block other setting items from applying.

### V1.1.0
* **Aria2 Enhancements**: Supports **preserving folder path structures**, added delivery failure alerts, and one-click export of error lists.
* **Cloud Download Evolution**: Supports batch submission and smart deduplication, **auto-fixes masked/polluted magnets** (supports Base32 auto-decoding).
* **Rename Optimizations**: Preview interface now includes **icon and cover displays**, supporting hover-to-enlarge folder previews.
* **Config Management**: Import function upgraded to **"Smart Merge"** mode, no longer overwriting existing local lists and records when importing backups.
* **Experience Improvements**: Drastically optimized Turbo Mode loading speed, fixed UI residue bugs during account switching, and improved image search success rates.
