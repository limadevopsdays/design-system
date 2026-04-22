import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

const icons = [
  'home', 'dashboard', 'devops', 'chip', 'bot', 'software', 'nfc', 'wifi',
  'id-card', 'perfil', 'group', 'vip', 'asistencia', 'merch', 'lunch', 'cofee',
  'breack', 'video', 'planet', 'trabajo', 'settings', 'bien', 'up', 'down',
];

export default function Icons() {
  const { t } = useI18n();
  const s = t.icons;
  return (
    <section id="icons" className="ds-section">
      <SectionHead sectionId="icons" kicker={s.kicker} title={s.title} lead={s.lead} />
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
