<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/turbo/turbo_tc.gif" alt="封面">
</p>

# 📦 PikPak 增強大師

[![Version](https://img.shields.io/badge/Version-1.2.0-0067C0?style=flat-square)](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js) [![License](https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-red?style=flat-square)](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html) [![Platform](https://img.shields.io/badge/Platform-PikPak%20Web-orange?style=flat-square)](https://mypikpak.com/drive/all)

> 整合批次解壓縮、智慧重複檢查、多模態批次重新命名、Aria2 推送、垃圾檔案清理、匯出目錄、媒體播放引擎增強等功能的桌面級檔案管理員。

---

## 🌍 支援語言 (Languages)

[繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(tc).md) | [简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/README.md) | [English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(en).md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ja).md)

---

## ✨ 主要功能 (Features)

### ✨ 體驗與導覽引擎

* **互動重構**：介面基於類 Windows 檔案總管設計，全面提升操作體驗
* **極速模式**：替換網頁端邏輯，屏蔽原生同步（**推薦在設定中勾選**）
* **進階路徑列**：支援滾輪滑動、下拉切換、路徑回顯與溯源跳轉
* **後台自動索引**：首頁圖示藍色呼吸點提示目錄同步狀態
* **體驗增強**：支援深色模式、影片時長顯示、一鍵模糊封面（隱私保護）、星號與檔案類型排序

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/table/table_tc.gif" width="1100" alt="路徑">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/path/path_tc.gif" width="1100" alt="搜尋">
</p>

---

### 📂 批次與空間管理

* **批次重新命名**：支援正規替換/刪除、劇集流水號產生、文字格式化、FC2 規範命名、前綴去廣告及基於 MIME 的副檔名修復
  
<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/rename/rename_tc.gif" width="550" alt="批次重新命名">
</p>

* **分析套件**：包含檔案分析（類型篩選及雜湊/時長/名稱查重）、資料夾分析（大小篩選及名稱/相似度/包含率查重）與匯出目錄樹功能

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/tree/tree_tc.png" width="350" alt="匯出目錄">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file/file_tc.gif" width="300" alt="檔案分析">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder/folder_tc.gif" width="350" alt="資料夾分析">
</p>

* **智慧整理**：一鍵清理空資料夾、支援批次解壓縮（記憶解壓縮成功密碼、帶密碼的壓縮檔智慧填入密碼並刪除已解壓縮項目）

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/archive/archive_tc.png" width="250" alt="密碼庫">
</p>

* **資源管理器**：支援在設定中自訂資源管理器為檔案黑名單（快速清理垃圾檔案）或檔案白名單（批次刪除時保護記錄檔案）

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/manager/manager_tc.gif" width="550" alt="資源管理器">
</p>

---

### 🌐 傳輸與分享中心

* **分享管理**：支援提取次數限制，自動取消分享
* **離線下載**：批次離線任務 + 連結匯出
* **極速上傳**：支援上傳超大檔案，大幅降低小檔案上傳失敗率
* **雲下載增強**：支援批次加入連結時**自動去重**；內建**磁鏈智慧清洗引擎**，自動從亂碼或帶干擾文字中提取磁鏈並支援 Base32 解碼

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/torrent/torrent_tc.png" width="380" alt="磁鏈">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/share/share_tc.gif" width="350" alt="分享">
</p>

> ⚠️ 分享中設定提取次數上限功能僅在網頁保持開啟且設備未休眠時生效

---

### 🎬 沉浸式媒體增強

* **播放引擎**：支援 0.5x–3.0x 倍速、旋轉/鏡像/比例調整、自動跳過片頭片尾、連播/循環模式及進度列縮圖預覽
* **字幕系統**：支援雲端/本機/線上搜尋、字幕個人化設定及拖曳載入字幕
* **視覺輔助**：支援以圖搜圖（圖片/影片影格）與媒體模式（劇集/漫畫資料夾自動 A-Z 排序）

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/video/video_tc.gif" alt="影片">
</p>

---

### ⚡ 下載與分發

* **Aria2 目錄重建**：批次推送資料夾至 Aria2 或 Motrix 時，**自動還原雲端原有的樹狀目錄結構**，下載後無需重新整理。
* **長連線監控**：配置 Aria2 時自動驗證 RPC 連通性，並在批次推送失敗時自動匯出 `.txt` 錯誤清單（Aria2_失敗清單.txt）以供追溯。
* **下載過濾**：資料夾下載支援按副檔名 / 關鍵字過濾其中的檔案

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/aria2/aria2_tc.gif" width="400" alt="aria2">
</p>

---

### ⚙️ 配置與資料管理

* **配置備份**：支援 JSON 匯出與跨裝置轉移
* **資料清理**：支援清理全盤索引、偏好設定、管理規則、密碼金庫、影片快取與運行快取

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/cache/cache_tc.png" width="350" alt="快取">
</p>

> 📌 全盤索引為暫存資料，每次重新整理網頁會重新建構。其餘為持久化資料，不隨網頁重新整理而消失。

---

## 💻 相容性說明 (Compatibility)

* **推薦瀏覽器**：Chrome / Edge (最新版)
* **推薦腳本管理器**：Tampermonkey (油猴) / Violentmonkey (暴力猴)
* *註：暫未在 Safari / Firefox 或其他腳本管理器上進行深度測試，建議使用上述推薦環境以獲得最佳體驗。*

---

## 📥 安裝指南 (Installation)

> 1. **環境準備**：安裝瀏覽器擴充功能 [Tampermonkey](https://www.tampermonkey.net/)
> 2. **腳本安裝**：點擊 **[立即安裝](https://github.com/digbug82/PikPak_Enhancement_Master/raw/main/PikPak_Enhancement_Master.user.js)**
> 3. **進入介面**：打開 [PikPak 網頁官網](https://mypikpak.com/drive)
> 4. **開啟腳本**：登入網頁後，點擊側邊欄出現浮動的藍色 **PikPak Logo 球** 進入 PikPak 增強大師。未登入狀態下腳本無法打開。

---

## ❓ 常見問題解答 (FAQ)

**Q：為什麼安裝了腳本卻沒有顯示藍色的懸浮球？**  
**A：** 請確保您已經登入了 PikPak 網頁端。如果已登入仍未顯示，請嘗試重新整理網頁 (F5)；或者檢查是否被廣告攔截擴充功能（如 AdGuard / uBlock Origin）誤攔截，嘗試暫時關閉攔截功能或將本站加入白名單。

**Q：什麼是「極速模式 (Turbo Mode)」，為什麼建議開啟？**  
**A：** 開啟後腳本將全螢幕覆蓋網頁端，並全面接管所有原生網頁端功能。該模式透過物理屏蔽原網頁極度消耗記憶體的同步邏輯，徹底解決海量檔案下的卡頓與崩潰問題。**注意：** 極速模式下最小化與關閉按鈕將自動隱藏（需在設定中取消勾選方可返回原網頁）。**建議：** 若您的網盤檔案較多，強烈推薦開啟此模式，以獲得極致的響應速度與流暢體驗。

**Q: 為什麼首頁的 My Pack 顯示「預設」標籤且無法加入星號、複製、移動、重新命名或刪除？**  
**A:** 這是官方的安全保護機制。腳本在此基礎上解除了預設資料夾 My Pack 的分享限制。

**Q：腳本中的「檔案查重」與「資料夾查重」有什麼本質區別？在實際使用中該如何選擇？**  
**A：** **檔案查重：** 針對「單一檔案」級別。採用雜湊精準比對、影片時長相似度、名稱相似度三模態演算法，適合清理網盤中零散分布的重複檔案（如重複儲存的單集影片、單張圖片等）。<br>
**資料夾查重：** 針對「資料夾整體結構」級別。採用名稱比對、內部檔案重合度（相似度比對）、子集冗餘（包含率比對）三模態演算法。它能看透資料夾的「內部本質」，非常適合用來清理重複儲存的「整部劇集」、「完整圖包」或「多層級資料」，即使兩個資料夾名字完全不同，只要內部檔案高度一致或存在包含關係，也能被精準揪出。

> **建議：** 檔案查重中的精準查重為雜湊比對，可一鍵勾選刪除。檔案查重中的時長與名稱比對，以及資料夾查重三模態均為相似比對，請謹慎一鍵勾選以防誤刪。

**Q: 為什麼檔案查重查出來的重複檔案越來越多了？是不是全盤索引資料遺失了？**  
**A:** 請放心，這並非全盤索引遺失或資料錯誤，查重結果中「精準比對」部分的數量始終是穩定的。查重結果增多是由於基於影片時長的「相似比對」變得更全面了：由於 PikPak 部分原始資料介面不直接提供影片時長，導致許多重複影片在初期因資料缺失而被跳過，為此腳本內建了背景非同步嗅探演算法，會自動模擬讀取影片中繼資料（Metadata）來提取精確時長並持久化儲存在瀏覽器本機。隨著您使用時間的增加，本機時長資料庫越來越完備，查重引擎得以基於補全後的資料揪出更多檔案名稱不同但內容長度一致的隱藏重複資源，因此結果會顯得越來越多、越來越準。

**Q: 為什麼「以圖搜圖」有時無法直接上傳圖片，而是提示讓我貼上？**  
**A:** 這是受限於瀏覽器的安全策略（CORS 跨網域限制）。當腳本無法直接將網盤圖片推送到搜圖伺服器時，會自動將目前畫面截圖拷貝到您的剪貼簿。您只需在彈出的搜圖頁面中按下 `[Ctrl+V]` 即可完成識別。

**Q: 為什麼使用腳本播放影片時，只有聲音卻沒有畫面？**  
**A:** 這通常是因為該影片屬於 m3u8 多音軌/多軌道串流媒體，雲端轉碼後聲音與畫面軌道發生了分離，而網頁端播放器暫不支援此類特殊影片流的線上多軌解析。建議點擊右下角的「外部播放」按鈕，直接呼叫本機的 PotPlayer 等專業播放器進行串流播放。

**Q：清晰度選單中的「原畫（高速）」與普通「原畫」有什麼區別？**  
**A：** 兩者清晰度幾乎完全一致，主要區別在於底層的解碼與傳輸協定不同。「原畫（高速）」採用了官方專為串流媒體優化的鏈路，通常在呼叫 PotPlayer 等外部播放器時，使用帶「高速」字樣的連結能獲得最快的載入響應和最順滑的拖動體驗。無論是網頁播放還是外部串流，均建議優先選擇此選項。

**Q: 為什麼我在手機 App 或官方網頁版剛進行的操作（如上傳、刪除、移動），在腳本的查重或分析清單中沒有即時同步？**  
**A:** 腳本為保證極致的搜尋和分析速度，採用了記憶體快照機制，不會每次都重新拉取數萬個檔案資訊。解決方法：若在其他用戶端修改檔案過多，請重新整理網頁重新取得全盤索引。在腳本操作期間請避免多端同時修改資料。

**Q: 批次解壓縮時，可以一次性給多個檔案設定不同的密碼嗎？**  
**A:** 可以。智慧比對邏輯： 只要您將已知的密碼預先存入「密碼金庫」，腳本在批次解壓縮時會針對每一個壓縮檔自動嘗試金庫中的所有密碼。如果比對成功則自動開始，無需人工干預。

**Q：批次解壓縮時提示「系統忙碌/等待重試」是腳本出 Bug 了嗎？**  
**A：** 不是。這通常是由於 PikPak 雲端伺服器觸發了併發頻率限制。出現此提示意味著網盤官方介面目前也處於忙碌狀態。若檔案多次嘗試依然失敗，說明該資源在雲端可能已損壞或受限，建議稍後重試，或嘗試重新上傳、下載到本機處理。

**Q: 匯出的配置 JSON 包含哪些資訊？**  
**A:** JSON 檔案僅包含您在增強大師中設定的查重偏好、黑白名單規則、密碼金庫等本機配置資料，**不包含**您的網盤帳號密碼，可放心用於跨裝置轉移。

**Q：匯入備份會覆蓋我現有的配置或名單嗎？**  
**A：** 不會。腳本已升級為智慧合併邏輯，匯入時會自動將資源管理器、歷史紀錄等清單項目與本機資料去重合併，僅基礎設定項目（如搜圖引擎、Aria2 位址等）會以匯入的檔案為準，確保您的本機累積資料不會遺失。

**Q: 為什麼批次刪除檔案時，部分檔案提示受保護或無法被刪除？**  
**A:** 請檢查這些檔案是否已被記錄在資源管理器中。若您在設定中開啟了「刪除時跳過管理器中記錄資源」，腳本會將匹配的檔案視為受保護項目以防止誤刪。<br>
解決方法： 
1. 在設定中取消勾選該保護規則後再進行刪除；
2. 或點擊工具列/側邊欄的「資源管理器」入口，點擊「立即執行清理」來強制物理刪除這些記錄項目。

**Q：為什麼我執行「貼上」操作後，檔案沒有在清單中顯示？**  
**A：** 請檢查您的網盤剩餘空間是否足以容納這些檔案。PikPak 官方目前對「空間不足」的情況採取**靜默攔截**策略，即在超出限額時不會彈出具體的錯誤提示，而是直接在後台中止操作。若貼上後檔案未出現，通常是因為觸發了容量限制，建議清理空間後重試。

**Q：雲下載彈窗中「自動修復防封鎖污染磁鏈」是什麼功能，建議何時開啟？**  
**A：** 該功能可自動剔除連結中夾雜的漢字、表情、符號等文字干擾，並智慧識別提取特徵碼，將其還原為標準格式。<br>
**建議：該功能預設保持勾選，可自動處理從社群平台獲取的、夾雜大量無關文字或「去頭」的污染磁鏈，已包含 `magnet:?` 開頭的**標準磁鏈**會跳過修復正常下載。

**Q：使用 Aria2/Motrix 或瀏覽器下載網盤資料夾時，層級結構會保留嗎？**  
**A：** **Aria2/Motrix 會保留層級**。腳本採用了目錄層級複製技術，下載完成後您的本機硬碟將完美還原網盤中的樹狀結構，且會自動清洗網盤資料夾名稱中 Windows 不支援的特殊字元（如 `:` `*` `?` 等）並智慧縮短冗餘路徑以確保下載不報錯。  
**瀏覽器下載則不會保留層级**。受限於瀏覽器原生下載協定的局限，資料夾內的所有檔案將被「平鋪」下載到同一個目錄下。**建議：** 若需保留複雜的資料夾結構，請務必優先選擇 Aria2 推送。

---

## 🛡️ 隱私與安全聲明 (Privacy & Security)

* **資料在地化**：本腳本所有核心功能（如批次重新命名、檔案分析、解壓縮等）均透過您的瀏覽器直接與 PikPak 官方 API 進行互動。您的帳號 Token、密碼金庫及檔案資料均**僅儲存在本機瀏覽器中**。
* **零收集**：腳本**不會**收集任何用戶隱私資料，也**絕不會**將您的檔案資訊或帳號憑證上傳至任何第三方伺服器。
* **第三方 API**：僅在使用「線上字幕搜尋」或「以圖搜圖」等擴展功能時，腳本會向相關公共服務介面發送必要的搜尋關鍵字或圖片特徵參數，不涉及您的任何個人身分資訊。

---

## 🤝 致謝 (Acknowledgements)

本項目在 UI 設計語言及部分網頁端 API 呼叫邏輯上，深受[PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager) (by 브랜뉴) 的啟發，特此致敬。

---

## ⚖️ License 聲明

本項目遵循 **CC-BY-NC-SA-4.0 協議**
* 🚫 嚴禁於任何形式的商業用途
* 📢 二次分發必須署名並保持相同協議

---

## 🚀 更新日誌

### V1.2.0
*   **影片時長嗅探引擎重構**：深度加固影片時長嗅探邏輯。
*   **UI 互動優化**：精修部分 UI 元件在不同縮放比例下的視覺表現。
*   **核心 Bug 修復**：修復路徑檢索時高亮失效的 Bug；修復在設定中儲存「極速模式」修改時會導致其他設定項目被阻斷失效的 Bug。

### V1.1.0
*   **Aria2 增強**：支援**保留資料夾路徑結構**，新增投遞丟包提醒及錯誤清單一鍵匯出。
*   **雲下載進化**：支援批次提交與智慧去重，**自動清洗防封鎖污染磁鏈**（支援 Base32 自動解碼）。
*   **重新命名優化**：預覽介面新增**圖示與封面展示**，支援資料夾懸浮大圖預覽。
*   **配置管理**：匯入功能升級為**「智慧合併」**模式，匯入備份時不再覆蓋本機已有的名單和記錄。
*   **體驗提升**：大幅優化極速模式載入速度，修復帳號切換時的 UI 殘留 Bug，提升搜圖成功率。
