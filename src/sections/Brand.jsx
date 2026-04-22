import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Brand() {
  const { t } = useI18n();
  const s = t.brand;
  return (
    <section id="brand" className="ds-section">
      <SectionHead sectionId="brand" kicker={s.kicker} title={s.title} lead={s.lead} />
      <div className="cards-grid">
        {s.pillars.map((p) => (
          <div className="card" key={p.num}>
            <span className="num">{p.num}</span>
            <h4>{p.title}</h4>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
