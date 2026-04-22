import SectionHead from '../components/SectionHead.jsx';

const items = [
  { num: '01', title: 'IA Empresarial y Datos', text: 'Casos de estudio sobre despliegue de IA a escala, de experimentación a ROI, preparación de datos.' },
  { num: '02', title: 'Liderazgo Moderno', text: 'Construir equipos de alto rendimiento, cultura laboral positiva, transformación digital.' },
  { num: '03', title: 'Plataformas y DevOps', text: 'Buenas prácticas en DevOps, platform engineering y entrega de software.' },
];

export default function Cards() {
  return (
    <section id="cards" className="ds-section">
      <SectionHead sectionId="cards" kicker="12 — Componentes" title="Cards." />
      <div className="cards-grid">
        {items.map((i) => (
          <div className="card" key={i.num}>
            <span className="num">{i.num}</span>
            <h4>{i.title}</h4>
            <p>{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
