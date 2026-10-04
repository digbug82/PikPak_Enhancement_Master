## English

# PikPak Magnet Companion

This is a Manifest V3 companion extension that does not require a separate PikPak login. It works with the **PikPak Enhancement Master userscript** and does not access PikPak APIs or store account information. It detects magnet links in selected text on webpages and forwards them to an open PikPak page running the main userscript, while magnet parsing, preview, and saving are performed by the logged-in main userscript.

## Compatibility

This extension supports desktop Chrome and Microsoft Edge only. Android, iPhone, and iPad mobile browsers are not supported.

## Installation

1. Open the Chrome or Edge extensions page.
2. Enable Developer mode.
3. Choose “Load unpacked”.
4. Select the `PikPak_Magnet_Companion` directory.
5. Make sure [PikPak_Enhancement_Master.user.js](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js) is installed and running on the PikPak page.

## Usage

1. Open a PikPak page first.
2. Select a magnet link or BTIH text on any regular webpage.
3. In the default confirmation mode, click “Send to PikPak” in the prompt. You can also use the context-menu item “Send magnet to PikPak”.
4. The main userscript opens the magnet preview on the PikPak page.
5. Select the files you want and confirm saving.

## Settings

Click the extension icon to open the settings page, or open “Extension options” from the extensions management page. Settings are stored in the companion extension's local storage.

- Confirm before sending (default): selecting a magnet shows a confirmation button and does not switch tabs immediately.
- Send automatically: selecting a magnet sends it and switches to PikPak immediately.
- Disable automatic detection: selected text is ignored; the context-menu action remains available.
- The context menu and automatic switching to the PikPak tab can be toggled separately.

## Troubleshooting

- Click Reload for the extension on the extensions page, then refresh both the PikPak page and the source webpage.
- Keep at least one supported drive page open (`mypikpak.com/drive/*`, `drive.mypikpak.com/*`, `mypikpak.net/drive/*`, or `pikpak.me/drive/*`), and make sure the main userscript is running.
- The companion sends only after it receives the main userscript's ready handshake. If it reports that no main script was found, refresh the drive page and try again.
- The website access permission only controls which pages the extension can inject into. It does not indicate that a magnet message has been received or that the main userscript is connected. Browser internal pages such as `edge://` and `chrome://` cannot be injected.
- The extension can try to inject its content script into an already-open PikPak tab. If the browser still blocks this, refresh that tab manually.

## 简体中文

# PikPak 磁链伴生

这是一个无需单独登录 PikPak 账号的 MV3 伴生扩展，专门配合 **PikPak 增强大师主用户脚本** 使用。扩展本身不访问 PikPak API，也不保存账号信息；它只在任意网页检测选中文本中的磁链，并将磁链转发到已打开且运行主脚本的 PikPak 页面。磁链解析、预览和保存仍由已登录的主脚本完成。

## 兼容性

本扩展仅支持桌面版 Chrome/Edge，不支持 Android、iPhone 或 iPad 移动端浏览器。

## 安装

1. 打开 Chrome/Edge 的扩展管理页面。
2. 开启“开发者模式”。
3. 选择“加载已解压的扩展程序”。
4. 选择本目录 `PikPak_Magnet_Companion`。
5. 确保 [PikPak_Enhancement_Master.user.js](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js) 已安装并在 PikPak 页面运行。

## 使用

1. 先打开一个 PikPak 页面。
2. 在任意普通网页中选中磁链或 BTIH。
3. 默认会显示确认提示；点击“发送到 PikPak”后才会跳转。也可以右键选择“发送磁链到 PikPak”。
4. 主脚本会在 PikPak 页面中打开磁链预览窗口。
5. 在预览窗口中选择文件并确认保存。

## 设置

点击扩展图标即可打开设置页，也可以在扩展管理页进入“扩展选项”。设置保存在伴生扩展的本地存储中：

