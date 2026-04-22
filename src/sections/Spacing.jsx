import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

const scale = [
  ['s-1', 4], ['s-2', 8], ['s-3', 12], ['s-4', 16], ['s-5', 20],
  ['s-6', 24], ['s-8', 32], ['s-10', 40], ['s-12', 48], ['s-16', 64], ['s-20', 80],
];

export default function Spacing() {
  const { t } = useI18n();
  const s = t.spacing;
  return (
    <section id="spacing" className="ds-section">
      <SectionHead sectionId="spacing" kicker={s.kicker} title={s.title} lead={s.lead} />
      <div className="space-grid">
        {scale.map(([name, px]) => (
          <div className="space-item" key={name}>
            <div className="space-bar" style={{ width: px, height: px }} />
            <div className="space-label"><strong>{name}</strong>{px}px</div>
          </div>
        ))}
      </div>
    </section>
  );
}
