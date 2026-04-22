import es from '../i18n/es.js';
import en from '../i18n/en.js';

const dicts = { es, en };

const color = (name, hex, meta) => `- **${name}** \`${hex}\` — ${meta}`;

const HEADERS = {
  es: {
    version: 'Versión',
    base: 'Base',
    license: 'Licencia',
    docHeader: (v, b, l) => `# DevOpsDays Lima 2026 — Design System\n\nVersión 1.0.0 · Base: ${b} · Licencia: ${l}\n\n`,
    approved: 'Versiones aprobadas',
    minSize: 'Tamaños mínimos',
    sizesDigital: 'Digital', sizesWeb: 'Web', sizesPrint: 'Print',
    pillarsLabel: 'atributos',
    scaleHeading: 'Escala',
    weightsFamily: 'Familias',
    display: 'Display',
    text: 'Text',
    mono: 'Mono',
    sizeCol: 'Tamaño', weightCol: 'Peso', spacingCol: 'Letter-spacing',
    tokenCol: 'Token', valueCol: 'Valor',
    variantsCol: 'Variante', paddingCol: 'Padding', fontCol: 'Font-size',
    tracks: 'Tracks',
    doHead: 'Hacer', dontHead: 'No hacer',
    mascotTones: 'Disponible sobre fondos: blanco, claro, ink, púrpura y lime.',
  },
  en: {
    version: 'Version',
    base: 'Base',
    license: 'License',
    docHeader: (v, b, l) => `# DevOpsDays Lima 2026 — Design System\n\nVersion 1.0.0 · Base: ${b} · License: ${l}\n\n`,
    approved: 'Approved versions',
    minSize: 'Minimum sizes',
    sizesDigital: 'Digital', sizesWeb: 'Web', sizesPrint: 'Print',
    pillarsLabel: 'attributes',
    scaleHeading: 'Scale',
    weightsFamily: 'Families',
    display: 'Display',
    text: 'Text',
    mono: 'Mono',
    sizeCol: 'Size', weightCol: 'Weight', spacingCol: 'Letter-spacing',
    tokenCol: 'Token', valueCol: 'Value',
    variantsCol: 'Variant', paddingCol: 'Padding', fontCol: 'Font-size',
    tracks: 'Tracks',
    doHead: 'Do', dontHead: "Don't",
    mascotTones: 'Available on backgrounds: white, light, ink, purple and lime.',
  },
};