- 确认后发送（默认）：选中后显示确认按钮，不会立即跳转。
- 自动发送：选中后立即发送并切换到 PikPak。
- 关闭自动识别：不处理普通选中，仅保留右键菜单。
- 可单独开关右键菜单，以及发送后是否自动切换到 PikPak。

## 无反应时检查

- 在扩展管理页点击一次“重新加载”，然后刷新 PikPak 页面和来源网页。
- 必须至少打开一个受支持的网盘页面（`mypikpak.com/drive/*`、`drive.mypikpak.com/*`、`mypikpak.net/drive/*` 或 `pikpak.me/drive/*`），并确保主用户脚本正在运行。
- 扩展只有在收到主脚本的就绪握手后才会发送磁链；如果提示未检测到主脚本，请刷新网盘页面后重试。
- 扩展管理页面中的网站访问权限只表示扩展允许在哪些网站注入内容脚本，不代表已经收到磁链或连接到主脚本。浏览器内置页面（例如 `edge://`、`chrome://`）无法注入脚本。
- 本扩展会尝试自动向已打开但尚未注入的 PikPak 标签页补注入内容脚本；如果浏览器仍拦截，请手动刷新该标签页。

## 繁體中文

# PikPak 磁鏈伴生

這是一個無需單獨登入 PikPak 帳號的 MV3 伴生擴充功能，專門配合 **PikPak 增強大師主使用者腳本** 使用。擴充功能本身不存取 PikPak API，也不儲存帳號資訊；它只會在任意網頁偵測選取文字中的磁鏈，並將磁鏈轉發到已開啟且正在執行主腳本的 PikPak 頁面。磁鏈解析、預覽和儲存仍由已登入的主腳本完成。

## 相容性

本擴充功能僅支援桌面版 Chrome/Edge，不支援 Android、iPhone 或 iPad 行動版瀏覽器。

## 安裝

1. 開啟 Chrome/Edge 的擴充功能管理頁面。
2. 開啟「開發人員模式」。
3. 選擇「載入未封裝項目」或「載入解壓縮的擴充功能」。
4. 選擇本目錄 `PikPak_Magnet_Companion`。
5. 確認 [PikPak_Enhancement_Master.user.js](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js) 已安裝，並在 PikPak 頁面中執行。

## 使用方式

1. 先開啟 PikPak 頁面。
2. 在任意一般網頁選取磁鏈或 BTIH 文字。
3. 預設會顯示確認提示；點擊「傳送到 PikPak」後才會跳轉，也可以使用右鍵選單中的「傳送磁鏈到 PikPak」。
4. 主腳本會在 PikPak 頁面開啟磁鏈預覽視窗。
5. 選擇需要的檔案並確認儲存。

## 設定

點擊擴充功能圖示即可開啟設定頁，也可以從擴充功能管理頁進入「擴充功能選項」。設定會儲存在伴生擴充功能的本機儲存空間中。

- 確認後傳送（預設）：選取磁鏈後顯示確認按鈕，不會立即跳轉。
- 自動傳送：選取磁鏈後立即傳送並切換到 PikPak。
- 關閉自動辨識：不處理一般選取文字，只保留右鍵選單。
- 可分別控制右鍵選單，以及傳送後是否自動切換到 PikPak。

## 無反應時檢查

- 在擴充功能管理頁點擊一次「重新載入」，再重新整理 PikPak 頁面和來源網頁。
- 必須至少開啟一個支援的網盤頁面（`mypikpak.com/drive/*`、`drive.mypikpak.com/*`、`mypikpak.net/drive/*` 或 `pikpak.me/drive/*`），並確認主使用者腳本正在執行。
- 擴充功能只有收到主腳本的就緒握手後才會傳送磁鏈；若提示找不到主腳本，請重新整理網盤頁面後重試。
- 擴充功能管理頁中的網站存取權限只表示擴充功能可以在哪些頁面注入內容腳本，不代表已收到磁鏈或已連線到主腳本。瀏覽器內建頁面（例如 `edge://`、`chrome://`）無法注入腳本。

