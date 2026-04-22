import SectionHead from '../components/SectionHead.jsx';

const scale = [
  ['s-1', 4], ['s-2', 8], ['s-3', 12], ['s-4', 16], ['s-5', 20],
  ['s-6', 24], ['s-8', 32], ['s-10', 40], ['s-12', 48], ['s-16', 64], ['s-20', 80],
];

export default function Spacing() {
  return (
    <section id="spacing" className="ds-section">
      <SectionHead
        kicker="06 — Tokens"
        title="Espaciado <em>(base 4).</em>"
        lead="Una escala múltiplo de 4 para mantener ritmo vertical y horizontal consistente."
      />
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