function stripTags(html) {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function buildSections(lang) {
  const t = dicts[lang] || dicts.es;
  const H = HEADERS[lang] || HEADERS.es;

  return {
    brand: () => {
      const s = t.brand;
      const bullets = s.pillars.map((p) => `- **${p.title}** — ${p.text}`).join('\n');
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}\n\n${s.lead}\n\n${bullets}`;
    },
    logo: () => {
      const s = t.logo;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}\n\n${s.lead}\n\n**${H.approved}**\n- ${s.tags.fullColor}\n- ${s.tags.dark}\n- ${s.tags.isoPurple}\n\n**${H.minSize}**\n- ${s.sizes.digital}\n- ${s.sizes.web}\n- ${s.sizes.print}`;
    },
    mascota: () => {
      const s = t.mascota;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}\n\n${s.lead}\n\n${H.mascotTones}`;
    },
    color: () => {
      const s = t.color;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

### ${s.groups.brand}
${color('Infinity Purple', '#53099E', '--purple · brand.primary')}
${color('Purple Deep', '#2E005A', '--purple-deep · hover')}
${color('Cloud Mauve', '#A17CD1', '--purple-tint · accent')}
${color('Deploy Lime', '#A3E37C', '--lime · brand.secondary')}
${color('Lime Soft', '#C5EFA8', '--lime-soft · subtle')}

### ${s.groups.neutrals}
${color('Deep Night', '#0E0520', '--ink · text.primary')}
${color('Ink 2', '#1A0A36', '--ink-2 · surface.dark')}
${color('Mute', '#8A8496', '--mute · text.tertiary')}
${color('Line', '#E6E1DA', '--line · border')}
${color('Paper', '#FBFAF7', '--paper · surface')}

### ${s.groups.semantic}
${color('Success', '#22A06B', '--success')}
${color('Warn', '#E6A100', '--warn')}
${color('Error', '#D6361C', '--error')}
${color('Info', '#3B7BD6', '--info')}
${color('Purple Wash', '#EDE6F5', '--purple-wash · tint')}`;
    },
    type: () => {
      const s = t.type;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

**${H.weightsFamily}**
- ${H.display}: Orbitron (400/500/700/800/900)
- ${H.text}: Poppins (300/400/500/600/700)
- ${H.mono}: JetBrains Mono (400/500/600)

**${H.scaleHeading}**

| ${H.scaleHeading} | ${H.sizeCol} | ${H.weightCol} | ${H.spacingCol} |
| --- | --- | --- | --- |
| Display XL | 64px | 900 | -0.03em |
| Display LG | 48px | 800 | -0.02em |
| Display MD | 32px | 800 | -0.01em |
| Display SM | 22px | 700 | 0 |
| Body LG | 18px | 400 | 0 |
| Body MD | 15px | 400 | 0 |
| Body SM | 13px | 400 | 0 |
| ${H.mono} | 12px | 500 | 0.08em |`;
    },
    spacing: () => {
      const s = t.spacing;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

${s.lead}

| ${H.tokenCol} | ${H.valueCol} |
| --- | --- |
| \`--s-1\` | 4px |
| \`--s-2\` | 8px |
| \`--s-3\` | 12px |
| \`--s-4\` | 16px |
| \`--s-5\` | 20px |
| \`--s-6\` | 24px |
| \`--s-8\` | 32px |
| \`--s-10\` | 40px |
| \`--s-12\` | 48px |
| \`--s-16\` | 64px |
| \`--s-20\` | 80px |`;
    },
    radius: () => {
      const s = t.radius;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

| ${H.tokenCol} | ${H.valueCol} |
| --- | --- |
| \`--r-xs\` | 4px |
| \`--r-sm\` | 8px |
| \`--r-md\` | 12px |
| \`--r-lg\` | 16px |
| \`--r-xl\` | 20px |
| \`--r-full\` | 999px |`;
    },
    elevation: () => {
      const s = t.elevation;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

${s.lead}

| ${H.tokenCol} | ${H.valueCol} |
| --- | --- |
| \`--sh-1\` | 0 1px 2px rgba(14,5,32,0.06) — ${s.names.s1} |
| \`--sh-2\` | 0 4px 12px -4px rgba(14,5,32,0.12) — ${s.names.s2} |
| \`--sh-3\` | 0 14px 28px -14px rgba(83,9,158,0.25) — ${s.names.s3} |
| \`--sh-4\` | 0 24px 48px -20px rgba(83,9,158,0.35) — ${s.names.s4} |`;
    },
    buttons: () => {
      const s = t.buttons;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

${s.lead}

| ${H.variantsCol} | ${H.paddingCol} | ${H.fontCol} |
| --- | --- | --- |
| sm | 8px 16px | 12px |
| md | 12px 22px | 14px |
| lg | 16px 30px | 16px |`;
    },
    badges: () => {
      const s = t.badges;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

${Object.values(s.labels).map((v) => `- ${v}`).join('\n')}`;
    },
    forms: () => {
      const s = t.forms;
      const f = s.fields;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

- ${f.name}
- ${f.email} — ${f.emailHint}
- ${f.topic}: ${f.topics.join(', ')}
- ${f.format}: ${f.formats.join(', ')}
- ${f.summary}`;
    },
    cards: () => {
      const s = t.cards;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

${s.items.map((i) => `- **${i.title}** — ${i.text}`).join('\n')}`;
    },
    alerts: () => {
      const s = t.alerts;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

${s.items.map((a) => `- **${a.label}** — ${a.text}`).join('\n')}`;
    },
    icons: () => {
      const s = t.icons;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

${s.lead}`;
    },
    patterns: () => {
      const s = t.patterns;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

${s.lead}

- **${s.ticket}** — pattern.ticket
- **${s.chrome}** — pattern.chrome
- **${s.marquee}** — pattern.marquee`;
    },
    voice: () => {
      const s = t.voice;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

${s.lead}

${s.attrs.map((a) => `- **${a.title}** — ${a.desc}\n  ${a.example}`).join('\n')}`;
    },
    dodont: () => {
      const s = t.dodont;
      return `## ${stripTags(s.kicker)} — ${stripTags(s.title)}

**${H.doHead}**
${s.dos.map((d) => `- ${d}`).join('\n')}

**${H.dontHead}**
${s.donts.map((d) => `- ${d}`).join('\n')}`;
    },
  };
}

export function buildFullMarkdown(lang = 'es') {
  const t = dicts[lang] || dicts.es;
  const H = HEADERS[lang] || HEADERS.es;
  const header = H.docHeader('1.0.0', t.hero.meta.baseValue, t.hero.meta.licenseValue);
  const fns = buildSections(lang);
  return header + Object.values(fns).map((fn) => fn()).join('\n\n') + '\n';
}

export function buildSectionMarkdown(id, lang = 'es') {
  const fns = buildSections(lang);
  const fn = fns[id];
  return fn ? fn() + '\n' : '';
}

export async function copyMarkdown(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
