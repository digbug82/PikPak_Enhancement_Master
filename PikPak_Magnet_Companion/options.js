(() => {
  'use strict';

  const I18N = globalThis.PK_MAGNET_I18N;
  const STORAGE_KEY = 'pkMagnetCompanionConfig';
  const DEFAULT_CONFIG = {
    selectionMode: 'confirm',
    contextMenuEnabled: true,
    focusPikPakTab: true,
    language: I18N.detectLanguage()
  };

  const normalize = (value = {}) => ({
    selectionMode: ['confirm', 'auto', 'off'].includes(value.selectionMode)
      ? value.selectionMode
      : DEFAULT_CONFIG.selectionMode,
    contextMenuEnabled: value.contextMenuEnabled !== false,
    focusPikPakTab: value.focusPikPakTab !== false,
    language: I18N.normalizeLanguage(value.language || DEFAULT_CONFIG.language)
  });

  const status = document.querySelector('#status');
  const languageSelect = document.querySelector('#language');
  let currentLanguage = DEFAULT_CONFIG.language;

  const applyLanguage = (language) => {
    currentLanguage = I18N.normalizeLanguage(language);
    document.documentElement.lang = currentLanguage === 'tc' ? 'zh-TW' : currentLanguage;
    document.title = I18N.t(currentLanguage, 'extensionTitle');
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      element.textContent = I18N.t(currentLanguage, element.dataset.i18n);
    });
    const languageLabel = document.querySelector('#languageLabel');
    if (languageLabel) languageLabel.textContent = I18N.t(currentLanguage, 'language');
    if (languageSelect) languageSelect.value = currentLanguage;
  };

  const showStatus = (message) => {
    if (!status) return;
    status.textContent = message;
    window.clearTimeout(showStatus.timer);
    showStatus.timer = window.setTimeout(() => { status.textContent = ''; }, 1800);
  };

  const readForm = () => normalize({
    selectionMode: document.querySelector('input[name="selectionMode"]:checked')?.value,
    contextMenuEnabled: document.querySelector('#contextMenuEnabled')?.checked,
    focusPikPakTab: document.querySelector('#focusPikPakTab')?.checked,
    language: languageSelect?.value || currentLanguage
  });

  const writeForm = (config) => {
    const normalized = normalize(config);
    const mode = document.querySelector(`input[name="selectionMode"][value="${normalized.selectionMode}"]`);
    if (mode) mode.checked = true;
    const contextMenu = document.querySelector('#contextMenuEnabled');
    const focusTab = document.querySelector('#focusPikPakTab');
    if (contextMenu) contextMenu.checked = normalized.contextMenuEnabled;
    if (focusTab) focusTab.checked = normalized.focusPikPakTab;
    applyLanguage(normalized.language);
  };

  const save = async (messageKey = 'saved') => {
    const config = readForm();
    await chrome.storage.local.set({ [STORAGE_KEY]: config });
    applyLanguage(config.language);
    showStatus(I18N.t(config.language, messageKey));
  };

  chrome.storage.local.get(STORAGE_KEY).then((result) => {
    writeForm(result?.[STORAGE_KEY] || DEFAULT_CONFIG);
  }).catch(() => writeForm(DEFAULT_CONFIG));

  document.querySelector('#saveButton')?.addEventListener('click', () => {
    save().catch(() => showStatus(I18N.t(currentLanguage, 'saveFailed')));
  });
  document.querySelector('#resetButton')?.addEventListener('click', () => {
    writeForm(DEFAULT_CONFIG);
    save('resetDone').catch(() => showStatus(I18N.t(currentLanguage, 'saveFailed')));
  });
  document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('change', () => save().catch(() => showStatus(I18N.t(currentLanguage, 'saveFailed'))));
  });
  languageSelect?.addEventListener('change', () => {
    applyLanguage(languageSelect.value);
    save().catch(() => showStatus(I18N.t(currentLanguage, 'saveFailed')));
  });
})();
