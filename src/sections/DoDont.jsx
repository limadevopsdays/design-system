import SectionHead from '../components/SectionHead.jsx';

const dos = [
  'Usar Orbitron solo para titulares y CTA',
  'Mantener el púrpura como protagonista del fondo oscuro',
  'Acompañar lime siempre con suficiente masa de color',
  'Respetar el área de resguardo del logotipo',
  'Escribir con frases cortas, verbos activos',
  'Mostrar a Quri con su polo púrpura original',
];

const donts = [
  'Usar Orbitron para cuerpo de texto largo',
  'Cambiar los colores del logotipo',
  'Usar lime como texto sobre blanco (falla contraste)',
  'Rotar, deformar o aplicar efectos al isotipo',
  'Escribir en mayúsculas grandes bloques de texto',
  'Dibujar a Quri con estilos que contradigan la identidad',
];

export default function DoDont() {
  return (
    <section id="dodont" className="ds-section">
      <SectionHead kicker="§ 16 — Expresión" title="Hacer <em>y no hacer.</em>" />
      <div className="dodont">
        <div className="dodont-card do">
          <div className="dodont-hd">✓ Hacer</div>
          <div className="dodont-body">
            <ul>{dos.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
        <div className="dodont-card dont">
          <div className="dodont-hd">✕ No hacer</div>
          <div className="dodont-body">
            <ul>{donts.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
