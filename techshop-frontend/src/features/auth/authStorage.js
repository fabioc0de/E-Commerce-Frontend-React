import { STORAGE_KEYS } from './constants';

const canUseStorage = () => {
    try {
      return typeof window !== 'undefined' && !!window.localStorage;
    } catch {
    return false;
    }
};

export const authStorage = {
  /** Devuelve { user, token } o null si no hay sesión válida */
  get() {
    if (!canUseStorage()) return null;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEYS.auth);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed?.token || !parsed?.user) return null;
      return { user: parsed.user, token: parsed.token };
    } catch {
      // Corrupto: lo limpiamos para no quedar en un crash loop al recargar
      try { window.localStorage.removeItem(STORAGE_KEYS.auth); } catch {}
      return null;
    }
  },

  set(session) {
    if (!canUseStorage()) return;
    try {
      if (!session) window.localStorage.removeItem(STORAGE_KEYS.auth);
      else window.localStorage.setItem(STORAGE_KEYS.auth, JSON.stringify(session));
    } catch {
      // quota / modo privado: no bloqueamos la app
    }
  },

  clear() {
    if (!canUseStorage()) return;
    try { window.localStorage.removeItem(STORAGE_KEYS.auth); } catch {}
  },
};