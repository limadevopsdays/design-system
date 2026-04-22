import CopyMarkdownButton from './CopyMarkdownButton.jsx';
import LangSwitch from './LangSwitch.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';
import { buildFullMarkdown } from '../utils/markdown.js';

export default function Hero() {
  const { t, lang } = useI18n();
  const h = t.hero;
  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero-kicker">
          <span className="dot"></span>
          <span>{h.kicker}</span>
        </div>
        <LangSwitch />
      </div>
      <h1 dangerouslySetInnerHTML={{ __html: h.titleHtml }} />
      <p>{h.lead}</p>
      <div className="hero-actions">
        <CopyMarkdownButton
          getMarkdown={() => buildFullMarkdown(lang)}
          label={h.copy}
          variant="lime"
        />
      </div>
      <dl className="hero-meta">
        <div><dt>{h.meta.version}</dt><dd className="lime">1.0.0</dd></div>
        <div><dt>{h.meta.updated}</dt><dd>{h.meta.updatedValue}</dd></div>
        <div><dt>{h.meta.base}</dt><dd>{h.meta.baseValue}</dd></div>
        <div><dt>{h.meta.license}</dt><dd>{h.meta.licenseValue}</dd></div>
      </dl>
    </div>
  );
}
