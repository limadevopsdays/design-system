import SectionHead from '../components/SectionHead.jsx';

const pillars = [
  { num: '01', title: 'Ágil', text: 'Deploys pequeños, iteración constante, feedback rápido. Lo mismo aplica al diseño: prototipar y ajustar.' },
  { num: '02', title: 'Endémico', text: 'Orgullosamente peruano. Referencias locales, color que remite a Lima y a la identidad latinoamericana.' },
  { num: '03', title: 'Preciso', text: 'Observabilidad, métricas y decisiones basadas en datos. Diseño con intención, nada de adornos gratuitos.' },
  { num: '04', title: 'Colaborativo', text: 'Como el colibrí poliniza, compartimos conocimiento para que todos crezcan. Open source, open community.' },
];

export default function Brand() {
  return (
    <section id="brand" className="ds-section">
      <SectionHead
        kicker="01 — Fundamentos"
        title="Esencia <em>de marca.</em>"
        lead="Cuatro atributos que guían toda decisión de diseño, copy e interacción. Si una pieza no refleja al menos dos de estos, no es DevOpsDays Lima."
      />
      <div className="cards-grid">
        {pillars.map((p) => (
          <div className="card" key={p.num}>
            <span className="num">{p.num}</span>
            <h4>{p.title}</h4>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
