import SectionHead from '../components/SectionHead.jsx';

const alerts = [
  { kind: 'info', label: 'Información', text: 'El venue oficial se anuncia en julio 2026.' },
  { kind: 'success', label: 'Éxito', text: 'Tu postulación al CFP fue recibida. Respondemos antes del 15 de junio.' },
  { kind: 'warn', label: 'Aviso', text: 'El cierre de postulaciones es el 31 de mayo. No habrá extensión.' },
  { kind: 'error', label: 'Error', text: 'No pudimos procesar tu pago. Revisa los datos de tu tarjeta.' },
  { kind: 'purple', label: 'Destacado', text: 'Early bird cierra este domingo. 40% off en entradas.' },
];

export default function Alerts() {
  return (
    <section id="alerts" className="ds-section">
      <SectionHead kicker="§ 12 — Componentes" title="Alertas." />
      {alerts.map((a) => (
        <div className={`alert ${a.kind}`} key={a.kind}>
          <div><strong>{a.label} ·</strong> {a.text}</div>
        </div>
      ))}
    </section>
  );
}
