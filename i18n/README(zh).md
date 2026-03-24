![封面](https://github.com/digbug82/PikPak_Enhancement_Master/blob/bc0ed7099bc945c7b3a07acf2cc6a723e2fdb2f4/img/cover_zh.png)

# 📦 PikPak 增强大师

> 🚀 适用于 PikPak 网页端的云盘管理器，让 Web 端也拥有媲美本地文件系统的操作能力

---

## 🌍 支持语言 (Languages)

[简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(zh).md) | [繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(tc).md) | [English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/README.md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/3ec52a7029ee311abefeb7c7e0375a4c1f2787c7/i18n/README(ja).md) 

---

## ✨ 主要功能 (Features)

### ✨ 体验与导航引擎

* **交互重构**：界面基于类 Windows 文件资源管理器设计，全面提升操作体验

* **极速模式**：替换网页端逻辑，屏蔽原生同步（推荐在设置中开启）

* **高级路径栏**：支持滚轮滑动、下拉切换、路径回显与溯源跳转

* **体验增强**：

  * 夜间模式
  * 视频时长显示
  * 一键模糊封面（隐私保护）
  * 支持星标 & 文件类型排序

* **后台自动索引**：主页图标蓝色呼吸点提示目录同步状态

---

### 📂 批量与空间管理

* **批量重命名**

  * 正则替换 / 删除
  * 剧集流水号生成
  * 文本格式化（大小写 / 全半角）
  * 番号 / FC2 规范命名
  * 前缀去广告
  * MIME 后缀修复

* **分析套件**

  * 文件分析（类型筛选 + 查重：哈希 / 时长 / 名称）
  * 文件夹分析（大小筛选 + 查重：名称 / 相似度 / 包含率）
  * 支持导出目录树

* **智能整理**

  * 清理空文件夹
  * 批量解压（自动填充密码 + 自动删除已解压项）

* **资源管理器**

  * 黑名单：快速清理垃圾文件
  * 白名单：批量删除保护
  * 支持在设置中自定义规则

> ⚠️ 操作期间请避免多端同时修改数据

---

### 🌐 传输与分享中心

* **分享管理**：支持提取次数限制，自动取消分享

* **离线下载**：批量离线任务 + 链接导出

* **极速上传**

  * 支持超大文件
  * 大幅降低小文件上传失败率

> ⚠️ 提取次数限制依赖前端逻辑，仅在网页保持开启且设备未休眠时生效

---

### 🎬 沉浸式媒体增强

* **播放引擎**

  * 0.5x – 3.0x 倍速
  * 旋转 / 镜像 / 比例调整
  * 自动跳过片头片尾
  * 连播 / 循环模式
  * 进度条缩略图预览

* **字幕系统**

  * 云端 / 本地 / 在线搜索
  * 字幕个性化设置
  * 拖拽加载字幕

* **视觉辅助**

  * 以图搜图（图片 / 视频帧）
  * 媒体模式（剧集 / 漫画自动 A-Z 排序）

---

### ⚙️ 配置与数据管理

* **配置备份**

  * JSON 导出
  * 支持跨设备迁移

* **数据清理**

  * 全盘索引 / 偏好设置 / 管理规则 / 密码金库 / 历史数据

> 📌 全盘索引为临时数据，其余为持久化数据

---

### ⚡ 下载与分发

* **外部直连**

  * 支持 RPC 推送至 Aria2 / Motrix

* **下载过滤**

  * 支持按后缀 / 关键词过滤文件

---

## 📥 安装教程 (Installation)

### 1️⃣ 安装用户脚本管理器

* 👉 [Tampermonkey](https://greasyfork.org/ko/scripts/556685)

### 2️⃣ 安装脚本

* 点击安装 [`PikPak_Enhancement_Master.user.js`](https://github.com/digbug82/PikPak_Enhancement_Master/blob/cffc9e5d9a72c3ae1063305572b62be9a607a03d/PikPak_Enhancement_Master.user.js)文件
* 或手动导入脚本至插件

### 3️⃣ 打开 [PikPak 网页](https://mypikpak.com/drive)

### 4️⃣ 启动脚本

刷新页面后，点击**侧栏悬浮球**即可开启 ✅

---

## 🙏 致谢 (Acknowledgements)

* 项目灵感来源：
  👉 [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager)

* 原作者：브랜뉴

---

## ⚖️ License 声明

本项目遵循 **CC-BY-NC-SA-4.0 协议**

* 🚫 禁止用于任何商业用途
* 📢 二次分发必须署名并保持相同协议
