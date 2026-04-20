import SectionHead from '../components/SectionHead.jsx';

export default function Logo() {
  return (
    <section id="logo" className="ds-section">
      <SectionHead
        kicker="§ 02 — Logotipo"
        title="Marca <em>principal.</em>"
        lead="Isotipo + logotipo. Usa la versión que mejor contraste con el fondo. Área de resguardo mínima: altura del isotipo."
      />

      <h3 className="ds-h3">Versiones aprobadas</h3>
      <div className="logo-grid">
        <div className="logo-tile paper">
          <img src="/assets/logo-full-color.png" alt="Logo full color" />
          <span className="tag">Full color · Fondo claro</span>
        </div>
        <div className="logo-tile dark">
          <img src="/assets/logo-dark-mode.png" alt="Logo dark" />
          <span className="tag">Dark mode</span>
        </div>
        <div className="logo-tile purple">
          <img src="/assets/isotipo-blanco.png" alt="Isotipo blanco" />
          <span className="tag">Isotipo sobre púrpura</span>
        </div>
      </div>

      <h3 className="ds-h3">Tamaños mínimos</h3>
      <div className="logo-sizes">
        <div className="logo-size-item">
          <img src="/assets/logo-full-color.png" style={{ height: 24 }} alt="" />
          <div className="type-label">Digital · 24px</div>
        </div>
        <div className="logo-size-item">
          <img src="/assets/logo-full-color.png" style={{ height: 40 }} alt="" />
          <div className="type-label">Web · 40px</div>
        </div>
        <div className="logo-size-item">
          <img src="/assets/logo-full-color.png" style={{ height: 64 }} alt="" />
          <div className="type-label">Print · 15mm</div>
        </div>
      </div>
    </section>
  );
}
