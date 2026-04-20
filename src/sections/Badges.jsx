import SectionHead from '../components/SectionHead.jsx';

export default function Badges() {
  return (
    <section id="badges" className="ds-section">
      <SectionHead kicker="§ 09 — Componentes" title="Badges." />
      <div className="comp-row">
        <span className="badge badge-purple">PLATFORM</span>
        <span className="badge badge-lime">CFP ABIERTO</span>
        <span className="badge badge-dark"><span className="dot" />LIVE</span>
        <span className="badge badge-outline">DEVSECOPS</span>
        <span className="badge badge-success">CONFIRMADO</span>
        <span className="badge badge-warn">PENDIENTE</span>
        <span className="badge badge-error">CERRADO</span>
      </div>
    </section>
  );
}
