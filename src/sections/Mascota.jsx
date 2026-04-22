import { useState } from 'react';
import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

const items = [
  '/assets/mascota/mascota-1.png',
  '/assets/mascota/mascota-2.png',
  '/assets/mascota/mascota-3.png',
  '/assets/mascota/mascota-4.png',
];

function MascotTile({ src, name, tones, backgroundOf }) {
  const [tone, setTone] = useState('paper');
  return (
    <div className="mascot-tile">
      <div className={`mascot-stage tone-${tone}`}>
        <img src={src} alt={name} />
      </div>
      <div className="mascot-info">
        <div className="mascot-name">{name}</div>
        <div className="mascot-tones" role="group" aria-label={`${backgroundOf} ${name}`}>
          {Object.entries(tones).map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={`tone-btn tone-${id}${tone === id ? ' is-active' : ''}`}
              onClick={() => setTone(id)}
              aria-label={label}
              aria-pressed={tone === id}
              title={label}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Mascota() {
  const { t } = useI18n();
  const s = t.mascota;
  return (
    <section id="mascota" className="ds-section">
      <SectionHead sectionId="mascota" kicker={s.kicker} title={s.title} lead={s.lead} />

      <h3 className="ds-h3">{s.heading}</h3>
      <div className="mascot-grid">
        {items.map((src, i) => (
          <MascotTile
            key={src}
            src={src}
            name={`${s.itemName} 0${i + 1}`}
            tones={s.tones}
            backgroundOf={s.backgroundOf}
          />
        ))}
      </div>
    </section>
  );
}
