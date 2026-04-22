import SectionHead from '../components/SectionHead.jsx';

const radii = [
  { label: 'xs · 4', r: 4 },
  { label: 'sm · 8', r: 8 },
  { label: 'md · 12', r: 12 },
  { label: 'lg · 16', r: 16 },
  { label: 'xl · 20', r: 20 },
  { label: 'full', r: 999 },
];

export default function Radius() {
  return (
    <section id="radius" className="ds-section">
      <SectionHead sectionId="radius" kicker="07 — Tokens" title="Radios <em>y formas.</em>" />
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
