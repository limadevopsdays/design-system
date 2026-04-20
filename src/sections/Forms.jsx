import SectionHead from '../components/SectionHead.jsx';

export default function Forms() {
  return (
    <section id="forms" className="ds-section">
      <SectionHead kicker="§ 10 — Componentes" title="Formularios." />

      <div className="forms-grid">
        <div className="field">
          <label>Nombre completo</label>
          <input type="text" placeholder="Quri Colibrí" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" placeholder="you@empresa.pe" />
          <span className="hint">Respondemos en 48h</span>
        </div>
        <div className="field">
          <label>Eje temático</label>
          <select defaultValue="IA Empresarial">
            <option>IA Empresarial</option>
            <option>Liderazgo Moderno</option>
            <option>Ingeniería de Plataformas</option>
            <option>Seguridad</option>
          </select>
        </div>
        <div className="field">
          <label>Formato</label>
          <select defaultValue="Keynote (30 min)">
            <option>Keynote (30 min)</option>
            <option>Session (25 min)</option>
            <option>Panel (50 min)</option>
            <option>Taller (90 min)</option>
          </select>
        </div>
        <div className="field full">
          <label>Resumen de la charla</label>
          <textarea rows={4} placeholder="Cuéntanos tu historia, problema resuelto o hallazgo..." />
        </div>
      </div>
    </section>
  );
}
