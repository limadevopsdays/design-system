import CopyMarkdownButton from './CopyMarkdownButton.jsx';
import { buildFullMarkdown } from '../utils/markdown.js';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-kicker">
        <span className="dot"></span>
        <span>DESIGN SYSTEM · V1.0</span>
      </div>
      <h1>
        Construir.<br />
        Desplegar. <em>Repetir.</em>
      </h1>
      <p>
        Design system derivado del manual de marca de DevOpsDays Lima 2026.
        Tokens, componentes y patrones listos para usar en producto, eventos y
        comunicaciones.
      </p>
      <div className="hero-actions">
        <CopyMarkdownButton
          getMarkdown={buildFullMarkdown}
          label="Copiar design system"
          variant="lime"
        />
      </div>
      <dl className="hero-meta">
        <div><dt>Versión</dt><dd className="lime">1.0.0</dd></div>
        <div><dt>Actualizado</dt><dd>Abr · 2026</dd></div>
        <div><dt>Base</dt><dd>Manual de Marca v1.1</dd></div>
        <div><dt>Licencia</dt><dd>Comunidad</dd></div>
      </dl>
    </div>
  );
}
