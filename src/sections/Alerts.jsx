import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Alerts() {
  const { t } = useI18n();
  const s = t.alerts;
  return (
    <section id="alerts" className="ds-section">
      <SectionHead sectionId="alerts" kicker={s.kicker} title={s.title} />
      {s.items.map((a) => (
        <div className={`alert ${a.kind}`} key={a.kind}>
          <div><strong>{a.label} ·</strong> {a.text}</div>
        </div>
      ))}
    </section>
  );
}
