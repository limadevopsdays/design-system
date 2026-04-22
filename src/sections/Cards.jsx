import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Cards() {
  const { t } = useI18n();
  const s = t.cards;
  return (
    <section id="cards" className="ds-section">
      <SectionHead sectionId="cards" kicker={s.kicker} title={s.title} />
      <div className="cards-grid">
        {s.items.map((i) => (
          <div className="card" key={i.num}>
            <span className="num">{i.num}</span>
            <h4>{i.title}</h4>
            <p>{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
