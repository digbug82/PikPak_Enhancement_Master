<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/turbo/turbo_tc.gif" alt="封面">
</p>

# 📦 PikPak 增強大師

[![Version](https://img.shields.io/badge/Version-2.3.0-0067C0?style=flat-square)](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js)
[![License](https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-red?style=flat-square)](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html)
[![Platform](https://img.shields.io/badge/Platform-PikPak%20Web-orange?style=flat-square)](https://mypikpak.com/drive/all)

> 面向 PikPak 網頁端的桌面級增強套件。  
> 從瀏覽、搜尋、分析、整理到播放、下載與遷移，讓雲端管理真正接近本機檔案管家的效率與流暢度。

---

## 🌍 支援語言 (Languages)

[繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(tc).md) | [简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/README.md) | [English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(en).md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ja).md) | [Indonesia](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(id).md) | [Bahasa Melayu](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ms).md)

---

## ✨ 主要功能 (Features)

### ✨ 體驗與導航引擎

* **交互重構**：在官方功能基礎上，整體介面參照 **Windows 檔案總管** 的使用習慣進行重構，操作路徑更直觀。
* **極速模式**：開啟後深度接管網頁端邏輯，針對海量檔案場景顯著緩解卡頓、崩潰與記憶體壓力問題。
* **高級路徑欄**：支援滾輪滑動、同級目錄下拉切換、路徑回顯與溯源跳轉；全盤搜尋與分析套件均已接入統一路徑體系。
* **體驗增強**：支援星號、類型等多維排序、暗黑皮膚、一鍵**模糊封面**，並結合 **SWR 靜默刷新策略** 提升視圖更新體驗。
* **後台索引與保護**：首頁藍色呼吸點提示後台目錄樹同步狀態；系統內建並發操作保護，盡量避免髒資料與衝突寫入。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/table/table_tc.gif" width="1100" alt="路徑">
</p>

> 📌 預設資料夾 **My Pack** 受官方保護，腳本不會對其執行誤刪風險較高的危險操作。

---

### 📂 批次與空間管理

* **批次重新命名**：支援 **正規表示式取代 / 刪除**、**影集流水號**、文本**格式化**、**FC2 純淨命名**、**前綴去廣告**，以及基於 MIME 的**副檔名修復**。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/rename/rename_tc.gif" width="550" alt="批次重新命名">
</p>

* **文件透視 / 檔案查重**：整合檔案篩選與查重能力，查重支援 **精準比對 / 時長相似 / 名稱相似** 三模態分析。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_scan/file_scan_tc.gif" alt="文件透視">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_dup/file_dup_tc.gif" alt="檔案查重">
</p>

* **資料夾分析 / 資料夾查重**：整合資料夾篩選與查重能力，查重支援 **名稱比對 / 相似度比對 / 包含率比對** 三模態分析。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_scan/folder_scan_tc.gif" alt="資料夾透視">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_dup/folder_dup_tc.gif" alt="資料夾查重">
</p>

* **匯出目錄**：支援匯出目前目錄的**目錄樹**清單。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/tree/tree_tc.png" width="350" alt="匯出目錄">
</p>

* **智慧整理**：支援**永久刪除**（跳過回收站）、一鍵清理空資料夾、**批次解壓縮**，並整合**密碼自動記憶**與**智慧填充**邏輯。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/archive/archive_tc.png" width="250" alt="密碼金庫">
</p>

* **資源管理器**：支援自訂**檔案名單**一鍵清理垃圾資源；也可作為**保護名單**，在批次刪除時自動保護命中項目。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/manager/manager_tc.gif" width="550" alt="資源管理器">
</p>

> ⚠️ 為避免資料同步衝突，執行分析、整理、批次刪除等重操作期間，不建議在其他用戶端同時修改同一批檔案。

---

### 🌐 傳輸與分享中心

* **分享管理**：支援設定提取次數上限；次數達標後自動取消分享，使連結失效。
* **本機上傳**：支援將本機檔案 / 資料夾直接拖曳到網頁中上傳，優化小檔案場景下的中斷率與整體傳輸體驗。
* **雲下載增強**：支援批次離線連結**自動去重**；內建**磁鏈智慧清洗引擎**，可自動提取 Base32 / Hex 雜湊並剔除干擾文字。
* **種子與兜底**：支援解析 **.torrent** 種子檔；對部分受限連結提供**網頁快照保存方案**作為兜底。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/torrent/torrent_tc.png" height="350" alt="磁鏈">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/share/share_tc.gif" height="350" alt="分享">
</p>

> ⚠️ 分享提取次數上限的自動攔截，僅在網頁保持開啟且裝置未休眠時生效。

---

### 🎬 沉浸式媒體增強

* **播放引擎**：支援 **0.5x - 3.0x 倍速**、旋轉翻轉、強制比例、自動跳過片頭片尾、**清單循環 / 單集循環 / 播完暫停**，以及進度條**縮略圖預覽**。
* **相容回退**：內建看門狗與相容邏輯，遇到黑屏、清晰度不可用或編碼相容異常時，可自動回退到可播放畫質。
* **字幕系統**：支援**雲端同名字幕載入**、**本機字幕檔匯入**與**線上字幕搜尋**；支援字幕軸毫秒級偏移、顯示位置切換、大小調整與本地文本拖曳掛載。
* **視覺輔助**：支援圖片或影片目前畫面**以圖搜圖**，便於快速反查封面、演員、番劇或素材來源。
* **媒體模式**：可在設定中啟用媒體模式，使劇集 / 漫畫類目錄優先按名稱 **A-Z** 順序排列，提升瀏覽連續性。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/video/video_tc.gif" alt="影片">
</p>

---

### ⚡ 下載與分發

* **外部直連**：支援一鍵取得影片串流直連，或喚起 **PotPlayer** 進行外部播放。
* **RPC 分發**：支援透過 RPC 協議將檔案一鍵推送至 **Aria2 / Motrix** 等下載節點。
* **目錄結構還原**：推送整個資料夾時，可自動還原雲端中的**樹狀目錄結構**，避免下載後目錄被攤平。
* **分發增強**：支援長連線狀態監控、失敗後自動匯出錯誤清單，並支援**資料夾下載過濾**。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/filter/filter_tc.png" height="290" alt="資料夾下載過濾">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/aria2/aria2_tc.gif" height="290" alt="Aria2">
</p>

---

### ⚙️ 設定與資料管理

* **匯出備份**：支援將偏好設定、管理規則、密碼金庫等匯出為帶數位指紋的 JSON 備份檔。
* **智慧匯入**：匯入時支援**智慧合併去重**，避免簡單覆蓋造成歷史規則遺失。
* **清除本機資料**：支援按需清除**全盤索引**、**偏好設定**、**管理規則**、**密碼金庫**與**快取**，釋放本機空間並提升隱私安全。
* **密碼金庫**：內建常用解壓密碼集中管理，供批次解壓場景自動呼叫與快速填充。
* **資料遷移**：支援將選中項目加密打包，並在另一帳號登入後自動識別接管，實現**跨帳號無縫轉存**。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/cache/cache_tc.png" width="350" alt="快取">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/migrate/migrate_tc.gif" alt="資料遷移">
</p>

> 📌 全盤索引會在網頁關閉後清空；偏好設定、管理規則、密碼金庫等資料則持久化保存在本地腳本環境中。

---

## 💻 相容性說明 (Compatibility)

* **推薦瀏覽器**：Chrome / Edge（最新版）
* **推薦腳本管理器**：Tampermonkey / Violentmonkey
* **適用平台**：PikPak Web
* *註：Safari / Firefox 及其他腳本管理器暫未進行完整深度測試，建議使用上述推薦環境以獲得最佳體驗。*

---

## 📥 安裝指南 (Installation)

1. **安裝腳本管理器**：先安裝 [Tampermonkey](https://www.tampermonkey.net/) 或相容腳本管理器。
2. **安裝腳本**：點擊 **[立即安裝](https://github.com/digbug82/PikPak_Enhancement_Master/raw/main/PikPak_Enhancement_Master.user.js)**。
3. **開啟 PikPak 網頁端**：前往 [PikPak](https://mypikpak.com/drive) 並登入帳號。
4. **啟動增強大師**：
   * 普通模式下：登入後點擊側欄浮動的藍色 **PikPak Logo 球** 進入。
   * 極速模式下：登入後腳本可自動開啟，接管網頁端。

---

## ❓ 常見問題解答 (FAQ)

**Q：為什麼安裝了腳本卻沒有顯示藍色的懸浮球？**  
**A：** 請先確認您已登入 PikPak 網頁端。若已登入仍未顯示，請嘗試重新整理網頁（F5）；同時檢查是否被廣告攔截外掛（如 AdGuard、uBlock Origin）誤攔截。可暫時停用攔截外掛，或將 PikPak 網頁加入白名單後再試。

**Q：什麼是「極速模式（Turbo Mode）」？為什麼建議開啟？**  
**A：** 開啟後，腳本會深度接管原生網頁端邏輯，並全螢幕覆蓋主要介面。該模式會主動屏蔽原網頁中高記憶體占用的同步流程，因此能顯著改善海量檔案場景下的卡頓、崩潰與載入遲緩問題。  
**注意：** 開啟極速模式後，最小化與關閉按鈕會自動隱藏；如需返回原網頁，請前往設定中取消勾選。  
**建議：** 若您的網盤檔案較多，強烈建議開啟，以獲得更流暢、更穩定的使用體驗。

**Q：為什麼首頁的 My Pack 會顯示「預設」標籤，且無法加入星號、複製、移動、重新命名或刪除？**  
**A：** 這是 PikPak 官方對預設目錄的安全保護機制。腳本遵循並保留了這層保護邏輯，但在此基礎上解除了預設資料夾 **My Pack** 的分享限制。

**Q：腳本中的「檔案查重」與「資料夾查重」有什麼本質區別？實際使用時該如何選擇？**  
**A：**  
**檔案查重：** 面向「單一檔案」級別，採用 **精準比對、時長相似、名稱相似** 三模態演算法，適合清理網盤中零散分布的重複檔案，例如重複保存的單集影片、單張圖片、獨立壓縮檔等。  

**資料夾查重：** 面向「資料夾整體結構」級別，採用 **名稱比對、相似度比對、包含率比對** 三模態演算法。它更適合清理重複保存的整部劇集、完整圖包、多層級資料目錄等。即使兩個資料夾名稱不同，只要內部檔案高度相似，或存在明顯的包含關係，也能被識別出來。

> **建議：**  
> 檔案查重中的「精準比對」屬於雜湊匹配，結果最可靠，可較放心地一鍵勾選刪除。  
> 檔案查重中的「時長相似」「名稱相似」，以及資料夾查重的三種模式，本質都屬於相似匹配，建議在批次勾選前先人工複核，以免誤刪。

**Q：為什麼檔案查重查出來的重複檔案越來越多？是不是全盤索引丟包了？**  
**A：** 不是索引丟包，也不是資料錯誤。查重結果中「精準比對」部分的數量通常是穩定的。之所以後續會查出越來越多的重複檔案，主要是因為基於**影片時長**的相似匹配在逐步變得更完整。  

由於 PikPak 的部分原始介面並不會直接返回影片時長，很多重複影片在初次分析時會因缺少時長資訊而被暫時跳過。為了解決這個問題，腳本內建了後台非同步嗅探機制，會自動讀取影片中繼資料，補全精確時長，並持久化保存在瀏覽器本地。隨著您使用時間增加，本地時長資料庫會越來越完整，因此查重引擎能識別出更多「檔名不同、但內容時長一致」的隱藏重複資源，所以結果會顯得越來越多、也越來越準確。

**Q：為什麼「以圖搜圖」有時無法直接上傳圖片，而是提示我貼上？**  
**A：** 這是受瀏覽器安全策略限制所致，主要與 **CORS 跨域限制** 有關。當腳本無法直接將網盤中的圖片傳送到目標搜圖服務時，會自動將目前畫面截圖複製到您的剪貼簿。此時您只需在彈出的搜圖頁面按下 `Ctrl + V`，即可完成圖片提交。

**Q：為什麼使用腳本播放影片時，只有聲音卻沒有畫面？**  
**A：** 這通常是因為該影片屬於 **m3u8 多音軌 / 多軌道串流媒體**。在雲端轉碼後，聲音與畫面軌道可能發生分離，而目前網頁播放器並不支援這類特殊影片流的完整線上解析。  
遇到這種情況，建議點擊右下角的 **「外部播放」** 按鈕，直接呼叫本地的 PotPlayer 等專業播放器進行串流播放。

**Q：清晰度選單中的「原畫（高速）」與普通「原畫」有什麼區別？**  
**A：** 兩者在畫質上通常幾乎沒有差別，主要區別在於底層的傳輸鏈路與解碼策略不同。  
其中，「**原畫（高速）**」使用的是官方面向流媒體優化過的鏈路，通常在呼叫 PotPlayer 等外部播放器時，載入速度更快、拖動更順滑、響應也更穩定。  
**建議：** 無論是網頁播放還是外部串流，通常都優先選擇「原畫（高速）」。

**Q：為什麼我在手機 App 或官方網頁版剛進行的操作（如上傳、刪除、移動），在腳本的查重或分析清單中沒有即時同步？**  
**A：** 這是腳本為保證搜尋、分析與篩選速度而採用的設計策略。為了避免每次操作都重新拉取數萬個檔案資訊，腳本大量使用本地記憶體快照與索引快取。  
如果您剛在手機 App 或官方網頁端進行了較多修改，建議重新整理網頁，以重新獲取全盤索引。  
**建議：** 在腳本執行分析、查重、整理等操作期間，盡量避免多端同時修改同一批資料。

**Q：批次解壓縮時，可以一次性給多個檔案設定不同的密碼嗎？**  
**A：** 可以。腳本的批次解壓縮採用的是**密碼金庫智慧匹配**機制：只要您事先把已知密碼保存進密碼金庫，腳本在處理每一個壓縮檔時，都會自動嘗試金庫中的所有密碼；一旦匹配成功，就會自動開始解壓縮，無需手動逐個輸入。

**Q：批次解壓縮時提示「系統繁忙 / 等待重試」，是腳本出 Bug 了嗎？**  
**A：** 不是。這通常是因為 PikPak 雲端伺服器觸發了並發頻率限制，屬於官方介面目前繁忙，而不是腳本本身異常。  
如果某個檔案多次重試後仍然失敗，通常說明該資源在雲端可能已經損壞、受限，或目前伺服器狀態不佳。建議稍後重試，或將檔案下載到本地後再處理。

**Q：匯出的配置 JSON 包含哪些資訊？**  
**A：** 匯出的 JSON 檔僅包含您在增強大師中的本地配置資料，例如查重偏好、名單規則、密碼金庫、部分歷史紀錄與功能設定等。  
**不會包含**您的 PikPak 帳號密碼，因此可以放心用於跨裝置備份與遷移。

**Q：匯入備份會覆蓋我現有的配置或名單嗎？**  
**A：** 一般不會。腳本已升級為**智慧合併**邏輯：匯入時會優先對資源管理器、歷史紀錄等列表型資料進行去重合併，而不是直接覆蓋本地內容。  
僅少數基礎設定項（如搜圖引擎、Aria2 位址等）會以匯入檔中的值為準，因此您長期累積的本地名單和紀錄通常不會遺失。

**Q：為什麼批次刪除檔案時，部分檔案提示受保護或無法被刪除？**  
**A：** 請先檢查這些檔案是否已被記錄在**資源管理器**中。若您在設定裡開啟了「刪除時跳過管理器中記錄資源」，腳本會將命中的檔案視為受保護項目，以避免誤刪。  
**解決方法：**  
1. 前往設定中取消勾選該保護規則後，再重新執行刪除；  
2. 或點擊工具列 / 側邊欄中的 **「資源管理器」** 入口，選擇 **「立即執行清理」**，對這些記錄項執行強制物理清理。

**Q：為什麼我執行「貼上」操作後，檔案沒有在清單中顯示？**  
**A：** 請先檢查您的網盤剩餘空間是否足夠。PikPak 官方目前對「空間不足」通常採用**靜默攔截**策略，也就是在容量超限時，不一定會彈出明確提示，而是直接在後台中止操作。  
因此，如果執行貼上後檔案沒有出現，最常見的原因就是觸發了容量限制。建議先清理空間，再重新嘗試。

**Q：雲下載視窗中的「自動修復防屏蔽磁鏈」是什麼功能？建議什麼時候開啟？**  
**A：** 該功能會自動清理磁鏈中夾雜的漢字、表情、符號等無關干擾內容，並智慧提取特徵碼，將連結還原為標準格式。  
**建議：** 預設保持開啟。它尤其適合處理來自社群平台、論壇或聊天軟體中那些被插入無關文字、帶「去頭」處理、或被刻意污染過的磁鏈。  
對於已經是標準格式、並且以 `magnet:?` 開頭的正常磁鏈，腳本會自動跳過修復，不影響正常下載。

**Q：什麼是「資料夾下載過濾」？它會影響哪些下載方式？**  
**A：** 該功能用於在下載整個資料夾時，**按副檔名或名稱規則自動排除匹配檔案**。例如，您可以排除 `.txt`、`.jpg`，或排除名稱中包含某些關鍵字的檔案。它不僅會作用於普通資料夾下載，也會作用於 **Aria2 / Motrix 推送資料夾** 場景。

**Q：使用 Aria2 / Motrix 或瀏覽器下載網盤資料夾時，層級結構會保留嗎？**  
**A：**  
**Aria2 / Motrix：會保留層級。**  
腳本會在推送過程中自動克隆並還原雲端中的目錄樹結構。下載完成後，本地磁碟中的資料夾層級會盡可能與網盤保持一致。同時，腳本還會自動清洗 Windows 不支援的特殊字元（如 `:` `*` `?` 等），並盡量縮短過長路徑，以減少下載報錯。  

**瀏覽器原生下載：不會保留層級。**  
受瀏覽器下載協議本身限制，資料夾內的檔案通常會被「平鋪」到同一個目錄中。  

**建議：** 如果您希望完整保留複雜目錄結構，請優先使用 **Aria2 / Motrix 推送下載**。

**Q：什麼是「資料遷移」？具體該如何操作？**  
**A：** 該功能可將目前帳號中的檔案或資料夾，快速、無縫地轉存到您的另一個 PikPak 帳號中。  
**操作步驟如下：**  
1. 在目前帳號中選中需要遷移的檔案或資料夾；  
2. 點擊底部的 **「資料遷移」** 按鈕；  
3. 腳本會自動將資料加密打包，並自動登出目前帳號；  
4. 隨後，您只需正常登入目標帳號；  
5. 登入成功後，腳本會自動偵測本地快取中的遷移包，並彈窗提示您一鍵接收。

---

## 🛡️ 隱私與安全聲明 (Privacy & Security)

* **本地優先**：本腳本所有核心能力均透過瀏覽器直接與 PikPak 官方 API 互動，您的帳號 Token、密碼金庫及大多數本地配置資料預設保存在本地瀏覽器環境中。
* **零收集**：腳本**不會主動收集**使用者隱私資料，也**不會**將您的檔案資訊或帳號憑證上傳至任何第三方伺服器。
* **第三方介面**：僅在使用「線上字幕搜尋」或「以圖搜圖」等擴展功能時，腳本才會向相關公共服務發送必要的搜尋關鍵字或圖片特徵參數，不涉及您的個人身份資訊。

---

## 🚀 更新日誌

### V2.3.0 
* 新增 **PotPlayer 協議修復助手**。

### V2.2.3
* 修復上傳失敗問題。
* UI 穩定性優化。

### V2.2.2
* 修復快捷鍵層級衝突問題。

### V2.2.1
* 修復 Aria2 / Motrix 下載問題。

### V2.2.0
* 新增**剪貼簿磁鏈監聽**與**磁鏈預覽**功能。
* 增強 UI 穩定性。

### V2.1.1
* 修復 Aria2 / Motrix 在僅支援 `ws://` / `wss://` RPC 或非標準連接埠反向代理環境下連線失敗的問題。

### V2.1.0
* 支援**監聽側鍵**，實現目錄層級跳轉。
* 穩定性優化。

### V2.0.0
* 支援語言擴展為 **简体中文 / 繁體中文 / English / 한국어 / 日本語 / Indonesia / Bahasa Melayu**。
* UI 與架構升級，以圖搜圖按鈕外置，新增**網格視圖**。

### V1.3.2
* 本機上傳邏輯加固，增加中國大陸 IP 直連。
* 檔案查重的時長相似閾值調整，優化檢測精度。

### V1.3.1
* 進一步優化登入閃爍問題。

### V1.3.0
* 新增**資料遷移**功能，支援一鍵將海量檔案加密打包並無縫轉存至您的其他帳號。
* 新增**永久刪除**機制，刪除時可一鍵跳過回收站，瞬間釋放網盤空間。

### V1.2.0
* 影片時長嗅探引擎重構。

### V1.1.0
* Aria2 支援**保留資料夾路徑結構**，新增投遞丟包提醒及錯誤清單一鍵匯出。
* 雲下載支援批次提交與智慧去重，**自動清洗防屏蔽污染磁鏈**（支援 Base32 自動解碼）。
* 批次重新命名預覽介面新增**圖示與封面展示**，支援資料夾懸浮大圖預覽。
* 匯入功能升級為**「智慧合併」**模式，匯入備份時不再覆蓋本地既有的名單與紀錄。

---

## 🤝 致謝 (Acknowledgements)

本專案在 UI 設計語言及部分網頁端 API 呼叫邏輯上，深受 [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager)（by 브랜뉴）啟發，特此致敬。

---

## ⚖️ License 聲明

本專案遵循 **CC-BY-NC-SA-4.0** 協議：

* 🚫 禁止用於任何商業用途
* 🧪 僅供個人學習、研究與技術交流使用
* 📢 二次分發必須保留署名並沿用相同協議
