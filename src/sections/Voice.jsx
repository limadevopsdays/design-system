import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Voice() {
  const { t } = useI18n();
  const s = t.voice;
  return (
    <section id="voice" className="ds-section">
      <SectionHead sectionId="voice" kicker={s.kicker} title={s.title} lead={s.lead} />
      <div className="voice-grid">
        {s.attrs.map((a) => (
          <div className="voice-card" key={a.label}>
            <div className="v-lbl">{a.label}</div>
            <h5>{a.title}</h5>
            <p>{a.desc}</p>
            <div className="ex">{a.example}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
