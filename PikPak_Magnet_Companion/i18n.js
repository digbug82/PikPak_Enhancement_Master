(() => {
  'use strict';

  const messages = {
    zh: {
      extensionTitle: 'PikPak 磁链伴生',
      subtitle: '配合 PikPak 增强大师主脚本使用：将任意网页选中的磁链转交到已运行主脚本的 PikPak 页面；单独安装无法独立解析、预览或保存。',
      selectionTitle: '选中磁链行为',
      confirmTitle: '确认后发送（推荐）',
      confirmDesc: '选中磁链后显示按钮，点击后才切换到 PikPak。',
      autoTitle: '自动发送',
      autoDesc: '选中磁链后立即发送并切换到 PikPak。',
      offTitle: '关闭自动识别',
      offDesc: '不处理普通选中，仅保留右键菜单。',
      shortcutTitle: '快捷操作',
      contextMenu: '显示右键菜单“发送磁链到 PikPak”',
      focusTab: '发送后自动切换到 PikPak 标签页',
      reset: '恢复默认',
      save: '保存设置',
      saved: '已保存',
      resetDone: '已恢复默认',
      saveFailed: '保存失败',
      detected: '检测到 {count} 个磁链',
      send: '发送到 PikPak',
      ignore: '忽略',
      menu: '发送磁链到 PikPak',
      mainUnavailable: '未检测到正在运行 PikPak 增强大师主脚本的网盘页面。请打开或刷新 PikPak 网盘页面后重试。',
      language: '语言'
    },
    tc: {
      extensionTitle: 'PikPak 磁鏈伴生',
      subtitle: '配合 PikPak 增強大師主腳本使用：將任意網頁選取的磁鏈轉交到已執行主腳本的 PikPak 頁面；單獨安裝無法獨立解析、預覽或儲存。',
      selectionTitle: '選取磁鏈行為',
      confirmTitle: '確認後傳送（推薦）',
      confirmDesc: '選取磁鏈後顯示按鈕，點擊後才切換到 PikPak。',
      autoTitle: '自動傳送',
      autoDesc: '選取磁鏈後立即傳送並切換到 PikPak。',
      offTitle: '關閉自動識別',
      offDesc: '不處理一般選取，僅保留右鍵選單。',
      shortcutTitle: '快速操作',
      contextMenu: '顯示右鍵選單「傳送磁鏈到 PikPak」',
      focusTab: '傳送後自動切換到 PikPak 分頁',
      reset: '恢復預設',
      save: '儲存設定',
      saved: '已儲存',
      resetDone: '已恢復預設',
      saveFailed: '儲存失敗',
      detected: '偵測到 {count} 個磁鏈',
      send: '傳送到 PikPak',
      ignore: '忽略',
      menu: '傳送磁鏈到 PikPak',
      mainUnavailable: '未偵測到正在執行 PikPak 增強大師主腳本的網盤頁面。請開啟或重新整理 PikPak 網盤頁面後重試。',
      language: '語言'
    },
    en: {
      extensionTitle: 'PikPak Magnet Companion',
      subtitle: 'Used with the PikPak Enhancement Master userscript: forwards magnets selected on any webpage to an open PikPak page running the main script. The companion cannot parse, preview, or save magnets by itself.',
      selectionTitle: 'Selected magnet behavior',
      confirmTitle: 'Confirm before sending (Recommended)',
      confirmDesc: 'Show a button after selecting a magnet; switch to PikPak only after clicking it.',
      autoTitle: 'Send automatically',
      autoDesc: 'Send and switch to PikPak immediately after selecting a magnet.',
      offTitle: 'Disable automatic detection',
      offDesc: 'Do not process selections; keep the context-menu action available.',
      shortcutTitle: 'Quick actions',
      contextMenu: 'Show the “Send magnet to PikPak” context-menu item',
      focusTab: 'Switch to the PikPak tab after sending',
      reset: 'Restore defaults',
      save: 'Save settings',
      saved: 'Saved',
      resetDone: 'Defaults restored',
      saveFailed: 'Save failed',
      detected: '{count} magnet link(s) detected',
      send: 'Send to PikPak',
      ignore: 'Ignore',
      menu: 'Send magnet to PikPak',
      mainUnavailable: 'No PikPak page running the PikPak Enhancement Master userscript was found. Open or refresh a PikPak drive page and try again.',
      language: 'Language'
    },
    ko: {
      extensionTitle: 'PikPak Magnet Companion',
      subtitle: 'PikPak Enhancement Master 사용자 스크립트와 함께 사용합니다. 웹페이지에서 선택한 마그넷을 메인 스크립트가 실행 중인 PikPak 페이지로 전달하며, 단독으로는 분석·미리보기·저장을 수행할 수 없습니다.',
      selectionTitle: '마그넷 선택 동작',
      confirmTitle: '확인 후 전송 (권장)',
      confirmDesc: '마그넷을 선택하면 버튼을 표시하고, 클릭한 후에만 PikPak으로 전환합니다.',
      autoTitle: '자동 전송',
      autoDesc: '마그넷을 선택하면 즉시 전송하고 PikPak으로 전환합니다.',
      offTitle: '자동 감지 끄기',
      offDesc: '일반 선택을 처리하지 않고 우클릭 메뉴만 유지합니다.',
      shortcutTitle: '빠른 작업',
      contextMenu: '“PikPak으로 마그넷 보내기” 우클릭 메뉴 표시',
      focusTab: '전송 후 PikPak 탭으로 자동 전환',
      reset: '기본값 복원',
      save: '설정 저장',
      saved: '저장됨',
      resetDone: '기본값으로 복원됨',
      saveFailed: '저장 실패',
      detected: '마그넷 링크 {count}개 감지됨',
      send: 'PikPak으로 보내기',
      ignore: '무시',
      menu: 'PikPak으로 마그넷 보내기',
      mainUnavailable: 'PikPak Enhancement Master 사용자 스크립트가 실행 중인 PikPak 페이지를 찾을 수 없습니다. PikPak 드라이브 페이지를 열거나 새로 고친 후 다시 시도하세요.',
      language: '언어'
    },
    ja: {
      extensionTitle: 'PikPak Magnet Companion',
      subtitle: 'PikPak Enhancement Master ユーザースクリプトと併用します。Web ページで選択したマグネットをメインスクリプトが動作する PikPak ページへ渡します。単独では解析・プレビュー・保存できません。',
      selectionTitle: 'マグネット選択時の動作',
      confirmTitle: '確認してから送信（推奨）',
      confirmDesc: 'マグネットを選択するとボタンを表示し、クリック後に PikPak へ切り替えます。',
      autoTitle: '自動送信',
      autoDesc: 'マグネットを選択するとすぐに送信して PikPak へ切り替えます。',
      offTitle: '自動検出を無効化',
      offDesc: '通常の選択は処理せず、右クリックメニューだけを残します。',
      shortcutTitle: 'クイック操作',
      contextMenu: '「PikPak にマグネットを送信」右クリック項目を表示',
      focusTab: '送信後に PikPak タブへ自動切り替え',
      reset: '既定値に戻す',
      save: '設定を保存',
      saved: '保存しました',
      resetDone: '既定値に戻しました',
      saveFailed: '保存に失敗しました',
      detected: 'マグネットリンクを {count} 件検出',
      send: 'PikPak に送信',
      ignore: '無視',
      menu: 'PikPak にマグネットを送信',
      mainUnavailable: 'PikPak Enhancement Master ユーザースクリプトが実行中の PikPak ページが見つかりません。PikPak ドライブページを開くか更新して再試行してください。',
      language: '言語'
    },
    id: {
      extensionTitle: 'PikPak Magnet Companion',
      subtitle: 'Digunakan bersama skrip pengguna PikPak Enhancement Master untuk meneruskan magnet terpilih ke halaman PikPak yang menjalankan skrip utama. Ekstensi ini tidak dapat menganalisis, melihat pratinjau, atau menyimpan magnet secara mandiri.',
      selectionTitle: 'Tindakan magnet terpilih',
      confirmTitle: 'Konfirmasi sebelum mengirim (Disarankan)',
      confirmDesc: 'Tampilkan tombol setelah magnet dipilih, lalu pindah ke PikPak setelah diklik.',
      autoTitle: 'Kirim otomatis',
      autoDesc: 'Segera kirim dan pindah ke PikPak setelah magnet dipilih.',
      offTitle: 'Nonaktifkan deteksi otomatis',
      offDesc: 'Jangan proses teks yang dipilih; tetap tampilkan menu konteks.',
      shortcutTitle: 'Tindakan cepat',
      contextMenu: 'Tampilkan menu konteks “Kirim magnet ke PikPak”',
      focusTab: 'Beralih ke tab PikPak setelah mengirim',
      reset: 'Pulihkan default',
      save: 'Simpan pengaturan',
      saved: 'Tersimpan',
      resetDone: 'Default dipulihkan',
      saveFailed: 'Gagal menyimpan',
      detected: '{count} magnet terdeteksi',
      send: 'Kirim ke PikPak',
      ignore: 'Abaikan',
      menu: 'Kirim magnet ke PikPak',
      mainUnavailable: 'Tidak menemukan halaman PikPak yang menjalankan userscript PikPak Enhancement Master. Buka atau segarkan halaman drive PikPak lalu coba lagi.',
      language: 'Bahasa'
    },
    ms: {
      extensionTitle: 'PikPak Magnet Companion',
      subtitle: 'Digunakan bersama skrip pengguna PikPak Enhancement Master untuk menghantar magnet terpilih ke halaman PikPak yang menjalankan skrip utama. Sambungan ini tidak boleh menganalisis, mempratonton atau menyimpan magnet secara bersendirian.',
      selectionTitle: 'Tindakan magnet dipilih',
      confirmTitle: 'Sahkan sebelum hantar (Disyorkan)',
      confirmDesc: 'Paparkan butang selepas magnet dipilih dan beralih ke PikPak hanya selepas diklik.',
      autoTitle: 'Hantar secara automatik',
      autoDesc: 'Hantar dan beralih ke PikPak sebaik sahaja magnet dipilih.',
      offTitle: 'Matikan pengesanan automatik',
      offDesc: 'Jangan proses pilihan biasa; kekalkan menu konteks sahaja.',
      shortcutTitle: 'Tindakan pantas',
      contextMenu: 'Paparkan menu konteks “Hantar magnet ke PikPak”',
      focusTab: 'Beralih ke tab PikPak selepas menghantar',
      reset: 'Pulihkan lalai',
      save: 'Simpan tetapan',
      saved: 'Disimpan',
      resetDone: 'Lalai dipulihkan',
      saveFailed: 'Gagal menyimpan',
      detected: '{count} magnet dikesan',
      send: 'Hantar ke PikPak',
      ignore: 'Abaikan',
      menu: 'Hantar magnet ke PikPak',
      mainUnavailable: 'Tiada halaman PikPak yang menjalankan userscript PikPak Enhancement Master ditemui. Buka atau muat semula halaman pemacu PikPak kemudian cuba lagi.',
      language: 'Bahasa'
    }
  };

  const languageNames = {
    zh: '简体中文',
    tc: '繁體中文',
    en: 'English',
    ko: '한국어',
    ja: '日本語',
    id: 'Indonesia',
    ms: 'Bahasa Melayu'
  };

  const normalizeLanguage = (value) => Object.prototype.hasOwnProperty.call(messages, value) ? value : 'en';
  const detectLanguage = (value) => {
    const n = String(value || globalThis.navigator?.language || '').toLowerCase();
    if (n === 'zh' || n.startsWith('zh-cn') || n.startsWith('zh-sg')) return 'zh';
    if (n.startsWith('zh-tw') || n.startsWith('zh-hk') || n.startsWith('zh-mo')) return 'tc';
    if (n.startsWith('id') || n.startsWith('in')) return 'id';
    if (n.startsWith('ms')) return 'ms';
    if (n.startsWith('ko')) return 'ko';
    if (n.startsWith('ja')) return 'ja';
    return 'en';
  };
  const t = (language, key, vars = {}) => {
    const table = messages[normalizeLanguage(language)] || messages.en;
    let value = table[key] ?? messages.en[key] ?? key;
    Object.entries(vars).forEach(([name, replacement]) => {
      value = value.replace(new RegExp(`\\{${name}\\}`, 'g'), String(replacement));
    });
    return value;
  };

  globalThis.PK_MAGNET_I18N = {
    messages,
    languageNames,
    normalizeLanguage,
    detectLanguage,
    t
  };
})();
