![封面](https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/496a620ba7266c63e6bcb1477010b2127f06ded6/img/cover_tc.png)

# 📦 PikPak 增強大師

> 整合批次解壓縮、智慧查重、多模態批次重命名、Aria2 推送、垃圾檔案清理、匯出目錄、媒體播放引擎增強等功能的桌面級檔案管理器。

---

## 🌍 支援語言 (Languages)

[繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(tc).md) | [简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(zh).md) | [English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/README.md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(ja).md) 

---

## ✨ 主要功能 (Features)

### ✨ 體驗與導航引擎

* **介面重構**：介面基於類 Windows 檔案總管設計，全面提升操作體驗

* **極速模式**：替換網頁端邏輯，屏蔽原生同步（建議在設定中開啟）

* **高級路徑列**：支援滾輪滑動、下拉切換、路徑回顯與溯源跳轉

* **體驗增強**：

  * 夜間模式
  * 影片時長顯示
  * 一鍵模糊封面（隱私保護）
  * 支援星標 & 檔案類型排序

* **後台自動索引**：首頁圖示藍色呼吸點提示目錄同步狀態

---

### 📂 批量與空間管理

* **批量重命名**

  * 正則替換 / 刪除
  * 劇集流水號生成
  * 文字格式化（大小寫 / 全半角）
  * 編號 / FC2 標準命名
  * 前綴去廣告
  * MIME 副檔名修復

* **分析套件**

  * 檔案分析（類型篩選 + 查重：哈希 / 時長 / 名稱）
  * 資料夾分析（大小篩選 + 查重：名稱 / 相似度 / 包含率）
  * 支援導出目錄樹

* **智能整理**

  * 清理空資料夾
  * 批量解壓（自動填充密碼 + 自動刪除已解壓項）

* **資源管理器**

  * 黑名單：快速清理垃圾檔案
  * 白名單：批量刪除保護
  * 支援在設定中自定義規則

> ⚠️ 操作期間請避免多端同時修改資料

---

### 🌐 傳輸與分享中心

* **分享管理**：支援提取次數限制，自動取消分享

* **離線下載**：批量離線任務 + 連結導出

* **極速上傳**

  * 支援超大檔案
  * 大幅降低小檔案上傳失敗率

> ⚠️ 提取次數限制依賴前端邏輯，僅在網頁保持開啟且裝置未休眠時生效

---

### 🎬 沉浸式媒體增強

* **播放引擎**

  * 0.5x – 3.0x 倍速
  * 旋轉 / 鏡像 / 比例調整
  * 自動跳過片頭片尾
  * 連播 / 循環模式
  * 進度條縮略圖預覽

* **字幕系統**

  * 雲端 / 本地 / 在線搜尋
  * 字幕個性化設定
  * 拖拽載入字幕

* **視覺輔助**

  * 以圖搜圖（圖片 / 影片幀）
  * 媒體模式（劇集 / 漫畫自動 A-Z 排序）

---

### ⚙️ 設定與資料管理

* **設定備份**

  * JSON 匯出
  * 支援跨裝置遷移

* **資料清理**

  * 全盤索引 / 偏好設定 / 管理規則 / 密碼金庫 / 歷史資料

> 📌 全盤索引為臨時資料，其餘為持久化資料

---

### ⚡ 下載與分發

* **外部直連**

  * 支援 RPC 推送至 Aria2 / Motrix

* **下載過濾**

  * 支援按副檔名 / 關鍵字篩選檔案

---

## 📥 安裝教學 (Installation)

### 1️⃣ 安裝使用者腳本管理器

* 👉 [Tampermonkey](https://greasyfork.org/ko/scripts/556685)

### 2️⃣ 安裝腳本

* 點擊安裝 [`PikPak_Enhancement_Master.user.js`](https://github.com/digbug82/PikPak_Enhancement_Master/blob/cffc9e5d9a72c3ae1063305572b62be9a607a03d/PikPak_Enhancement_Master.user.js)檔案
* 或手動匯入腳本至擴充套件

### 3️⃣ 打開 [PikPak 網頁](https://mypikpak.com/drive)

### 4️⃣ 啟動腳本

刷新頁面後，點擊**側欄懸浮球**即可開啟 ✅

---

## 🙏 致謝 (Acknowledgements)

* 專案靈感來源：
  👉 [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager)

* 原作者：브랜뉴

---

## ⚖️ License 聲明

本專案遵循 **CC-BY-NC-SA-4.0 協議**

* 🚫 禁止用於任何商業用途
* 📢 二次發佈必須署名並保持相同協議
