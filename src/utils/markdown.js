const color = (name, hex, meta) => `- **${name}** \`${hex}\` — ${meta}`;

const sections = {
  brand: () => `## 01 — Esencia de marca

Cuatro atributos guían toda decisión de diseño, copy e interacción.

- **Ágil** — Deploys pequeños, iteración constante, feedback rápido.
- **Endémico** — Orgullosamente peruano. Referencias locales, color que remite a Lima.
- **Preciso** — Observabilidad, métricas y decisiones basadas en datos.
- **Colaborativo** — Compartimos conocimiento para que todos crezcan. Open source, open community.`,

  logo: () => `## 02 — Logotipo

Versiones aprobadas: full color (fondo claro), dark mode, isotipo sobre púrpura.

**Tamaños mínimos**
- Digital: 24px
- Web: 40px
- Print: 15mm`,

  mascota: () => `## 03 — Mascota

Colibrí que poliniza conocimiento entre la comunidad DevOps. Cuatro versiones disponibles sobre fondos: blanco, claro, ink, púrpura y lime.`,

  color: () => `## 04 — Color

### Marca
${color('Infinity Purple', '#53099E', '--purple · brand.primary')}
${color('Purple Deep', '#2E005A', '--purple-deep · hover')}
${color('Cloud Mauve', '#A17CD1', '--purple-tint · accent')}
${color('Deploy Lime', '#A3E37C', '--lime · brand.secondary')}
${color('Lime Soft', '#C5EFA8', '--lime-soft · subtle')}

### Neutrales
${color('Deep Night', '#0E0520', '--ink · text.primary')}
${color('Ink 2', '#1A0A36', '--ink-2 · surface.dark')}
${color('Mute', '#8A8496', '--mute · text.tertiary')}
${color('Line', '#E6E1DA', '--line · border')}
${color('Paper', '#FBFAF7', '--paper · surface')}

### Semánticos
${color('Success', '#22A06B', '--success')}
${color('Warn', '#E6A100', '--warn')}
${color('Error', '#D6361C', '--error')}
${color('Info', '#3B7BD6', '--info')}
${color('Purple Wash', '#EDE6F5', '--purple-wash · tint')}`,

  type: () => `## 05 — Tipografía

**Familias**
- Display: Orbitron (400/500/700/800/900)
- Text: Poppins (300/400/500/600/700)
- Mono: JetBrains Mono (400/500/600)

**Escala**

| Escala | Tamaño | Peso | Letter-spacing |
| --- | --- | --- | --- |
| Display XL | 64px | 900 | -0.03em |
| Display LG | 48px | 800 | -0.02em |
| Display MD | 32px | 800 | -0.01em |
| Display SM | 22px | 700 | 0 |
| Body LG | 18px | 400 | 0 |
| Body MD | 15px | 400 | 0 |
| Body SM | 13px | 400 | 0 |
| Mono | 12px | 500 | 0.08em |`,

  spacing: () => `## 06 — Espaciado (base 4)

| Token | Valor |
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
| \`--s-20\` | 80px |`,

  radius: () => `## 07 — Radios

| Token | Valor |
| --- | --- |
| \`--r-xs\` | 4px |
| \`--r-sm\` | 8px |
| \`--r-md\` | 12px |
| \`--r-lg\` | 16px |
| \`--r-xl\` | 20px |
| \`--r-full\` | 999px |`,

  elevation: () => `## 08 — Elevación

| Token | Valor |
| --- | --- |
| \`--sh-1\` | 0 1px 2px rgba(14,5,32,0.06) |
| \`--sh-2\` | 0 4px 12px -4px rgba(14,5,32,0.12) |
| \`--sh-3\` | 0 14px 28px -14px rgba(83,9,158,0.25) |
| \`--sh-4\` | 0 24px 48px -20px rgba(83,9,158,0.35) |`,

  buttons: () => `## 09 — Botones

Pill shape (\`--r-full\`). Variantes: primary (púrpura), secondary (lime), ghost, dark, danger.

| Tamaño | Padding | Font-size |
| --- | --- | --- |
| sm | 8px 16px | 12px |
| md | 12px 22px | 14px |
| lg | 16px 30px | 16px |`,

  badges: () => `## 10 — Badges

Pill shape. Font mono 11px, 600. Variantes: purple, lime, dark, outline, success, warn, error.`,

  forms: () => `## 11 — Formularios

- Label: mono 10px uppercase, letter-spacing 0.15em, color mute
- Input: padding 12px 14px, border 1px line, radius \`--r-sm\`
- Focus: border purple + box-shadow ring rgba(83,9,158,0.12)`,

  cards: () => `## 12 — Cards

- Fondo blanco, border 1px line, radius \`--r-lg\`, padding 24px
- Hover: border purple, translateY(-3px), shadow \`--sh-3\`
- Transición: 0.2s`,

  alerts: () => `## 13 — Alertas

Border-left 3px, padding 14px 16px, radius \`--r-md\`. Variantes: info, success, warn, error, purple.`,

  icons: () => `## 14 — Iconografía

Librería custom del evento. Estilo lineal con relleno púrpura. Tamaño base 24px.`,

  patterns: () => `## 15 — Patrones

- **Ticket del evento** — grid 1fr auto, fondo ink, troqueles laterales
- **Section chrome** — label mono uppercase, border line
- **Marquee / Ticker** — fondo lime, loop horizontal 30s linear infinite`,

  voice: () => `## 16 — Voz y tono

Directo, técnico, con calidez peruana. Sin corporativismo, sin jerga vacía.

- **Técnico pero humano** — hablamos de arquitecturas sin alienar a quien aprende
- **Directo** — nada de "unlock synergies", sí a "construye, rompe, aprende"
- **Con humor** — referencias a incidentes, postmortems, el 3am pager
- **Peruano** — nombres, lugares y modismos locales sin exotizar`,

  dodont: () => `## 17 — Hacer y no hacer

**Hacer**
- Usar púrpura como color primario dominante
- Respetar el área de resguardo del logo
- Mantener ratio tipográfico de la escala
- Combinar Orbitron + Poppins

**No hacer**
- Usar lime como fondo de bloques de texto largo
- Distorsionar el logo o rellenar el isotipo con gradientes
- Mezclar más de 2 familias tipográficas
- Aplicar sombras decorativas fuera de la escala \`--sh-*\``,
};

export function buildFullMarkdown() {
  const header = `# DevOpsDays Lima 2026 — Design System

Versión 1.0.0 · Base: Manual de Marca v1.1 · Licencia: Comunidad

`;
  return header + Object.values(sections).map((fn) => fn()).join('\n\n') + '\n';
}

export function buildSectionMarkdown(id) {
  const fn = sections[id];
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
