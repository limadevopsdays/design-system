import { useI18n } from '../i18n/I18nContext.jsx';

const structure = [
  { key: 'fundamentos', ids: ['brand', 'logo', 'mascota', 'color', 'type'] },
  { key: 'tokens', ids: ['spacing', 'radius', 'elevation'] },
  { key: 'componentes', ids: ['buttons', 'badges', 'forms', 'cards', 'alerts', 'icons', 'patterns'] },
  { key: 'expresion', ids: ['voice', 'dodont'] },
];

export const sectionIds = structure.flatMap((g) => g.ids);

export default function Sidebar({ activeId, open, onClose }) {
  const { t } = useI18n();
  const sb = t.sidebar;

  return (
    <aside className={open ? 'is-open' : ''}>
      <button
        type="button"
        className="nav-close"
        aria-label={sb.navClose}
        onClick={onClose}
      >
        ×
      </button>

      <div className="logo">
        <div className="mark">DD</div>
        <div className="name">
          DevOpsDays <em>Lima</em>
          <small>Design System v1.0</small>
        </div>
      </div>

      {structure.map((group) => (
        <div key={group.key}>
          <div className="nav-section">{sb.groups[group.key]}</div>
          <nav>
            {group.ids.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeId === id ? 'is-active' : ''}
                onClick={onClose}
              >
                {sb.items[id]}
              </a>
            ))}
          </nav>
        </div>
      ))}

      <div className="aside-foot">
        {sb.foot.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}
      </div>
    </aside>
  );
}