## 日本語

# PikPak Magnet Companion

これは PikPak アカウントへの個別ログインを必要としない Manifest V3 コンパニオン拡張機能です。**PikPak Enhancement Master ユーザースクリプト**と連携して動作し、PikPak API へのアクセスやアカウント情報の保存は行いません。任意のウェブページで選択されたマグネットリンクを、メインスクリプトが動作している PikPak ページへ転送します。リンクの解析、プレビュー、保存はログイン済みのメインスクリプトが行います。

## 対応環境

本拡張機能はデスクトップ版 Chrome/Edge のみ対応しており、Android、iPhone、iPad のモバイルブラウザーには対応していません。

## インストール

1. Chrome/Edge の拡張機能管理ページを開きます。
2. デベロッパーモードを有効にします。
3. 「パッケージ化されていない拡張機能を読み込む」を選択します。
4. `PikPak_Magnet_Companion` フォルダーを選択します。
5. [PikPak_Enhancement_Master.user.js](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js) をインストールし、PikPak ページで実行されていることを確認します。

## 使い方

1. 先に PikPak ページを開きます。
2. 通常のウェブページでマグネットリンクまたは BTIH 文字列を選択します。
3. デフォルトでは確認ボタンが表示されます。「PikPak に送信」をクリックしてから移動します。右クリックメニューから送信することもできます。
4. メインスクリプトが PikPak ページでマグネットプレビューを開きます。
5. 保存するファイルを選択して確定します。

## 設定

拡張機能アイコンをクリックして設定を開くか、拡張機能管理ページの「拡張機能のオプション」を開きます。

- 送信前に確認（デフォルト）：選択後に確認ボタンを表示します。
- 自動送信：選択後すぐに送信して PikPak に切り替えます。
- 自動検出を無効化：選択文字列を処理せず、右クリックメニューだけを残します。
- 右クリックメニューと送信後の自動切り替えは個別に変更できます。

## 反応しない場合

- 拡張機能管理ページで「再読み込み」をクリックし、PikPak ページと元のウェブページを再読み込みします。
- 対応するドライブページ（`mypikpak.com/drive/*`、`drive.mypikpak.com/*`、`mypikpak.net/drive/*`、`pikpak.me/drive/*`）を開き、メインスクリプトが実行されていることを確認します。
- 拡張機能はメインスクリプトの準備完了ハンドシェイクを受信してから送信します。検出されない場合はドライブページを再読み込みしてください。
- ウェブサイトへのアクセス権限は注入可能なページを制御するだけで、リンクの受信やメインスクリプトへの接続を示すものではありません。`edge://` や `chrome://` などの内部ページには注入できません。

## 한국어

# PikPak Magnet Companion

이 확장 프로그램은 별도의 PikPak 계정 로그인이 필요 없는 Manifest V3 동반 확장 프로그램입니다. **PikPak Enhancement Master 사용자 스크립트**와 함께 작동하며 PikPak API에 접근하거나 계정 정보를 저장하지 않습니다. 임의의 웹페이지에서 선택한 마그넷 링크를 메인 스크립트가 실행 중인 PikPak 페이지로 전달합니다. 링크 분석, 미리보기 및 저장은 로그인된 메인 스크립트가 수행합니다.

## 호환성

이 확장 프로그램은 데스크톱 Chrome 및 Microsoft Edge만 지원하며 Android, iPhone, iPad 모바일 브라우저는 지원하지 않습니다.

## 설치

1. Chrome/Edge 확장 프로그램 관리 페이지를 엽니다.
2. 개발자 모드를 켭니다.
3. “압축해제된 확장 프로그램을 로드”를 선택합니다.
4. `PikPak_Magnet_Companion` 폴더를 선택합니다.
5. [PikPak_Enhancement_Master.user.js](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js)를 설치하고 PikPak 페이지에서 실행 중인지 확인합니다.

