import { useState } from 'react';
import { copyMarkdown } from '../utils/markdown.js';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function CopyMarkdownButton({ getMarkdown, label, variant = 'primary' }) {
  const [state, setState] = useState('idle');
  const { t } = useI18n();

  const onClick = async () => {
    const ok = await copyMarkdown(getMarkdown());
    setState(ok ? 'done' : 'fail');
    setTimeout(() => setState('idle'), 2000);
  };

  const copy = state === 'done' ? t.copied : state === 'fail' ? t.copyError : label;

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
