import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

const radii = [
  { label: 'xs · 4', r: 4 },
  { label: 'sm · 8', r: 8 },
  { label: 'md · 12', r: 12 },
  { label: 'lg · 16', r: 16 },
  { label: 'xl · 20', r: 20 },
  { label: 'full', r: 999 },
];

export default function Radius() {
  const { t } = useI18n();
  const s = t.radius;
  return (
    <section id="radius" className="ds-section">
      <SectionHead sectionId="radius" kicker={s.kicker} title={s.title} />
      <div className="radius-grid">
        {radii.map((r) => (
          <div className="radius-item" key={r.label} style={{ borderRadius: r.r }}>
            <span>{r.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
