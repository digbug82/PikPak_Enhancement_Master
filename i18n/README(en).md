<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/turbo/turbo_en.gif" alt="Cover">
</p>

# 📦 PikPak Enhancement Master

[![Version](https://img.shields.io/badge/Version-1.3.2-0067C0?style=flat-square)](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js) [![License](https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-red?style=flat-square)](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html) [![Platform](https://img.shields.io/badge/Platform-PikPak%20Web-orange?style=flat-square)](https://mypikpak.com/drive/all)

> Designed to solve the core pain points of the PikPak cloud drive, it deeply takes over and replaces the native web client, completely reshaping your interactive experience. With the standard of a desktop-level file manager, it fully integrates smart deduplication, batch extraction, multi-modal renaming, seamless multi-account migration, Aria2 structured push, and an immersive media playback engine, making cloud data management unprecedentedly efficient and smooth.

---

## 🌍 Supported Languages

[English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(en).md) | [简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/README.md) | [繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(tc).md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ja).md)

---

## ✨ Core Features

### ✨ Experience & Navigation Engine

* **Interactive Reconstruction**: Based on official features, the interface is reconstructed to resemble **Windows File Explorer**.
* **Turbo Mode**: Once enabled, it takes over the native logic, completely solving lag and crash issues when handling massive amounts of files.
* **Advanced Path Bar**: Supports scroll wheel sliding and drop-down menus for same-level switching and positioning. Global search and analysis suites are integrated into the path bar, supporting path echoing and source tracking jumps.
* **Experience Enhancement**: Supports multi-dimensional sorting such as starring, as well as one-click **blurred covers** and dark theme switching. The background uses the **SWR strategy** to silently and seamlessly refresh views.
* **Background Indexing & Protection**: A blinking blue dot on the homepage indicates syncing the directory tree. The system comes with a concurrent operation physical lock to intercept conflicting operations and strictly prevent dirty data generation. (Note: The default folder My Pack is protected by officials, strictly preventing accidental deletion and other operations).

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/table/table_en.gif" width="1100" alt="Path">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/path/path_en.gif" width="1100" alt="Search">
</p>

---

### 📂 Batch & Space Management

* **Batch Renaming**: Supports **Regex replace/delete**, **Episode serial numbers**, text **formatting**, **FC2 standard naming**, **prefix ad removal**, and MIME-based **intelligent extension repair**.
  
<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/rename/rename_en.gif" width="550" alt="Batch Rename">
</p>

* **Analysis Suite**: **File Analysis** integrates filtering and deduplication (Hash/Duration/Name modalities); **Folder Analysis** integrates filtering and deduplication (Name/Similarity/Inclusion rate modalities); and supports exporting the current **directory tree** list.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/tree/tree_en.png" width="350" alt="Export Directory">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file/file_en.gif" width="300" alt="File Analysis">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder/folder_en.gif" width="350" alt="Folder Analysis">
</p>

* **Smart Organize**: Supports **Permanent Deletion** (skipping recycle bin); one-click cleanup of empty folders; **Batch Extraction** integrates password auto-memory and smart filling, supporting skipping and deleting extracted items.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/archive/archive_en.png" width="250" alt="Password Vault">
</p>

* **Resource Manager**: Customize **File Blacklist** to clean up junk resources with one click; or act as a **File Whitelist** to automatically protect files during batch deletion.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/manager/manager_en.gif" width="550" alt="Resource Manager">
</p>

---

### 🌐 Transfer & Sharing Center

* **Share Management**: Supports setting a maximum limit for extraction times. After the target is reached, the link automatically becomes invalid and sharing is canceled.
* **Speed Upload**: Supports dragging local files/folders to the webpage for direct upload, breaking through official large file limits and **significantly reducing the interruption rate of small file transfers**.
* **Cloud Download Enhancement**: Batch offline links **automatically deduplicate**. Built-in **magnet link intelligent cleaning engine** (automatically extracts Base32/Hex hashes to remove interference); supports parsing **.torrent** seed files; provides a **save webpage snapshot** fallback plan for restricted links.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/torrent/torrent_en.png" width="380" alt="Magnet Links">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/share/share_en.gif" width="350" alt="Share">
</p>

> ⚠️ The feature to set a maximum limit for extraction times during sharing only takes effect when the webpage remains open and the device is not sleeping.

---

### 🎬 Immersive Media Enhancement

* **Playback Engine**: Supports 0.5x-3.0x speed, rotation/flip, forced aspect ratio, automatic skipping of intro/outro, and **continuous/loop** modes. The progress bar supports thumbnail previews. Built-in **watchdog** automatically falls back to compatible picture quality when encountering black screens or unsupported encodings.
* **Subtitle System**: Supports loading cloud subtitles with the same name, local files, and cross-site online search. Supports millisecond-level offset fine-tuning for subtitle sync, and direct **drag-and-drop parsing** of local text mounting.
* **Visual Assist**: Built-in multi-engine supports **Reverse Image Search** for the current frame of an image or video; "Media Mode" can be activated in settings to automatically arrange series/comic folders in A-Z order by name.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/video/video_en.gif" alt="Video">
</p>

---

### ⚡ Download & Distribution

* **External Direct Connection**: Supports getting a direct link for the video stream with one click, or waking up PotPlayer for playback. Supports pushing files to **Aria2/Motrix** nodes via RPC protocol with one click.
* **Distribution Enhancement**: **Automatically restores the cloud drive directory tree structure** when pushing folders to Aria2/Motrix. Supports long connection monitoring, automatically exporting an error list upon encountering errors. Supports setting **folder download filtering**.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/aria2/aria2_en.gif" width="400" alt="Aria2">
</p>

---

### ⚙️ Configuration & Data Management

* **Config Backup**: Supports exporting preferences, management rules, password vaults, etc., as JSON backup files with digital fingerprints. Supports **intelligent merge deduplication** upon import.
* **Data Cleanup**: Supports clearing the global index, preferences, management rules, password vaults, and cache on demand, freeing up local space and ensuring privacy.
* **Data Migration**: Supports encrypting and packaging selected items, achieving seamless transfer across accounts via an automatic takeover mechanism.

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/cache/cache_en.png" width="350" alt="Cache">
</p>

> 📌 The global index is cleared after closing the webpage, while preferences, password vaults, etc., are persistently saved.

---

## 💻 Compatibility

* **Recommended Browser**: Chrome / Edge (Latest versions)
* **Recommended Script Manager**: Tampermonkey / Violentmonkey
* *Note: Deep testing has not yet been conducted on Safari / Firefox or other script managers. It is recommended to use the recommended environments above for the best experience.*

---

## 📥 Installation Guide

> 1. **Environment Prep**: Install the browser extension [Tampermonkey](https://www.tampermonkey.net/)
> 2. **Script Install**: Click **[Install Now](https://github.com/digbug82/PikPak_Enhancement_Master/raw/main/PikPak_Enhancement_Master.user.js)**
> 3. **Enter Interface**: Open the [PikPak official web drive](https://mypikpak.com/drive)
> 4. **Enable Script**: After logging in, click the floating blue **PikPak Logo ball** appearing on the sidebar to enter PikPak Enhancement Master. The script cannot be opened without logging in.

---

## ❓ FAQ

**Q: Why is the blue floating ball not showing up after installing the script?**  
**A:** Please ensure you have logged into the PikPak web client. If you are logged in and it still doesn't show, try refreshing the webpage (F5); or check if it's being blocked by ad-blocker extensions (like AdGuard / uBlock Origin). Try temporarily disabling the blocker or whitelisting this site.

**Q: What is "Turbo Mode" and why is it recommended to be enabled?**  
**A:** Once enabled, the script will fully cover the webpage and take over all native web functions. By physically shielding the memory-consuming synchronization logic of the original webpage, this mode completely solves lag and crashes under massive files. **Note:** Minimize and close buttons will be auto-hidden in Turbo Mode (you must uncheck it in settings to return to the original web). **Suggestion:** If you have many files, it's highly recommended to enable this for extreme response speed and a smooth experience.

**Q: Why does the My Pack folder on the homepage show a "Default" tag and cannot be starred, copied, moved, renamed, or deleted?**  
**A:** This is an official security protection mechanism. The script merely lifts the sharing restrictions for the default My Pack folder based on this.

**Q: What is the core difference between "File Deduplication" and "Folder Deduplication"? How to choose in actual use?**  
**A:** **File Deduplication:** Targets the "single file" level. Uses Hash precise matching, video duration similarity, and name similarity. Ideal for cleaning scattered duplicate files (e.g., re-saved single episodes, single images).<br>
**Folder Deduplication:** Targets the "overall folder structure" level. Uses name matching, internal file overlap (similarity), and subset redundancy (inclusion rate). It sees through the "internal nature" of folders, making it perfect for cleaning duplicate "entire series," "complete image packs," or "multi-level data." Even if two folders have completely different names, if their internal files highly match or contain one another, they will be accurately caught.

> **Suggestion:** Hash matching in File Deduplication is precise and safe to batch delete. Duration/name matching in File Deduplication, as well as all modalities in Folder Deduplication, are similarity-based. Please double-check before batch deleting to prevent accidental loss.

**Q: Why are there more and more duplicate files found over time? Is the global index dropping packets?**  
**A:** Rest assured, this is not an index packet loss or data error. The number of "Precise Matches" remains perfectly stable. The increase in results is because "Similarity Matching" based on video duration is becoming more comprehensive: PikPak's original API doesn't directly provide video durations, causing many duplicate videos to be skipped initially. Therefore, the script has a built-in async sniffing algorithm that simulates reading video metadata to extract precise durations and caches them locally. As you use it longer, the local duration database becomes complete, allowing the engine to catch more hidden duplicates with different names but identical lengths. Thus, results appear to grow and become more accurate.

**Q: Why does "Reverse Image Search" sometimes prompt me to paste instead of directly uploading the image?**  
**A:** This is due to browser security policies (CORS cross-domain restrictions). When the script cannot directly push the cloud image to the search server, it automatically copies the current frame to your clipboard. You just need to press `[Ctrl+V]` in the pop-up search page to complete the recognition.

**Q: Why is there only sound but no picture when playing videos using the script?**  
**A:** This is usually because the video is an m3u8 multi-audio/multi-track stream. After cloud transcoding, the audio and video tracks separated, and the web player currently does not support online multi-track parsing for such streams. It's recommended to click the "External Playback" button in the bottom right corner to invoke local professional players like PotPlayer for streaming.

**Q: What is the difference between "Original (High Speed)" and standard "Original" in the resolution menu?**  
**A:** The clarity is almost identical. The main difference lies in the underlying decoding and transport protocols. "Original (High Speed)" uses an official link optimized specifically for streaming. When invoking external players like PotPlayer, using the link with "High Speed" provides the fastest loading response and smoothest dragging experience. It is highly recommended to prioritize this option for both web playback and external streaming.

**Q: Why aren't operations I just did on the mobile App or official web (like upload, delete, move) syncing in real-time to the script's deduplication or analysis list?**  
**A:** To ensure ultimate search and analysis speed, the script uses a memory snapshot mechanism and won't re-fetch tens of thousands of file details every time. Solution: If you modify many files in other clients, please refresh the webpage to re-fetch the global index. Avoid simultaneously modifying data on multiple platforms while using the script.

**Q: During batch extraction, can I set different passwords for multiple files at once?**  
**A:** Yes. Smart matching logic: As long as you pre-save known passwords into the "Password Vault," the script will automatically try all passwords in the vault for every archive during batch extraction. If matched successfully, it will start automatically without manual intervention.

**Q: Is it a script bug if it prompts "System busy/Wait and retry" during batch extraction?**  
**A:** No. This is usually due to the PikPak cloud server triggering a concurrency frequency limit. This prompt means the official cloud API is currently busy. If it fails after multiple attempts, the resource might be damaged or restricted in the cloud. We recommend trying again later or re-uploading/downloading it locally to process.

**Q: What information does the exported JSON config contain?**  
**A:** The JSON file only contains your local configuration data set in Enhancement Master, such as deduplication preferences, blacklist/whitelist rules, and the password vault. It **does not contain** your cloud drive account passwords, so it is safe to use for cross-device migration.

**Q: Will importing a backup overwrite my existing configs or lists?**  
**A:** No. The script has been upgraded to a smart merge logic. When importing, it will automatically deduplicate and merge items like Resource Manager and history records with local data. Only basic settings (like search engines, Aria2 address, etc.) will take the imported file as standard, ensuring your locally accumulated data is not lost.

**Q: Why do some files prompt that they are protected or cannot be deleted during batch deletion?**  
**A:** Please check if these files have been recorded in the Resource Manager. If you enabled "Skip recorded resources during deletion" in settings, the script will treat matched files as protected items to prevent accidental deletion.<br>
Solutions: 
1. Uncheck this protection rule in settings before deleting;
2. Or click the "Resource Manager" entry in the toolbar/sidebar, and click "Run Cleanup Now" to force physical deletion of these records.

**Q: Why don't files show up in the list after I execute a "Paste" operation?**  
**A:** Please check if your cloud drive has enough remaining space to accommodate these files. PikPak officially adopts a **silent interception** strategy for "insufficient space" situations, meaning it will quietly abort the operation in the background instead of popping up a specific error prompt when the quota is exceeded. If pasted files don't appear, it's usually because the capacity limit was triggered. Recommend clearing space and trying again.

**Q: What is the "Auto-repair anti-block magnet links" feature in the Cloud Download popup, and when should it be enabled?**  
**A:** This feature automatically strips text interference like Chinese characters, emojis, and symbols mixed in links, intelligently identifies and extracts signature codes, and restores them to standard formats.<br>
**Suggestion: Keep this feature enabled by default. It automatically handles polluted magnet links acquired from social platforms that are mixed with irrelevant text or missing headers. Standard magnet links starting with `magnet:?` will skip repair and download normally.**

**Q: Will the hierarchical structure be retained when downloading cloud folders using Aria2/Motrix or the browser?**  
**A:** **Aria2/Motrix will retain the hierarchy**. The script uses directory hierarchy cloning technology. Once downloaded, your local hard drive will perfectly restore the tree structure from the cloud, automatically clean special characters unsupported by Windows (like `:` `*` `?`, etc.) in folder names, and intelligently shorten redundant paths to ensure download success.  
**Browser downloads will NOT retain the hierarchy**. Due to the limitations of native browser download protocols, all files within the folder will be "flattened" into the same directory. **Suggestion:** To retain complex folder structures, prioritize Aria2 pushes.

**Q: What is "Multi-account Data Migration"? How do I operate it?**  
**A:** This feature allows you to seamlessly and quickly transfer files from your current account to another account.
1. Select the files/folders to transfer in the current account, and click the "Data Migration" button at the bottom.
2. The script will automatically encrypt and package the data, and log you out of your current account.
3. Then, simply log into your [Target Account] normally. Upon successful login, the script will auto-detect the locally cached migration package and pop up a prompt to receive it with one click.

---

## 🛡️ Privacy & Security

* **Data Localization**: All core features of this script (like batch renaming, file analysis, extraction, etc.) interact directly with official PikPak APIs via your browser. Your account Token, password vault, and file data are **only saved locally in your browser**.
* **Zero Collection**: The script **does not** collect any user privacy data, nor will it **ever** upload your file info or account credentials to any third-party servers.
* **Third-party APIs**: Only when using extended features like "Online Subtitle Search" or "Reverse Image Search" will the script send necessary search keywords or image parameter characteristics to relevant public service APIs. No personal identity information is involved.

---

## 🚀 Changelog

### V1.3.2
* Reinforced local upload logic with new direct connections for Mainland China IPs.
* Adjusted duration similarity thresholds for file deduplication to improve detection precision.
* Deeply optimized interaction logic to enhance stability during complex operations.

### V1.3.1
* Further optimized login flickering issues. If the script remains stuck on "Syncing login status," please report your browser version.

### V1.3.0
* Added **Multi-Account Data Migration**: supports encrypted batching and seamless transfer of massive files to your other accounts.
* Added **Hard Delete** mechanism: allows items to skip the Trash and free up cloud space instantly.
* Fixed boundary limit calculation errors for images in extreme zoom or long-image modes.
* Resolved sorting inconsistencies in the path bar dropdown for special views (e.g., "Recently Added," "Analysis") to match header settings.
* Polished responsive layout thresholds and interaction details for various screen sizes and resolutions.
* Fixed z-index layering issues where multiple modal windows would overlap incorrectly.
* Strengthened unauthorized state detection to prevent infinite network retry loops when logged out.

### V1.2.0
* Refactored the video duration sniffing engine for better performance.
* Polished UI components for consistent visual performance across different browser zoom levels.
* Fixed highlighting bugs during path retrieval; fixed a bug where saving "Turbo Mode" would block other settings from being applied.

### V1.1.0
* Aria2 now supports **preserving folder structures**; added delivery packet loss alerts and one-click error log export.
* Cloud download now supports batch submission and smart deduplication with **automatic cleaning of masked magnet links** (supports Base32 auto-decoding).
* The Bulk Rename preview now includes **icon and cover displays**, with support for large image hover previews on folders.
* Upgraded the Import feature to **"Smart Merge"** mode; backups no longer overwrite existing local blacklists or records.
* Significantly optimized loading speeds in Turbo Mode, fixed UI residue when switching accounts, and improved image search success rates.

---

## 🤝 Acknowledgements

This project was deeply inspired by [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager) (by 브랜뉴) regarding its UI design language and some web API call logic. We hereby express our respect.

---

## ⚖️ License Statement

This project follows the **CC-BY-NC-SA-4.0 Agreement**
* 🚫 Any commercial use is prohibited.
* 📢 Secondary distribution must provide attribution and maintain the same license, strictly for personal learning and technical exchange.
