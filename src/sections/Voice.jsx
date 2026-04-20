import SectionHead from '../components/SectionHead.jsx';

const attrs = [
  {
    label: 'Atributo 01', title: 'Directo, no seco',
    desc: 'Vamos al grano sin perder calidez. Frases cortas, verbos activos, primera persona del plural cuando corresponde.',
    example: '"Abrimos el CFP. Cierra el 31 de mayo. Postula."',
  },
  {
    label: 'Atributo 02', title: 'Técnico, no hermético',
    desc: 'Usamos los términos correctos — SRE, platform, observability — pero los contextualizamos para quien recién llega.',
    example: '"Buscamos historias reales: migraciones dolorosas, postmortems honestos."',
  },
  {
    label: 'Atributo 03', title: 'Cálido, no informal',
    desc: 'Como un colega que explica algo en un coffee break. Peruanismos medidos, nunca forzados.',
    example: '"Nos vemos el 27 y 28. Traeremos el café."',
  },
  {
    label: 'Atributo 04', title: 'Honesto, no optimista',
    desc: 'No prometemos magia. Contamos lo que pasa, incluidas las fallas. Los postmortems honestos son la mejor charla.',
    example: '"No es una conferencia de vendors ni un desfile de logos."',
  },
];

export default function Voice() {
  return (
    <section id="voice" className="ds-section">
      <SectionHead
        kicker="§ 15 — Expresión"
        title="Voz <em>y tono.</em>"
        lead="Escribimos como hablamos: directo, técnico, con calidez peruana. Sin corporativismo, sin jerga vacía."
      />
      <div className="voice-grid">
        {attrs.map((a) => (
          <div className="voice-card" key={a.label}>
            <div className="v-lbl">{a.label}</div>
            <h5>{a.title}</h5>
            <p>{a.desc}</p>
            <div className="ex">{a.example}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
