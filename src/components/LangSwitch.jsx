import { useI18n } from '../i18n/I18nContext.jsx';

const OPTIONS = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
];

export default function LangSwitch() {
  const { lang, setLang } = useI18n();
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {OPTIONS.map((o) => (
        <button
          key={o.code}
          type="button"
          className={`lang-btn${lang === o.code ? ' is-active' : ''}`}
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
