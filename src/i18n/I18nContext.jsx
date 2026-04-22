import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import es from './es.js';
import en from './en.js';

const dicts = { es, en };
const STORAGE_KEY = 'ddl-lang';

const I18nContext = createContext(null);

function detectInitial() {
  if (typeof window === 'undefined') return 'es';
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && dicts[saved]) return saved;
  const nav = navigator.language || 'es';
  return nav.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(detectInitial);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'en' ? 'en-US' : 'es';
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    t: dicts[lang],
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
