(() => {
  'use strict';

  const isServiceWorker = typeof window === 'undefined' && typeof document === 'undefined';
  if (isServiceWorker && typeof importScripts === 'function' && !globalThis.PK_MAGNET_I18N) {
    importScripts('i18n.js');
  }
  const I18N = globalThis.PK_MAGNET_I18N;
  const CONFIG_STORAGE_KEY = 'pkMagnetCompanionConfig';
  const DEFAULT_CONFIG = Object.freeze({
    selectionMode: 'confirm',
    contextMenuEnabled: true,
    focusPikPakTab: true,
    language: I18N?.detectLanguage?.() || 'en'
  });

  const normalizeConfig = (value = {}) => ({
    selectionMode: ['confirm', 'auto', 'off'].includes(value.selectionMode)
      ? value.selectionMode
      : DEFAULT_CONFIG.selectionMode,
    contextMenuEnabled: value.contextMenuEnabled !== false,
    focusPikPakTab: value.focusPikPakTab !== false,
    language: I18N?.normalizeLanguage?.(value.language || DEFAULT_CONFIG.language) || DEFAULT_CONFIG.language
  });

  const isPikPakPage = (url = typeof location !== 'undefined' ? location.href : '') => {
    try {
      const target = new URL(url);
      const host = target.hostname.toLowerCase();
      const path = target.pathname || '/';
      return (host === 'mypikpak.com' && /^\/drive(?:\/|$)/i.test(path))
        || (host === 'drive.mypikpak.com')
        || (host === 'mypikpak.net' && /^\/drive(?:\/|$)/i.test(path))
        || (host === 'pikpak.me' && /^\/drive(?:\/|$)/i.test(path));
    } catch (e) {
      return false;
    }
  };

  const extractMagnets = (text) => {
    const source = String(text || '').trim();
    if (!source || source.length > 200000) return [];

    const found = new Map();
    const add = (value) => {
      let link = String(value || '').trim();
      if (!link) return;

      const urn = link.match(/^urn:btih:([a-f0-9]{40}|[a-z2-7]{32})$/i);
      if (urn) link = `magnet:?xt=urn:btih:${urn[1]}`;
      if (!/^magnet:\?/i.test(link)) return;

      const hash = link.match(/[?&]xt=urn:btih:([a-f0-9]{40}|[a-z2-7]{32})/i);
      if (!hash) return;

      const key = hash[1].toUpperCase();
      if (!found.has(key)) found.set(key, link);
    };

    for (const match of source.matchAll(/magnet:\?[^\s"'<>`]+/gi)) add(match[0]);
    for (const match of source.matchAll(/urn:btih:([a-f0-9]{40}|[a-z2-7]{32})/gi)) {
      add(`urn:btih:${match[1]}`);
    }
    return [...found.values()];
  };

  // Background role: relay messages and remember the latest PikPak tab.
  if (isServiceWorker) {
    const contextMenuId = 'pk-send-selection-to-pikpak';
    const PENDING_STORAGE_KEY = 'pkMagnetPendingQueue';
    const ACCEPT_TIMEOUT_MS = 3000;
    const MAX_DELIVERY_ATTEMPTS = 3;
    let companionConfig = { ...DEFAULT_CONFIG };
    let pikpakTabId = null;
    const pending = [];
    const readyTabs = new Map();
    const acceptedWaiters = new Map();
    let pendingWrite = Promise.resolve();
    let flushPromise = null;
    const pikpakUrlPatterns = [
      'https://mypikpak.com/drive/*',
      'https://drive.mypikpak.com/*',
      'https://mypikpak.net/drive/*',
      'https://pikpak.me/drive/*'
    ];

    const makeRequestId = () => `pk-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    const persistPending = () => {
      if (!chrome.storage.session) return Promise.resolve();
      pendingWrite = pendingWrite.then(() => chrome.storage.session.set({ [PENDING_STORAGE_KEY]: pending.slice(0, 100) })).catch(() => {});
      return pendingWrite;
    };
    const queueReady = (async () => {
      if (!chrome.storage.session) return;
      try {
        const result = await chrome.storage.session.get(PENDING_STORAGE_KEY);
        const stored = Array.isArray(result?.[PENDING_STORAGE_KEY]) ? result[PENDING_STORAGE_KEY] : [];
        stored.forEach(item => {
          if (!item || !Array.isArray(item.links) || !item.links.length) return;
          pending.push({ ...item, requestId: String(item.requestId || makeRequestId()) });
        });
      } catch (e) {}
    })();

    const enqueuePending = async (payload) => {
      const requestId = String(payload?.requestId || makeRequestId());
      if (!pending.some(item => String(item.requestId || '') === requestId)) {
        pending.push({ ...payload, requestId, queuedAt: Number(payload.queuedAt || Date.now()) });
        await persistPending();
      }
      return requestId;
    };

    const removePending = async (requestId) => {
      const before = pending.length;
      for (let index = pending.length - 1; index >= 0; index--) {
        if (String(pending[index]?.requestId || '') === String(requestId || '')) pending.splice(index, 1);
      }
      if (pending.length !== before) await persistPending();
    };

    const notifyTab = async (tabId, message) => {
      if (tabId == null) return;
      try { await chrome.tabs.sendMessage(tabId, message); } catch (e) {}
    };

    const discoverPikPakTab = async () => {
      try {
        const tabs = await chrome.tabs.query({ url: pikpakUrlPatterns });
        const available = new Set(tabs.map(tab => tab.id).filter(id => id != null));
        for (const tabId of readyTabs.keys()) {
          if (!available.has(tabId)) readyTabs.delete(tabId);
        }
        const active = tabs.find(tab => tab.active && tab.id != null && readyTabs.has(tab.id));
        const candidate = active || tabs.find(tab => tab.id != null && readyTabs.has(tab.id));
        if (candidate?.id != null) pikpakTabId = candidate.id;
        else pikpakTabId = null;
      } catch (e) {}
      return pikpakTabId;
    };

    const waitForAccepted = (requestId, tabId) => new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        acceptedWaiters.delete(requestId);
        reject(new Error('PK_MAIN_ACCEPT_TIMEOUT'));
      }, ACCEPT_TIMEOUT_MS);
      acceptedWaiters.set(requestId, { tabId, resolve, reject, timer });
    });

    const sendToPikPak = async (tabId, payload) => {
      const requestId = String(payload.requestId || makeRequestId());
      const accepted = waitForAccepted(requestId, tabId);
      const message = { type: 'PK_FORWARD_MAGNET', ...payload, requestId };
      try {
        await chrome.tabs.sendMessage(tabId, message);
      } catch (firstError) {
        // The PikPak tab may have existed before the extension was installed
        // or reloaded. Inject the content script once, then retry delivery.
        await chrome.scripting.executeScript({
          target: { tabId },
          files: ['companion.js']
        });
        await chrome.tabs.sendMessage(tabId, message);
      }
      await accepted;
    };

    const deliver = async (payload, options = {}) => {
      await queueReady;
      const requestId = String(payload?.requestId || makeRequestId());
      const message = { ...payload, requestId, attempts: Number(payload?.attempts || 0) };
      const maxAttempts = Math.max(1, Number(options.maxAttempts || MAX_DELIVERY_ATTEMPTS));
      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        await discoverPikPakTab();
        const candidateIds = [
          pikpakTabId,
          ...Array.from(readyTabs.keys()).filter(tabId => tabId !== pikpakTabId)
        ].filter((id, index, list) => id != null && list.indexOf(id) === index);

        for (const tabId of candidateIds) {
          try {
            await sendToPikPak(tabId, message);
            pikpakTabId = tabId;
            readyTabs.set(tabId, Date.now());
            await focusTarget(tabId, options.focus ?? companionConfig.focusPikPakTab);
            return { ok: true, requestId, tabId };
          } catch (e) {
            if (e?.code === 'PK_MAIN_REJECTED') {
              return { ok: false, queued: false, reason: 'main-rejected', requestId };
            }
            readyTabs.delete(tabId);
            if (pikpakTabId === tabId) pikpakTabId = null;
          }
        }
        if (attempt + 1 < maxAttempts) await new Promise(resolve => setTimeout(resolve, 200));
      }

      if (!options.fromQueue) await enqueuePending(message);
      return { ok: false, queued: true, reason: 'no-ready-tab', requestId };
    };

    const flush = async () => {
      if (flushPromise) return flushPromise;
      flushPromise = (async () => {
        await queueReady;
        while (pending.length) {
          const payload = pending[0];
          const result = await deliver(payload, { fromQueue: true });
          if (!result.ok) break;
          pending.shift();
          await persistPending();
        }
      })().finally(() => { flushPromise = null; });
      return flushPromise;
    };

    const showUnavailableOnSource = (tabId) => notifyTab(tabId, {
      type: 'PK_COMPANION_NOTICE',
      message: I18N?.t?.(companionConfig.language, 'mainUnavailable')
        || 'No PikPak page running the PikPak Enhancement Master userscript was found. Open or refresh a PikPak drive page and try again.'
    });

    const registerMainReadyTab = (tabId) => {
      if (tabId == null) return;
      readyTabs.set(tabId, Date.now());
      pikpakTabId = tabId;
      flush().catch(() => {});
    };

    const handleAccepted = (message, sender, sendResponse) => {
      const requestId = String(message?.requestId || '');
      const waiter = acceptedWaiters.get(requestId);
      if (!requestId || !waiter || waiter.tabId !== sender.tab?.id) {
        sendResponse?.({ ok: false, reason: 'unknown-request' });
        return true;
      }
      clearTimeout(waiter.timer);
      acceptedWaiters.delete(requestId);
      waiter.resolve({ ok: true });
      sendResponse?.({ ok: true });
      return true;
    };

    const handleRejected = (message, sender, sendResponse) => {
      const requestId = String(message?.requestId || '');
      const waiter = acceptedWaiters.get(requestId);
      if (!requestId || !waiter || waiter.tabId !== sender.tab?.id) {
        sendResponse?.({ ok: false, reason: 'unknown-request' });
        return true;
      }
      clearTimeout(waiter.timer);
      acceptedWaiters.delete(requestId);
      const error = new Error(String(message.reason || 'PK_MAIN_REJECTED'));
      error.code = 'PK_MAIN_REJECTED';
      waiter.reject(error);
      sendResponse?.({ ok: true });
      return true;
    };

    const focusTarget = async (tabId, shouldFocus = companionConfig.focusPikPakTab) => {
      if (shouldFocus) {
        try {
          const targetTab = await chrome.tabs.update(tabId, { active: true });
          if (targetTab?.windowId != null) {
            await chrome.windows.update(targetTab.windowId, { focused: true });
          }
        } catch (e) {
          // Delivery already succeeded; failure to focus must not resend it.
        }
      }
    };

    const ensureContextMenu = () => {
      if (!companionConfig.contextMenuEnabled) {
        chrome.contextMenus.remove(contextMenuId, () => void chrome.runtime.lastError);
        return;
      }
      const create = () => {
        try {
          chrome.contextMenus.create({
            id: contextMenuId,
            title: I18N?.t?.(companionConfig.language, 'menu') || 'Send magnet to PikPak',
            contexts: ['selection', 'link']
          }, () => void chrome.runtime.lastError);
        } catch (e) {}
      };
      // Recreate instead of relying on update() so a stale menu from an
      // earlier service-worker instance cannot suppress the current item.
      try {
        chrome.contextMenus.remove(contextMenuId, () => {
          void chrome.runtime.lastError;
          create();
        });
      } catch (e) {
        create();
      }
    };

    const loadConfig = async () => {
      try {
        const result = await chrome.storage.local.get(CONFIG_STORAGE_KEY);
        companionConfig = normalizeConfig(result?.[CONFIG_STORAGE_KEY]);
      } catch (e) {
        companionConfig = { ...DEFAULT_CONFIG };
      }
      ensureContextMenu();
    };

    // Create the menu immediately with defaults; loading settings can then
    // update its title/visibility without leaving a startup gap.
    ensureContextMenu();
    loadConfig().catch(() => ensureContextMenu());
    chrome.runtime.onInstalled.addListener(loadConfig);
    chrome.runtime.onStartup.addListener(loadConfig);
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName !== 'local' || !changes[CONFIG_STORAGE_KEY]) return;
      companionConfig = normalizeConfig(changes[CONFIG_STORAGE_KEY].newValue);
      ensureContextMenu();
    });

    chrome.contextMenus.onClicked.addListener((info, tab) => {
      if (info.menuItemId !== contextMenuId) return;
      const text = String(info.selectionText || info.linkUrl || '').trim();
      const links = extractMagnets(text);
      if (!links.length) return;

      deliver({
        requestId: makeRequestId(),
        text,
        links,
        sourceUrl: String(tab?.url || info.pageUrl || ''),
        sourceTitle: String(tab?.title || '')
      }, { focus: companionConfig.focusPikPakTab }).then(result => {
        if (!result?.ok && result?.reason === 'no-ready-tab') showUnavailableOnSource(tab?.id);
      }).catch(() => {});
    });

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message?.type === 'PK_REGISTER_MAIN_READY_TAB') {
        const tabId = sender.tab?.id;
        const senderUrl = String(sender.tab?.url || '');
        // The content script only emits this message from isPikPakPage();
        // some Chromium builds omit sender.tab.url even with tabs permission.
        if (tabId == null || (senderUrl && !isPikPakPage(senderUrl))) {
          sendResponse({ ok: false, reason: 'unsupported-tab' });
          return true;
        }
        registerMainReadyTab(tabId);
        sendResponse({ ok: true });
        return true;
      }

      // Kept for compatibility with older content-script instances. A tab is
      // not considered a delivery target until the main userscript handshake.
      if (message?.type === 'PK_REGISTER_PIKPAK_TAB') {
        sendResponse({ ok: false, reason: 'main-ready-required' });
        return true;
      }

      if (message?.type === 'PK_MAIN_MAGNET_ACCEPTED') {
        return handleAccepted(message, sender, sendResponse);
      }

      if (message?.type === 'PK_MAIN_MAGNET_REJECTED') {
        return handleRejected(message, sender, sendResponse);
      }

      if (message?.type === 'PK_GET_CONFIG') {
        sendResponse({ ok: true, config: { ...companionConfig } });
        return true;
      }

      if (message?.type === 'PK_SELECTED_MAGNET') {
        const explicit = message.explicit === true;
        if (!explicit && companionConfig.selectionMode !== 'auto') {
          sendResponse({ ok: false, reason: 'selection-confirmation-required' });
          return true;
        }

        const links = Array.isArray(message.links) ? message.links : [];
        if (!links.length) {
          sendResponse({ ok: false, reason: 'no-magnet' });
          return true;
        }

        const requestId = String(message.requestId || makeRequestId());
        deliver({
          requestId,
          text: String(message.text || ''),
          links,
          sourceUrl: String(message.sourceUrl || ''),
          sourceTitle: String(message.sourceTitle || '')
        }, { focus: companionConfig.focusPikPakTab }).then(result => {
          if (!result?.ok && result?.reason === 'no-ready-tab') showUnavailableOnSource(sender.tab?.id);
          sendResponse(result);
        }).catch(() => sendResponse({ ok: false, reason: 'delivery-failed', requestId }));
        return true;
      }

      return false;
    });

    chrome.tabs.onRemoved.addListener((tabId) => {
      readyTabs.delete(tabId);
      if (tabId === pikpakTabId) pikpakTabId = null;
      for (const [requestId, waiter] of acceptedWaiters.entries()) {
        if (waiter.tabId !== tabId) continue;
        clearTimeout(waiter.timer);
        acceptedWaiters.delete(requestId);
        waiter.reject(new Error('PK_MAIN_TAB_CLOSED'));
      }
    });

    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (!readyTabs.has(tabId)) return;
      const url = String(changeInfo.url || tab?.url || '');
      if (url && !isPikPakPage(url)) {
        readyTabs.delete(tabId);
        if (pikpakTabId === tabId) pikpakTabId = null;
      }
    });

    return;
  }

  // Content-script role.
  if (window.top !== window) return;

  if (isPikPakPage()) {
    const showPikPakNotice = (message) => {
      const text = String(message || '').trim();
      if (!text) return;
      document.getElementById('pk-magnet-companion-notice')?.remove();
      const host = document.createElement('div');
      host.id = 'pk-magnet-companion-notice';
      host.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:2147483647;padding:10px 14px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#202124;color:#f1f3f4;box-shadow:0 6px 24px rgba(0,0,0,.35);font:13px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;max-width:min(560px,calc(100vw - 32px));';
      host.textContent = text;
      (document.documentElement || document.body)?.appendChild(host);
      window.setTimeout(() => host.remove(), 5000);
    };
    if (!window.__pkMagnetCompanionBound) {
      window.__pkMagnetCompanionBound = true;
      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message?.type === 'PK_FORWARD_MAGNET') {
          window.postMessage({
            source: 'pk-magnet-companion',
            type: 'PK_MAGNET_SELECTED',
            requestId: String(message.requestId || ''),
            text: String(message.text || ''),
            links: Array.isArray(message.links) ? message.links : []
          }, location.origin);
          sendResponse?.({ ok: true });
          return true;
        }
        if (message?.type === 'PK_COMPANION_NOTICE') {
          showPikPakNotice(message.message);
          sendResponse?.({ ok: true });
          return true;
        }
        return false;
      });
    }

    if (!window.__pkMagnetCompanionMainEventsBound) {
      window.__pkMagnetCompanionMainEventsBound = true;
      window.__pkMagnetCompanionMainReady = window.__pkMagnetCompanionMainReady === true;
      const clearMainReadyPolling = () => {
        if (window.__pkMagnetCompanionReadyRetryTimer) {
          clearInterval(window.__pkMagnetCompanionReadyRetryTimer);
          window.__pkMagnetCompanionReadyRetryTimer = 0;
        }
      };
      const registerMainReady = () => {
        chrome.runtime.sendMessage({ type: 'PK_REGISTER_MAIN_READY_TAB' }).then((response) => {
          if (!response?.ok) {
            window.__pkMagnetCompanionMainReady = false;
            requestMainReady();
          }
        }).catch(() => {
          window.__pkMagnetCompanionMainReady = false;
          requestMainReady();
        });
      };
      const startReadyHeartbeat = () => {
        if (window.__pkMagnetCompanionReadyHeartbeat) return;
        // Re-register periodically so a suspended/restarted Service Worker
        // can recover this tab without requiring a page refresh.
        window.__pkMagnetCompanionReadyHeartbeat = window.setInterval(() => {
          if (window.__pkMagnetCompanionMainReady) {
            registerMainReady();
          } else {
            window.postMessage({ source: 'pk-magnet-companion', type: 'PK_QUERY_MAIN_READY' }, location.origin);
          }
        }, 10000);
      };
      const requestMainReady = () => {
        if (window.__pkMagnetCompanionMainReady) return;
        window.postMessage({ source: 'pk-magnet-companion', type: 'PK_QUERY_MAIN_READY' }, location.origin);
        if (window.__pkMagnetCompanionReadyRetryTimer) return;
        let attempts = 0;
        window.__pkMagnetCompanionReadyRetryTimer = window.setInterval(() => {
          if (window.__pkMagnetCompanionMainReady) {
            clearMainReadyPolling();
            startReadyHeartbeat();
            return;
          }
          window.postMessage({ source: 'pk-magnet-companion', type: 'PK_QUERY_MAIN_READY' }, location.origin);
          attempts++;
          if (attempts >= 20) {
            clearInterval(window.__pkMagnetCompanionReadyRetryTimer);
            window.__pkMagnetCompanionReadyRetryTimer = 0;
            startReadyHeartbeat();
          }
        }, 500);
      };
      window.addEventListener('message', (event) => {
        if (event.origin !== location.origin) return;
        const data = event.data || {};
        if (data.source !== 'pk-enhancement-master') return;
        if (data.type === 'PK_MAIN_READY') {
          window.__pkMagnetCompanionMainReady = true;
          clearMainReadyPolling();
          registerMainReady();
          startReadyHeartbeat();
        } else if (data.type === 'PK_MAGNET_ACCEPTED') {
          chrome.runtime.sendMessage({
            type: 'PK_MAIN_MAGNET_ACCEPTED',
            requestId: String(data.requestId || '')
          }).catch(() => {});
        } else if (data.type === 'PK_MAGNET_REJECTED') {
          chrome.runtime.sendMessage({
            type: 'PK_MAIN_MAGNET_REJECTED',
            requestId: String(data.requestId || ''),
            reason: String(data.reason || '')
          }).catch(() => {});
        }
      });
      requestMainReady();
    }
    return;
  }

  let companionConfig = { ...DEFAULT_CONFIG };
  let lastSignature = '';
  let inspectTimer = 0;
  let confirmHideTimer = 0;
  let pendingSelection = null;
  let confirmHost = null;
  let confirmShadow = null;
  let noticeHost = null;
  let noticeTimer = 0;

  const showNotice = (message) => {
    const text = String(message || '').trim();
    if (!text) return;
    if (noticeHost) noticeHost.remove();
    noticeHost = document.createElement('div');
    noticeHost.style.cssText = 'all:initial;position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:2147483647;pointer-events:none;';
    const shadow = noticeHost.attachShadow({ mode: 'open' });
    shadow.innerHTML = '<style>.pk-notice{padding:10px 14px;border:1px solid rgba(255,255,255,.18);border-radius:10px;background:#202124;color:#f1f3f4;box-shadow:0 6px 24px rgba(0,0,0,.35);font:13px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;max-width:min(560px,calc(100vw - 32px));}</style><div class="pk-notice" role="status" aria-live="polite"></div>';
    shadow.querySelector('.pk-notice').textContent = text;
    (document.documentElement || document.body)?.appendChild(noticeHost);
    clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => {
      noticeHost?.remove();
      noticeHost = null;
    }, 5000);
  };

  chrome.runtime.onMessage.addListener((message) => {
    if (message?.type === 'PK_COMPANION_NOTICE') {
      showNotice(message.message || I18N.t(companionConfig.language, 'mainUnavailable'));
    }
  });

  const updateConfirmBarText = () => {
    if (!confirmShadow || !I18N) return;
    const label = confirmShadow.querySelector('.pk-label');
    const sendButton = confirmShadow.querySelector('#pk-send');
    const cancelButton = confirmShadow.querySelector('#pk-cancel');
    if (label && pendingSelection) {
      label.textContent = I18N.t(companionConfig.language, 'detected', { count: pendingSelection.links.length });
    }
    if (sendButton) sendButton.textContent = I18N.t(companionConfig.language, 'send');
    if (cancelButton) cancelButton.textContent = I18N.t(companionConfig.language, 'ignore');
  };

  const hideConfirmBar = () => {
    clearTimeout(confirmHideTimer);
    pendingSelection = null;
    if (confirmHost) {
      confirmHost.hidden = true;
      confirmHost.style.display = 'none';
    }
  };

  const sendSelectedMagnet = (selection, explicit) => {
    if (!selection?.links?.length) return;
    chrome.runtime.sendMessage({
      type: 'PK_SELECTED_MAGNET',
      explicit: explicit === true,
      text: selection.text,
      links: selection.links,
      sourceUrl: location.href,
      sourceTitle: document.title
    }).then((response) => {
      if (!response?.ok && (response?.reason === 'no-ready-tab' || response?.reason === 'delivery-failed')) {
        showNotice(I18N.t(companionConfig.language, 'mainUnavailable'));
      }
    }).catch(() => showNotice(I18N.t(companionConfig.language, 'mainUnavailable')));
  };

  const ensureConfirmBar = () => {
    if (confirmHost && confirmShadow) return;

    confirmHost = document.createElement('div');
    confirmHost.style.all = 'initial';
    confirmHost.hidden = true;
    confirmHost.style.position = 'fixed';
    confirmHost.style.left = '50%';
    confirmHost.style.bottom = '24px';
    confirmHost.style.transform = 'translateX(-50%)';
    confirmHost.style.zIndex = '2147483647';
    confirmHost.style.pointerEvents = 'auto';
    confirmHost.style.display = 'none';
    confirmShadow = confirmHost.attachShadow({ mode: 'open' });
    confirmShadow.innerHTML = `
      <style>
        :host { all: initial; }
        .pk-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border: 1px solid rgba(255,255,255,.18);
          border-radius: 12px;
          background: #202124;
          color: #f1f3f4;
          box-shadow: 0 6px 24px rgba(0,0,0,.35);
          font: 13px/1.3 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          white-space: nowrap;
        }
        .pk-label { opacity: .92; }
        button {
          border: 0;
          border-radius: 7px;
          padding: 6px 10px;
          cursor: pointer;
          font: inherit;
        }
        #pk-send { background: #4aa3ff; color: #07111d; font-weight: 600; }
        #pk-cancel { background: transparent; color: #c7c9cc; }
        button:hover { filter: brightness(1.12); }
      </style>
      <div class="pk-wrap" role="status" aria-live="polite">
        <span class="pk-label"></span>
        <button id="pk-send" type="button">发送到 PikPak</button>
        <button id="pk-cancel" type="button">忽略</button>
      </div>`;
    updateConfirmBarText();

    confirmShadow.querySelector('#pk-send')?.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const selection = pendingSelection;
      hideConfirmBar();
      sendSelectedMagnet(selection, true);
    });
    confirmShadow.querySelector('#pk-cancel')?.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      hideConfirmBar();
    });
    (document.documentElement || document.body)?.appendChild(confirmHost);
  };

  const showConfirmBar = (selection) => {
    ensureConfirmBar();
    pendingSelection = selection;
    updateConfirmBarText();
    confirmHost.hidden = false;
    confirmHost.style.display = 'block';
    clearTimeout(confirmHideTimer);
    confirmHideTimer = window.setTimeout(hideConfirmBar, 8000);
  };

  const loadContentConfig = async () => {
    try {
      const result = await chrome.storage.local.get(CONFIG_STORAGE_KEY);
      companionConfig = normalizeConfig(result?.[CONFIG_STORAGE_KEY]);
    } catch (e) {
      companionConfig = { ...DEFAULT_CONFIG };
    }
    updateConfirmBarText();
    if (companionConfig.selectionMode !== 'confirm') hideConfirmBar();
  };

  loadContentConfig().catch(() => {});
  chrome.runtime.sendMessage({ type: 'PK_GET_CONFIG' }).then((response) => {
    if (!response?.config) return;
    companionConfig = normalizeConfig(response.config);
    updateConfirmBarText();
    if (companionConfig.selectionMode !== 'confirm') hideConfirmBar();
  }).catch(() => {});
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== 'local' || !changes[CONFIG_STORAGE_KEY]) return;
    companionConfig = normalizeConfig(changes[CONFIG_STORAGE_KEY].newValue);
    updateConfirmBarText();
    if (companionConfig.selectionMode !== 'confirm') hideConfirmBar();
  });

  const inspectSelection = () => {
    clearTimeout(inspectTimer);

    // Clear the prompt synchronously when the selection is already gone.
    // This avoids waiting for the debounced inspection or a focus change.
    const immediateText = String(window.getSelection?.()?.toString() || '').trim();
    if (!immediateText || !extractMagnets(immediateText).length) {
      lastSignature = '';
      hideConfirmBar();
      return;
    }

    inspectTimer = setTimeout(() => {
      const text = String(window.getSelection?.()?.toString() || '').trim();
      const links = extractMagnets(text);
      if (!text || !links.length) {
        lastSignature = '';
        hideConfirmBar();
        return;
      }

      const active = document.activeElement;
      const tag = String(active?.tagName || '').toLowerCase();
      if (active?.isContentEditable || ['input', 'textarea', 'select'].includes(tag)) return;

      const signature = links.join('\n');
      if (signature === lastSignature) return;
      lastSignature = signature;

      const selection = { text, links, signature };
      if (companionConfig.selectionMode === 'off') {
        hideConfirmBar();
      } else if (companionConfig.selectionMode === 'auto') {
        hideConfirmBar();
        sendSelectedMagnet(selection, false);
      } else {
        showConfirmBar(selection);
      }
    }, 180);
  };

  document.addEventListener('mouseup', inspectSelection, true);
  document.addEventListener('keyup', inspectSelection, true);
  document.addEventListener('selectionchange', inspectSelection, true);
  document.addEventListener('pointerdown', (event) => {
    if (!confirmHost || confirmHost.hidden) return;
    const path = event.composedPath?.() || [];
    if (!path.includes(confirmHost)) hideConfirmBar();
  }, true);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hideConfirmBar();
  }, true);
})();
