import SectionHead from '../components/SectionHead.jsx';

function Swatch({ hex, chipClass = '', name, meta }) {
  return (
    <div className="swatch">
      <div className={`swatch-chip ${chipClass}`.trim()} style={{ background: hex }}>
        <span className="hex">{hex}</span>
      </div>
      <div className="swatch-info">
        <div className="name">{name}</div>
        <div className="meta">{meta}</div>
      </div>
    </div>
  );
}

const brand = [
  { hex: '#53099E', name: 'Infinity Purple', meta: '--purple · brand.primary' },
  { hex: '#2E005A', name: 'Purple Deep', meta: '--purple-deep · hover' },
  { hex: '#A17CD1', name: 'Cloud Mauve', meta: '--purple-tint · accent' },
  { hex: '#A3E37C', name: 'Deploy Lime', meta: '--lime · brand.secondary', chipClass: 'ink' },
  { hex: '#C5EFA8', name: 'Lime Soft', meta: '--lime-soft · subtle', chipClass: 'ink' },
];

const neutrals = [
  { hex: '#0E0520', name: 'Deep Night', meta: '--ink · text.primary' },
  { hex: '#1A0A36', name: 'Ink 2', meta: '--ink-2 · surface.dark' },
  { hex: '#8A8496', name: 'Mute', meta: '--mute · text.tertiary' },
  { hex: '#E6E1DA', name: 'Line', meta: '--line · border', chipClass: 'ink' },
  { hex: '#FBFAF7', name: 'Paper', meta: '--paper · surface', chipClass: 'ink' },
];

const semantics = [
  { hex: '#22A06B', name: 'Success', meta: '--success' },
  { hex: '#E6A100', name: 'Warn', meta: '--warn', chipClass: 'ink' },
  { hex: '#D6361C', name: 'Error', meta: '--error' },
  { hex: '#3B7BD6', name: 'Info', meta: '--info' },
  { hex: '#EDE6F5', name: 'Purple Wash', meta: '--purple-wash · tint', chipClass: 'ink' },
];

export default function Color() {
  return (
    <section id="color" className="ds-section">
      <SectionHead
        sectionId="color"
        kicker="04 — Color"
        title="Paleta <em>extendida.</em>"
        lead="Infinity Purple + Deploy Lime como duo principal. Los neutrales construyen la arquitectura; los semánticos hablan del estado."
      />

      <h3 className="ds-h3">Marca</h3>
      <div className="color-grid">{brand.map((s) => <Swatch key={s.hex} {...s} />)}</div>

      <h3 className="ds-h3">Neutrales</h3>
      <div className="color-grid">{neutrals.map((s) => <Swatch key={s.hex} {...s} />)}</div>

      <h3 className="ds-h3">Semánticos</h3>
      <div className="color-grid">{semantics.map((s) => <Swatch key={s.hex} {...s} />)}</div>
    </section>
  );
}
