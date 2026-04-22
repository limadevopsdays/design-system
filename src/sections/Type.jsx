import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

const scaleEs = [
  { label: 'Display XL', cls: 't-display-xl', sample: 'Deploy together.', specs: '64/60 · 900 · -0.03em' },
  { label: 'Display LG', cls: 't-display-lg', sample: 'Build. Ship. Operate.', specs: '48/46 · 800 · -0.02em' },
  { label: 'Display MD', cls: 't-display-md', sample: 'Construir comunidad', specs: '32/34 · 800 · -0.01em' },
  { label: 'Display SM', cls: 't-display-sm', sample: 'Sección de contenido', specs: '22/25 · 700' },
  { label: 'Body LG', cls: 't-body-lg', sample: 'Dos días. Una comunidad. Developers, SREs y platform engineers.', specs: '18/27 · 400' },
  { label: 'Body MD', cls: 't-body-md', sample: 'Párrafo de lectura estándar para descripciones y bloques informativos.', specs: '15/23 · 400' },
  { label: 'Body SM', cls: 't-body-sm', sample: 'Texto de apoyo, captions y metadata secundaria.', specs: '13/20 · 400' },
  { label: 'Mono', cls: 't-mono', sample: '27 · AGO · 2026 — .DEPLOY', specs: '12 · 500 · 0.08em' },
];

const scaleEn = [
  { label: 'Display XL', cls: 't-display-xl', sample: 'Deploy together.', specs: '64/60 · 900 · -0.03em' },
  { label: 'Display LG', cls: 't-display-lg', sample: 'Build. Ship. Operate.', specs: '48/46 · 800 · -0.02em' },
  { label: 'Display MD', cls: 't-display-md', sample: 'Build community', specs: '32/34 · 800 · -0.01em' },
  { label: 'Display SM', cls: 't-display-sm', sample: 'Content section', specs: '22/25 · 700' },
  { label: 'Body LG', cls: 't-body-lg', sample: 'Two days. One community. Developers, SREs and platform engineers.', specs: '18/27 · 400' },
  { label: 'Body MD', cls: 't-body-md', sample: 'Standard reading paragraph for descriptions and informational blocks.', specs: '15/23 · 400' },
  { label: 'Body SM', cls: 't-body-sm', sample: 'Supporting text, captions and secondary metadata.', specs: '13/20 · 400' },
  { label: 'Mono', cls: 't-mono', sample: 'AUG · 27 · 2026 — .DEPLOY', specs: '12 · 500 · 0.08em' },
];

export default function Type() {
  const { t, lang } = useI18n();
  const s = t.type;
  const scale = lang === 'en' ? scaleEn : scaleEs;
  return (
    <section id="type" className="ds-section">
      <SectionHead sectionId="type" kicker={s.kicker} title={s.title} lead={s.lead} />

      <div className="font-showcase">
        <div className="font-card display">
          <div className="role">{s.roles.display}</div>
          <div className="big" style={{ marginTop: 12 }}>Aa Gg Qq</div>
          <div className="desc">{s.roles.displayDesc}</div>
          <div className="weights">
            <span>400 Regular</span>
            <span>500 Medium</span>
            <span>700 Bold</span>
            <span>800 ExtraBold</span>
            <span>900 Black</span>
          </div>
        </div>
        <div className="font-card text">
          <div className="role">{s.roles.text}</div>
          <div className="big" style={{ marginTop: 12 }}>Aa Gg Qq</div>
          <div className="desc">{s.roles.textDesc}</div>
          <div className="weights">
            <span>300 Light</span>
            <span>400 Regular</span>
            <span>500 Medium</span>
            <span>600 SemiBold</span>
            <span>700 Bold</span>
          </div>
        </div>
      </div>

      <h3 className="ds-h3">{s.scaleHeading}</h3>
      <div>
        {scale.map((row) => (
          <div className="type-row" key={row.label}>
            <div className="type-label">{row.label}</div>
            <div className={row.cls}>{row.sample}</div>
            <div className="type-specs">{row.specs}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
