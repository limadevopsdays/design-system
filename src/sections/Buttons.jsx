import SectionHead from '../components/SectionHead.jsx';

export default function Buttons() {
  return (
    <section id="buttons" className="ds-section">
      <SectionHead
        kicker="§ 08 — Componentes"
        title="Botones."
        lead="Pill shape (radius full). Alturas 36 / 44 / 52. Primary = púrpura. Secondary = lime. Ghost para acciones terciarias."
      />

      <h3 className="ds-h3">Variantes</h3>
      <div className="comp-row">
        <button className="btn btn-primary">Postular charla</button>
        <button className="btn btn-secondary">Ver agenda</button>
        <button className="btn btn-dark">Contactar</button>
        <button className="btn btn-ghost">Cancelar</button>
        <button className="btn btn-danger">Eliminar</button>
      </div>

      <h3 className="ds-h3">Tamaños</h3>
      <div className="comp-row">
        <button className="btn btn-primary btn-sm">Small</button>
        <button className="btn btn-primary">Medium</button>
        <button className="btn btn-primary btn-lg">Large</button>
      </div>

      <h3 className="ds-h3">Estados</h3>
      <div className="comp-row">
        <button className="btn btn-primary">Default</button>
        <button
          className="btn btn-primary"
          style={{
            background: 'var(--purple-deep)',
            transform: 'translateY(-2px)',
            boxShadow: 'var(--sh-3)',
          }}
        >
          Hover
        </button>
        <button
          className="btn btn-primary"
          style={{ outline: '3px solid rgba(83,9,158,0.3)' }}
        >
          Focus
        </button>
        <button className="btn btn-primary is-disabled">Disabled</button>
      </div>
    </section>
  );
}
