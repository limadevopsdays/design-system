const groups = [
  {
    title: 'Fundamentos',
    items: [
      { id: 'brand', label: 'Esencia de marca' },
      { id: 'logo', label: 'Logotipo' },
      { id: 'color', label: 'Color' },
      { id: 'type', label: 'Tipografía' },
    ],
  },
  {
    title: 'Tokens',
    items: [
      { id: 'spacing', label: 'Espaciado' },
      { id: 'radius', label: 'Radios' },
      { id: 'elevation', label: 'Elevación' },
    ],
  },
  {
    title: 'Componentes',
    items: [
      { id: 'buttons', label: 'Botones' },
      { id: 'badges', label: 'Badges' },
      { id: 'forms', label: 'Formularios' },
      { id: 'cards', label: 'Cards' },
      { id: 'alerts', label: 'Alertas' },
      { id: 'icons', label: 'Iconos' },
      { id: 'patterns', label: 'Patrones' },
    ],
  },
  {
    title: 'Expresión',
    items: [
      { id: 'voice', label: 'Voz y tono' },
      { id: 'dodont', label: "Do & Don't" },
    ],
  },
];

export default function Sidebar({ activeId }) {
  return (
    <aside>
      <div className="logo">
        <div className="mark">DD</div>
        <div className="name">
          DevOpsDays <em>Lima</em>
          <small>Design System v1.0</small>
        </div>
      </div>

      {groups.map((group) => (
        <div key={group.title}>
          <div className="nav-section">{group.title}</div>
          <nav>
            {group.items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeId === item.id ? 'is-active' : ''}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ))}

      <div className="aside-foot">
        27–28 · AGO · 2026<br />
        Lima · Perú<br /><br />
        marketing@devopsdays.pe<br />
        devopsdays.pe
      </div>
    </aside>
  );
}

export const sectionIds = groups.flatMap((g) => g.items.map((i) => i.id));
