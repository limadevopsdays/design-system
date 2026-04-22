import { useState } from 'react';
import SectionHead from '../components/SectionHead.jsx';

const mascotas = [
  { src: '/assets/mascota/mascota-1.png', name: 'Mascota 01' },
  { src: '/assets/mascota/mascota-2.png', name: 'Mascota 02' },
  { src: '/assets/mascota/mascota-3.png', name: 'Mascota 03' },
  { src: '/assets/mascota/mascota-4.png', name: 'Mascota 04' },
];

const tones = [
  { id: 'white', label: 'Blanco' },
  { id: 'paper', label: 'Claro' },
  { id: 'ink', label: 'Ink' },
  { id: 'purple', label: 'Púrpura' },
  { id: 'lime', label: 'Lime' },
];

function MascotTile({ src, name }) {
  const [tone, setTone] = useState('paper');
  return (
    <div className="mascot-tile">
      <div className={`mascot-stage tone-${tone}`}>
        <img src={src} alt={name} />
      </div>
      <div className="mascot-info">
        <div className="mascot-name">{name}</div>
        <div className="mascot-tones" role="group" aria-label={`Fondo de ${name}`}>
          {tones.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`tone-btn tone-${t.id}${tone === t.id ? ' is-active' : ''}`}
              onClick={() => setTone(t.id)}
              aria-label={t.label}
              aria-pressed={tone === t.id}
              title={t.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Mascota() {
  return (
    <section id="mascota" className="ds-section">
      <SectionHead
        kicker="03 — Mascota"
        title="Mascota <em>oficial.</em>"
        lead="Personaje del evento: un colibrí que poliniza conocimiento entre la comunidad DevOps. Úsalo como acento narrativo, no como reemplazo del logo."
      />

      <h3 className="ds-h3">Versiones y fondos</h3>
      <div className="mascot-grid">
        {mascotas.map((m) => (
          <MascotTile key={m.name} {...m} />
        ))}
      </div>
    </section>
  );
}
