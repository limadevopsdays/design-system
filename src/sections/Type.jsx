import SectionHead from '../components/SectionHead.jsx';

const scale = [
  { label: 'Display XL', cls: 't-display-xl', sample: 'Deploy together.', specs: '64/60 · 900 · -0.03em' },
  { label: 'Display LG', cls: 't-display-lg', sample: 'Build. Ship. Operate.', specs: '48/46 · 800 · -0.02em' },
  { label: 'Display MD', cls: 't-display-md', sample: 'Construir comunidad', specs: '32/34 · 800 · -0.01em' },
  { label: 'Display SM', cls: 't-display-sm', sample: 'Sección de contenido', specs: '22/25 · 700' },
  { label: 'Body LG', cls: 't-body-lg', sample: 'Dos días. Una comunidad. Developers, SREs y platform engineers.', specs: '18/27 · 400' },
  { label: 'Body MD', cls: 't-body-md', sample: 'Párrafo de lectura estándar para descripciones y bloques informativos.', specs: '15/23 · 400' },
  { label: 'Body SM', cls: 't-body-sm', sample: 'Texto de apoyo, captions y metadata secundaria.', specs: '13/20 · 400' },
  { label: 'Mono', cls: 't-mono', sample: '27 · AGO · 2026 — .DEPLOY', specs: '12 · 500 · 0.08em' },
];

export default function Type() {
  return (
    <section id="type" className="ds-section">
      <SectionHead
        kicker="05 — Tipografía"
        title="Sistema <em>tipográfico.</em>"
        lead="Orbitron para titulares de alto impacto, Poppins para lectura sostenida, JetBrains Mono para datos y código."
      />

      <div className="font-showcase">
        <div className="font-card display">
          <div className="role">Display · Orbitron</div>
          <div className="big" style={{ marginTop: 12 }}>Aa Gg Qq</div>
          <div className="desc">Geométrica, tecnológica, futurista. Para titulares, CTA, ticker y elementos que deben gritar.</div>
          <div className="weights">
            <span>400 Regular</span>
            <span>500 Medium</span>
            <span>700 Bold</span>
            <span>800 ExtraBold</span>
            <span>900 Black</span>
          </div>
        </div>
        <div className="font-card text">
          <div className="role">Text · Poppins</div>
          <div className="big" style={{ marginTop: 12 }}>Aa Gg Qq</div>
          <div className="desc">Humana, legible, cálida. Para cuerpo de texto, párrafos largos, formularios y UI.</div>
          <div className="weights">
            <span>300 Light</span>
            <span>400 Regular</span>
            <span>500 Medium</span>
            <span>600 SemiBold</span>
            <span>700 Bold</span>
          </div>
        </div>
      </div>

      <h3 className="ds-h3">Escala</h3>
      <div>
        {scale.map((row) => (
          <div className="type-row" key={row.label}>
            <div className="type-label">{row.label}</div>
            <div className={row.cls}>{row.sample}</div>
            <div className="type-specs">{row.specs}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
