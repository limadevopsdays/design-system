import { useState } from 'react';
import { copyMarkdown } from '../utils/markdown.js';

export default function CopyMarkdownButton({ getMarkdown, label = 'Copiar markdown', variant = 'primary' }) {
  const [state, setState] = useState('idle');

  const onClick = async () => {
    const ok = await copyMarkdown(getMarkdown());
    setState(ok ? 'done' : 'fail');
    setTimeout(() => setState('idle'), 2000);
  };

  const copy = state === 'done' ? '¡Copiado!' : state === 'fail' ? 'Error' : label;

  return (
    <button
      type="button"
      className={`copy-md copy-md-${variant}${state === 'done' ? ' is-done' : ''}`}
      onClick={onClick}
    >
      <span className="copy-md-icon" aria-hidden="true">
        {state === 'done' ? '✓' : '⧉'}
      </span>
      <span>{copy}</span>
    </button>
  );
}
