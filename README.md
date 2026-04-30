<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/turbo/turbo_zh.gif" alt="封面">
</p>

# 📦 PikPak 增强大师

[![Version](https://img.shields.io/badge/Version-2.2.2-0067C0?style=flat-square)](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js)
[![License](https://img.shields.io/badge/License-CC--BY--NC--SA--4.0-red?style=flat-square)](https://spdx.org/licenses/CC-BY-NC-SA-4.0.html)
[![Platform](https://img.shields.io/badge/Platform-PikPak%20Web-orange?style=flat-square)](https://mypikpak.com/drive/all)

> 面向 PikPak 网页端的桌面级增强套件。  
> 从浏览、搜索、分析、整理到播放、下载与迁移，让云盘管理真正接近本地文件管家的效率与流畅度。

---

## 🌍 支持语言 (Languages)

[简体中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/README.md) | [繁體中文](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(tc).md) | [English](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(en).md) | [한국어](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ko).md) | [日本語](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ja).md) | [Indonesia](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(id).md) | [Bahasa Melayu](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/i18n/README(ms).md)

---

## ✨ 主要功能 (Features)

### ✨ 体验与导航引擎

* **交互重构**：在官方功能基础上，整体界面参照 **Windows 文件资源管理器** 的使用习惯进行重构，操作路径更直观。
* **极速模式**：开启后深度接管网页端逻辑，针对海量文件场景显著缓解卡顿、崩溃与内存压力问题。
* **高级路径栏**：支持滚轮滑动、同级目录下拉切换、路径回显与溯源跳转；全盘搜索与分析套件均已接入统一路径体系。
* **体验增强**：支持星标、类型等多维排序、暗黑皮肤、一键**模糊封面**，并结合 **SWR 静默刷新策略** 提升视图更新体验。
* **后台索引与保护**：主页蓝色呼吸点提示后台目录树同步状态；系统内置并发操作保护，尽量避免脏数据与冲突写入。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/table/table_zh.gif" width="1100" alt="路径">
</p>

> 📌 默认文件夹 **My Pack** 受官方保护，脚本不会对其执行误删风险较高的危险操作。

---

### 📂 批量与空间管理

* **批量重命名**：支持 **正则替换 / 删除**、**剧集流水号**、文本**格式化**、**FC2 规范命名**、**前缀去广告**，以及基于 MIME 的**后缀智能修复**。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/rename/rename_zh.gif" width="550" alt="批量重命名">
</p>

* **文件分析**：整合文件筛选与查重能力，查重支持 **哈希 / 时长 / 名称** 三模态分析。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_scan/file_scan_zh.gif" alt="文件透视">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/file_dup/file_dup_zh.gif" alt="文件查重">
</p>

* **文件夹分析**：整合文件夹筛选与查重能力，查重支持 **名称 / 相似度 / 包含率** 三模态分析。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_scan/folder_scan_zh.gif" alt="文件夹透视">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/folder_dup/folder_dup_zh.gif" alt="文件夹查重">
</p>

* **导出目录**：支持导出当前目录的**目录树**列表。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/tree/tree_zh.png" width="350" alt="导出目录">
</p>

* **智能整理**：支持**彻底删除**（跳过回收站）、一键清理空文件夹、批量解压，并集成**密码自动记忆**与**智能填充**逻辑。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/archive/archive_zh.png" width="250" alt="密码库">
</p>

* **资源管理器**：支持自定义**文件黑名单**一键清理垃圾资源；也可作为**文件白名单**，在批量删除时自动保护命中项。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/manager/manager_zh.gif" width="550" alt="资源管理器">
</p>

> ⚠️ 为避免数据同步冲突，执行分析、整理、批量删除等重操作期间，不建议在其他客户端同时修改同一批文件。

---

### 🌐 传输与分享中心

* **分享管理**：支持设定提取次数上限；次数达标后自动取消分享，使链接失效。
* **极速上传**：支持将本地文件 / 文件夹直接拖拽到网页中上传，优化小文件场景下的中断率与整体传输体验。
* **云下载增强**：支持批量离线链接**自动去重**；内置**磁链智能清洗引擎**，可自动提取 Base32 / Hex 哈希并剔除干扰文本。
* **种子与兜底**：支持解析 **.torrent** 种子文件；对部分受限链接提供**网页快照保存方案**作为兜底。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/torrent/torrent_zh.png" height="320" alt="磁链">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/share/share_zh.gif" height="320" alt="分享">
</p>

> ⚠️ 分享提取次数上限的自动拦截，仅在网页保持开启且设备未休眠时生效。

---

### 🎬 沉浸式媒体增强

* **播放引擎**：支持 **0.5x - 3.0x 倍速**、旋转翻转、强制比例、自动跳过片头片尾、**连播 / 循环** 模式与进度条**缩略图预览**。
* **兼容回退**：内置看门狗与兼容逻辑，遇到黑屏、清晰度不可用或编码兼容异常时，可自动回退到可播放画质。
* **字幕系统**：支持**云端同名字幕加载**、**本地字幕文件导入**与**在线字幕搜索**；支持字幕轴毫秒级偏移、显示位置切换、大小调整与本地文本拖拽挂载。
* **视觉辅助**：支持图片或视频当前帧**以图搜图**，便于快速反查封面、演员、番剧或素材来源。
* **媒体模式**：可在设置中启用媒体模式，使剧集 / 漫画类目录优先按名称 **A-Z** 顺序排列，提升浏览连续性。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/video/video_zh.gif" alt="视频">
</p>

---

### ⚡ 下载与分发

* **外部直连**：支持一键获取视频流直链，或唤起 **PotPlayer** 进行外部播放。
* **RPC 分发**：支持通过 RPC 协议将文件一键推送至 **Aria2 / Motrix** 等下载节点。
* **目录结构还原**：推送整个文件夹时可自动恢复云盘中的**树状目录结构**，避免下载后目录被打平。
* **分发增强**：支持长连接状态监控、失败后自动导出错误清单，并支持**文件夹下载过滤**。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/filter/filter_zh.png" height="290" alt="下载过滤">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/aria2/aria2_zh.gif" height="290" alt="aria2">
</p>

---

### ⚙️ 配置与数据管理

* **配置备份**：支持将偏好设置、管理规则、密码金库等导出为带数字指纹的 JSON 备份文件。
* **智能导入**：导入时支持**智能合并去重**，避免简单覆盖造成历史规则丢失。
* **数据清理**：支持按需清除**全盘索引**、**偏好设置**、**管理规则**、**密码金库**与**缓存**，释放本地空间并增强隐私安全。
* **密码金库**：内置常用解压密码集中管理，供批量解压自动调用与快速填充。
* **数据迁移**：支持将选中项目加密打包，并在另一账号登录后自动识别接管，实现**跨账号无缝转存**。

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/cache/cache_zh.png" width="350" alt="缓存">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/digbug82/PikPak_Enhancement_Master/main/img/migrate/migrate_zh.gif" alt="数据迁移">
</p>

> 📌 全盘索引会在网页关闭后清空；偏好设置、管理规则、密码金库等数据则持久化保存在本地脚本环境中。

---

## 💻 兼容性说明 (Compatibility)

* **推荐浏览器**：Chrome / Edge（最新版）
* **推荐脚本管理器**：Tampermonkey / Violentmonkey
* **适用平台**：PikPak Web
* *注：Safari / Firefox 及其他脚本管理器暂未进行完整深度测试，建议使用上述推荐环境以获得最佳体验。*

---

## 📥 安装指南 (Installation)

1. **安装脚本管理器**：先安装 [Tampermonkey](https://www.tampermonkey.net/) 或兼容脚本管理器。
2. **安装脚本**：点击 **[立即安装](https://github.com/digbug82/PikPak_Enhancement_Master/raw/main/PikPak_Enhancement_Master.user.js)**。
3. **打开 PikPak 网页端**：访问 [PikPak](https://mypikpak.com/drive) 并登录账号。
4. **启动增强大师**：
   * 普通模式下：登录后点击侧栏浮动的蓝色 **PikPak Logo 球** 进入。
   * 极速模式下：登录后脚本可自动开启，接管网页端。

---

## ❓ 常见问题解答 (FAQ)

**Q：为什么安装了脚本却没有显示蓝色的悬浮球？**  
**A：** 请先确认您已登录 PikPak 网页端。若已登录仍未显示，请尝试刷新网页（F5）；同时检查是否被广告拦截插件（如 AdGuard、uBlock Origin）误拦截。可临时关闭拦截插件，或将 PikPak 网页加入白名单后再试。

**Q：什么是“极速模式（Turbo Mode）”，为什么建议开启？**  
**A：** 开启后，脚本会深度接管原生网页端逻辑，并全屏覆盖主要界面。该模式会主动屏蔽原网页中高内存占用的同步流程，因此能显著改善海量文件场景下的卡顿、崩溃与加载迟缓问题。  
**注意：** 开启极速模式后，最小化与关闭按钮会自动隐藏；如需返回原网页，请前往设置中取消勾选。  
**建议：** 若您的网盘文件较多，强烈建议开启，以获得更流畅、更稳定的使用体验。

**Q：为什么首页的 My Pack 会显示“默认”标签，且无法添加星标、复制、移动、重命名或删除？**  
**A：** 这是 PikPak 官方对默认目录的安全保护机制。脚本遵循并保留了这层保护逻辑，但在此基础上解除了默认文件夹 **My Pack** 的分享限制。

**Q：脚本中的“文件查重”与“文件夹查重”有什么本质区别？实际使用时该如何选择？**  
**A：**  
**文件查重：** 面向“单一文件”级别，采用 **哈希精准匹配、视频时长相似度、名称相似度** 三模态算法，适合清理网盘中零散分布的重复文件，例如重复保存的单集视频、单张图片、独立压缩包等。  

**文件夹查重：** 面向“文件夹整体结构”级别，采用 **名称匹配、内部文件重合度（相似度匹配）、子集冗余（包含率匹配）** 三模态算法。它更适合清理重复保存的整部剧集、完整图包、多层级资料目录等。即使两个文件夹名称不同，只要内部文件高度相似，或存在明显的包含关系，也能被识别出来。

> **建议：**  
> 文件查重中的“精准查重”属于哈希匹配，结果最可靠，可较放心地一键勾选删除。  
> 文件查重中的“时长匹配”“名称匹配”，以及文件夹查重的三种模式，本质都属于相似匹配，建议在批量勾选前先人工复核，以免误删。

**Q：为什么文件查重查出来的重复文件越来越多？是不是全盘索引丢包了？**  
**A：** 不是索引丢包，也不是数据错误。查重结果中“精准匹配”部分的数量通常是稳定的。之所以后续会查出越来越多的重复文件，主要是因为基于**视频时长**的相似匹配在逐步变得更完整。  

由于 PikPak 的部分原始接口并不会直接返回视频时长，很多重复视频在初次分析时会因为缺少时长信息而被暂时跳过。为了解决这个问题，脚本内置了后台异步嗅探机制，会自动读取视频元数据，补全精确时长，并持久化保存在浏览器本地。随着您使用时间增加，本地时长数据库会越来越完整，因此查重引擎能识别出更多“文件名不同、但内容时长一致”的隐藏重复资源，所以结果会显得越来越多、也越来越准确。

**Q：为什么“以图搜图”有时无法直接上传图片，而是提示我粘贴？**  
**A：** 这是受浏览器安全策略限制所致，主要与 **CORS 跨域限制** 有关。当脚本无法直接将网盘中的图片发送到目标搜图服务时，会自动将当前画面截图复制到您的剪贴板。此时您只需在弹出的搜图页面按下 `Ctrl + V`，即可完成图片提交。

**Q：为什么使用脚本播放视频时，只有声音却没有画面？**  
**A：** 这通常是因为该视频属于 **m3u8 多音轨 / 多轨道流媒体**。在云端转码后，声音与画面轨道可能发生分离，而当前网页播放器并不支持这类特殊视频流的完整在线解析。  
遇到这种情况，建议点击右下角的 **“外部播放”** 按钮，直接调用本地的 PotPlayer 等专业播放器进行串流播放。

**Q：清晰度菜单中的“原画（高速）”与普通“原画”有什么区别？**  
**A：** 两者在画质上通常几乎没有差别，主要区别在于底层的传输链路与解码策略不同。  
其中，“**原画（高速）**”使用的是官方面向流媒体优化过的链路，通常在调用 PotPlayer 等外部播放器时，加载速度更快、拖动更顺滑、响应也更稳定。  
**建议：** 无论是网页播放还是外部串流，通常都优先选择“原画（高速）”。

**Q：为什么我在手机 App 或官方网页版刚进行的操作（如上传、删除、移动），在脚本的查重或分析列表中没有实时同步？**  
**A：** 这是脚本为保证搜索、分析与筛选速度而采用的设计策略。为了避免每次操作都重新拉取数万个文件信息，脚本大量使用本地内存快照与索引缓存。  
如果您刚在手机 App 或官方网页端进行了较多修改，建议刷新网页，以重新获取全盘索引。  
**建议：** 在脚本执行分析、查重、整理等操作期间，尽量避免多端同时修改同一批数据。

**Q：批量解压时，可以一次性给多个文件设置不同的密码吗？**  
**A：** 可以。脚本的批量解压采用的是**密码金库智能匹配**机制：只要您事先把已知密码保存进密码金库，脚本在处理每一个压缩包时，都会自动尝试金库中的所有密码；一旦匹配成功，就会自动开始解压，无需手动逐个输入。

**Q：批量解压时提示“系统繁忙 / 等待重试”，是脚本出 Bug 了吗？**  
**A：** 不是。这通常是因为 PikPak 云端服务器触发了并发频率限制，属于官方接口当前繁忙，而不是脚本本身异常。  
如果某个文件多次重试后仍然失败，通常说明该资源在云端可能已经损坏、受限，或当前服务器状态不佳。建议稍后重试，或将文件下载到本地后再处理。

**Q：导出的配置 JSON 包含哪些信息？**  
**A：** 导出的 JSON 文件仅包含您在增强大师中的本地配置数据，例如查重偏好、黑白名单规则、密码金库、部分历史记录与功能设置等。  
**不会包含**您的 PikPak 账号密码，因此可以放心用于跨设备备份与迁移。

**Q：导入备份会覆盖我现有的配置或名单吗？**  
**A：** 一般不会。脚本已升级为**智能合并**逻辑：导入时会优先对资源管理器、历史记录等列表型数据进行去重合并，而不是直接覆盖本地内容。  
仅少数基础设置项（如搜图引擎、Aria2 地址等）会以导入文件中的值为准，因此您长期积累的本地名单和记录通常不会丢失。

**Q：为什么批量删除文件时，部分文件提示受保护或无法被删除？**  
**A：** 请先检查这些文件是否已被记录在**资源管理器**中。若您在设置里开启了“删除时跳过管理器中记录资源”，脚本会将命中的文件视为受保护项目，以避免误删。  
**解决方法：**  
1. 前往设置中取消勾选该保护规则后，再重新执行删除；  
2. 或点击工具栏 / 侧边栏中的 **“资源管理器”** 入口，选择 **“立即运行清理”**，对这些记录项执行强制物理清理。

**Q：为什么我执行“粘贴”操作后，文件没有在列表中显示？**  
**A：** 请先检查您的网盘剩余空间是否足够。PikPak 官方当前对“空间不足”通常采用**静默拦截**策略，也就是在容量超限时，不一定会弹出明确提示，而是直接在后台中止操作。  
因此，如果执行粘贴后文件没有出现，最常见的原因就是触发了容量限制。建议先清理空间，再重新尝试。

**Q：云下载弹窗中的“自动修复防屏蔽磁链”是什么功能？建议什么时候开启？**  
**A：** 该功能会自动清理磁链中夹杂的汉字、表情、符号等无关干扰内容，并智能提取特征码，将链接还原为标准格式。  
**建议：** 默认保持开启。它尤其适合处理来自社交平台、论坛或聊天软件中那些被插入无关文字、带“去头”处理、或被刻意污染过的磁链。  
对于已经是标准格式、并且以 `magnet:?` 开头的正常磁链，脚本会自动跳过修复，不影响正常下载。

**Q：什么是“文件夹下载过滤”？它会影响哪些下载方式？**  
**A：** 该功能用于在下载整个文件夹时，**按扩展名或名称规则自动排除匹配文件**。例如，您可以排除 `.txt`、`.jpg`，或排除名称中包含某些关键词的文件。它不仅会作用于普通文件夹下载，也会作用于 **Aria2 / Motrix 推送文件夹** 场景。

**Q：使用 Aria2 / Motrix 或浏览器下载网盘文件夹时，层级结构会保留吗？**  
**A：**  
**Aria2 / Motrix：会保留层级。**  
脚本会在推送过程中自动克隆并还原云盘中的目录树结构。下载完成后，本地磁盘中的文件夹层级会尽可能与网盘保持一致。同时，脚本还会自动清洗 Windows 不支持的特殊字符（如 `:` `*` `?` 等），并尽量缩短过长路径，以减少下载报错。  

**浏览器原生下载：不会保留层级。**  
受浏览器下载协议本身限制，文件夹内的文件通常会被“平铺”到同一个目录中。  

**建议：** 如果您希望完整保留复杂目录结构，请优先使用 **Aria2 / Motrix 推送下载**。

**Q：什么是“多账号数据迁移”？具体该如何操作？**  
**A：** 该功能可将当前账号中的文件或文件夹，快速、无缝地转存到您的另一个 PikPak 账号中。  
**操作步骤如下：**  
1. 在当前账号中选中需要迁移的文件或文件夹；  
2. 点击底部的 **“数据迁移”** 按钮；  
3. 脚本会自动将数据加密打包，并自动退出当前账号；  
4. 随后，您只需正常登录目标账号；  
5. 登录成功后，脚本会自动检测本地缓存中的迁移包，并弹窗提示您一键接收。

---

## 🛡️ 隐私与安全声明 (Privacy & Security)

* **本地优先**：本脚本所有核心能力均通过浏览器直接与 PikPak 官方 API 交互，您的账号 Token、密码金库及大多数本地配置数据默认保存在本地浏览器环境中。
* **零收集**：脚本**不会主动收集**用户隐私数据，也**绝不会**将您的文件信息或账号凭证上传至任何第三方服务器。
* **第三方接口**：仅在使用“在线字幕搜索”或“以图搜图”等扩展功能时，脚本才会向相关公共服务发送必要的搜索关键词或图片特征参数，不涉及您的个人身份信息。

---

## 🚀 更新日志

### V2.2.3 
* 修复上传失败。
* UI稳定性优化。

### V2.2.2 
* 修复快捷键层级冲突问题。

### V2.2.1 
* 修复Aria2 / Motrix下载问题。

### V2.2.0
* 新增**剪切板磁链监听**与**磁链预览**功能。 
* 增强 UI 稳定性。 

### V2.1.1 
* 修复 Aria2 / Motrix 在仅支持 ws:// / wss:// RPC 或非标准端口反向代理环境下连接失败的问题。

### V2.1.0
* 支持**监听侧键**，实现目录层级跳转。
* 稳定性优化。

### V2.0.0
* 支持语言扩展为 **简体中文 / 繁體中文 / English / 한국어 / 日本語 / Indonesia / Bahasa Melayu**。
* UI 与架构升级，以图搜图按钮外置，新增**网格视图**。

### V1.3.2
* 本地上传逻辑加固，增加中国大陆 IP 直连。
* 文件查重的时长相似阈值调整，优化检测精度。

### V1.3.1
* 进一步优化登录闪烁问题。

### V1.3.0
* 新增**多账号数据迁移**功能，支持一键将海量文件加密打包并无缝转存至您的其他账号。
* 新增**彻底删除**机制，删除时可一键跳过回收站，瞬间释放网盘空间。

### V1.2.0
* 视频时长嗅探引擎重构。

### V1.1.0
* Aria2 支持**保留文件夹路径结构**，新增投递丢包提醒及错误清单一键导出。
* 云下载支持批量提交与智能去重，**自动清洗防屏蔽污染磁链**（支持 Base32 自动解码）。
* 批量重命名预览界面新增**图标与封面展示**，支持文件夹悬浮大图预览。
* 导入功能升级为**“智能合并”**模式，导入备份时不再覆盖本地已有的名单和记录。

---

## 🤝 致谢 (Acknowledgements)

本项目在 UI 设计语言及部分网页端 API 调用逻辑上，深受 [PikPak File Manager v1.2.0](https://github.com/poihoii/PikPak_FileManager) (by 브랜뉴) 的启发，特此致敬。

---

## ⚖️ License 声明

本项目遵循 **CC-BY-NC-SA-4.0** 协议：

* 🚫 禁止用于任何商业用途
* 🧪 仅供个人学习、研究与技术交流使用
* 📢 二次分发必须保留署名并沿用相同协议