## 사용 방법

1. 먼저 PikPak 페이지를 엽니다.
2. 일반 웹페이지에서 마그넷 링크 또는 BTIH 텍스트를 선택합니다.
3. 기본적으로 확인 버튼이 표시됩니다. “PikPak으로 보내기”를 클릭한 후 이동합니다. 오른쪽 클릭 메뉴로 보낼 수도 있습니다.
4. 메인 스크립트가 PikPak 페이지에서 마그넷 미리보기 창을 엽니다.
5. 저장할 파일을 선택하고 확인합니다.

## 설정

확장 프로그램 아이콘을 클릭하거나 확장 프로그램 관리 페이지의 확장 프로그램 옵션을 엽니다.

- 전송 전 확인(기본값): 선택 후 확인 버튼을 표시합니다.
- 자동 전송: 선택 즉시 전송하고 PikPak으로 전환합니다.
- 자동 감지 끄기: 선택 텍스트를 처리하지 않고 오른쪽 클릭 메뉴만 유지합니다.
- 오른쪽 클릭 메뉴와 전송 후 자동 전환은 각각 설정할 수 있습니다.

## 작동하지 않을 때

- 확장 프로그램 관리 페이지에서 다시 로드를 클릭한 뒤 PikPak 페이지와 원본 웹페이지를 새로 고칩니다.
- 지원되는 드라이브 페이지를 하나 이상 열고 메인 사용자 스크립트가 실행 중인지 확인합니다.
- 확장 프로그램은 메인 스크립트의 준비 완료 핸드셰이크를 받은 후에만 전송합니다. 감지되지 않으면 드라이브 페이지를 새로 고치세요.
- 웹사이트 액세스 권한은 주입 가능한 페이지만 제어하며, 마그넷 수신이나 메인 스크립트 연결을 의미하지 않습니다. `edge://` 및 `chrome://` 같은 내부 페이지에는 주입할 수 없습니다.

## Bahasa Indonesia

# PikPak Magnet Companion

Ini adalah ekstensi pendamping Manifest V3 yang tidak memerlukan login PikPak terpisah. Ekstensi ini bekerja bersama **userscript PikPak Enhancement Master**, tidak mengakses API PikPak, dan tidak menyimpan informasi akun. Ekstensi mendeteksi tautan magnet dari teks yang dipilih di halaman web mana pun dan meneruskannya ke halaman PikPak yang menjalankan skrip utama. Penguraian, pratinjau, dan penyimpanan magnet dilakukan oleh skrip utama yang sudah login.

## Kompatibilitas

Ekstensi ini hanya mendukung Chrome dan Microsoft Edge versi desktop. Browser seluler Android, iPhone, dan iPad tidak didukung.

## Instalasi

1. Buka halaman pengelolaan ekstensi Chrome/Edge.
2. Aktifkan Mode pengembang.
3. Pilih “Muat yang belum dikemas”.
4. Pilih folder `PikPak_Magnet_Companion`.
5. Pasang [PikPak_Enhancement_Master.user.js](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js) dan pastikan skrip berjalan di halaman PikPak.

## Penggunaan

1. Buka halaman PikPak terlebih dahulu.
2. Pilih tautan magnet atau teks BTIH di halaman web biasa.
3. Secara default, tombol konfirmasi akan muncul. Klik “Kirim ke PikPak” sebelum berpindah halaman; Anda juga dapat menggunakan menu klik kanan.
4. Skrip utama akan membuka pratinjau magnet di halaman PikPak.
5. Pilih file yang ingin disimpan lalu konfirmasi.

## Pengaturan

Klik ikon ekstensi untuk membuka pengaturan, atau buka opsi ekstensi dari halaman pengelolaan ekstensi.

