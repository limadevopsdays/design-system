import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

const levels = [
  { cls: 's1', label: 'sh-1', key: 's1' },
  { cls: 's2', label: 'sh-2', key: 's2' },
  { cls: 's3', label: 'sh-3', key: 's3' },
  { cls: 's4', label: 'sh-4', key: 's4' },
];

export default function Elevation() {
  const { t } = useI18n();
  const s = t.elevation;
  return (
    <section id="elevation" className="ds-section">
      <SectionHead sectionId="elevation" kicker={s.kicker} title={s.title} lead={s.lead} />
      <div className="shadow-grid">
        {levels.map((l) => (
          <div className={`shadow-item ${l.cls}`} key={l.label}>
            <div className="shadow-label">{l.label}</div>
            <div className="shadow-name">{s.names[l.key]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
