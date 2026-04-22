import SectionHead from '../components/SectionHead.jsx';

const icons = [
  'home', 'dashboard', 'devops', 'chip', 'bot', 'software', 'nfc', 'wifi',
  'id-card', 'perfil', 'group', 'vip', 'asistencia', 'merch', 'lunch', 'cofee',
  'breack', 'video', 'planet', 'trabajo', 'settings', 'bien', 'up', 'down',
];

export default function Icons() {
  return (
    <section id="icons" className="ds-section">
      <SectionHead
        sectionId="icons"
        kicker="14 — Componentes"
        title="Iconografía."
        lead="Librería de iconos custom del evento — estilo lineal con relleno púrpura. Tamaño base 24px."
      />
      <div className="icon-grid">
        {icons.map((name) => (
          <div className="icon-cell" key={name}>
            <img src={`/assets/icons/${name}.png`} alt={name} />
          </div>
        ))}
      </div>
    </section>
  );
}
