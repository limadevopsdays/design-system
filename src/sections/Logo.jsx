import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Logo() {
  const { t } = useI18n();
  const s = t.logo;
  return (
    <section id="logo" className="ds-section">
      <SectionHead sectionId="logo" kicker={s.kicker} title={s.title} lead={s.lead} />

      <h3 className="ds-h3">{s.approved}</h3>
      <div className="logo-grid">
        <div className="logo-tile paper">
          <img src="/assets/logo-full-color.png" alt="Logo full color" />
          <span className="tag">{s.tags.fullColor}</span>
        </div>
        <div className="logo-tile dark">
          <img src="/assets/logo-dark-mode.png" alt="Logo dark" />
          <span className="tag">{s.tags.dark}</span>
        </div>
        <div className="logo-tile purple">
          <img src="/assets/isotipo-blanco.png" alt="Isotipo blanco" />
          <span className="tag">{s.tags.isoPurple}</span>
        </div>
      </div>

      <h3 className="ds-h3">{s.minSize}</h3>
      <div className="logo-sizes">
        <div className="logo-size-item">
          <img src="/assets/logo-full-color.png" style={{ height: 24 }} alt="" />
          <div className="type-label">{s.sizes.digital}</div>
        </div>
        <div className="logo-size-item">
          <img src="/assets/logo-full-color.png" style={{ height: 40 }} alt="" />
          <div className="type-label">{s.sizes.web}</div>
        </div>
        <div className="logo-size-item">
          <img src="/assets/logo-full-color.png" style={{ height: 64 }} alt="" />
          <div className="type-label">{s.sizes.print}</div>
        </div>
      </div>
    </section>
  );
}