- Konfirmasi sebelum mengirim (default): tampilkan tombol konfirmasi setelah teks dipilih.
- Kirim otomatis: kirim segera dan beralih ke PikPak.
- Nonaktifkan deteksi otomatis: abaikan teks yang dipilih dan pertahankan menu klik kanan.
- Menu klik kanan dan perpindahan otomatis setelah pengiriman dapat diatur secara terpisah.

## Jika tidak merespons

- Klik Muat ulang pada halaman pengelolaan ekstensi, lalu segarkan halaman PikPak dan halaman sumber.
- Buka halaman drive yang didukung dan pastikan userscript utama sedang berjalan.
- Ekstensi hanya mengirim setelah menerima handshake kesiapan dari skrip utama. Jika tidak terdeteksi, segarkan halaman drive lalu coba lagi.
- Izin akses situs hanya mengatur halaman tempat ekstensi dapat diinjeksi; izin tersebut tidak berarti magnet sudah diterima atau skrip utama sudah terhubung. Halaman internal seperti `edge://` dan `chrome://` tidak dapat diinjeksi.

## Bahasa Melayu

# PikPak Magnet Companion

Ini ialah sambungan pengiring Manifest V3 yang tidak memerlukan log masuk PikPak berasingan. Ia berfungsi bersama **userscript PikPak Enhancement Master**, tidak mengakses API PikPak dan tidak menyimpan maklumat akaun. Sambungan ini mengesan pautan magnet daripada teks yang dipilih di mana-mana halaman web dan menghantarnya ke halaman PikPak yang menjalankan skrip utama. Penghuraian, pratonton dan penyimpanan magnet dilakukan oleh skrip utama yang telah log masuk.

## Keserasian

Sambungan ini hanya menyokong Chrome dan Microsoft Edge versi desktop. Pelayar mudah alih Android, iPhone dan iPad tidak disokong.

## Pemasangan

1. Buka halaman pengurusan sambungan Chrome/Edge.
2. Hidupkan Mod pembangun.
3. Pilih “Muatkan sambungan tidak dizip”.
4. Pilih folder `PikPak_Magnet_Companion`.
5. Pasang [PikPak_Enhancement_Master.user.js](https://github.com/digbug82/PikPak_Enhancement_Master/blob/main/PikPak_Enhancement_Master.user.js) dan pastikan skrip berjalan pada halaman PikPak.

## Cara guna

1. Buka halaman PikPak terlebih dahulu.
2. Pilih pautan magnet atau teks BTIH pada halaman web biasa.
3. Secara lalai, butang pengesahan dipaparkan. Klik “Hantar ke PikPak” sebelum bertukar halaman; menu klik kanan juga boleh digunakan.
4. Skrip utama akan membuka pratonton magnet pada halaman PikPak.
5. Pilih fail yang hendak disimpan dan sahkan.

## Tetapan

Klik ikon sambungan untuk membuka tetapan, atau buka pilihan sambungan daripada halaman pengurusan sambungan.

- Sahkan sebelum menghantar (lalai): paparkan butang pengesahan selepas teks dipilih.
- Hantar secara automatik: hantar serta-merta dan tukar ke PikPak.
- Matikan pengesanan automatik: abaikan teks yang dipilih dan kekalkan menu klik kanan.
- Menu klik kanan dan pertukaran automatik selepas penghantaran boleh ditetapkan secara berasingan.

## Jika tiada tindak balas

- Klik Muat semula pada halaman pengurusan sambungan, kemudian segarkan halaman PikPak dan halaman sumber.
- Buka halaman pemacu yang disokong dan pastikan userscript utama sedang berjalan.
- Sambungan hanya menghantar selepas menerima jabat tangan sedia daripada skrip utama. Jika tidak dikesan, segarkan halaman pemacu dan cuba lagi.
- Kebenaran akses laman web hanya mengawal halaman yang boleh disuntik oleh sambungan; ia tidak bermaksud magnet telah diterima atau skrip utama telah disambungkan. Halaman dalaman seperti `edge://` dan `chrome://` tidak boleh disuntik.
