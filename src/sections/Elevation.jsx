import SectionHead from '../components/SectionHead.jsx';

const levels = [
  { cls: 's1', label: 'sh-1', name: 'Resting' },
  { cls: 's2', label: 'sh-2', name: 'Hover / card' },
  { cls: 's3', label: 'sh-3', name: 'Overlay' },
  { cls: 's4', label: 'sh-4', name: 'Modal' },
];

export default function Elevation() {
  return (
    <section id="elevation" className="ds-section">
      <SectionHead
        kicker="08 — Tokens"
        title="Elevación."
        lead="Cuatro niveles. Sombras con tinte púrpura para mantener coherencia cromática."
      />
      <div className="shadow-grid">
        {levels.map((l) => (
          <div className={`shadow-item ${l.cls}`} key={l.label}>
            <div className="shadow-label">{l.label}</div>
            <div className="shadow-name">{l.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
