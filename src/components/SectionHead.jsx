import CopyMarkdownButton from './CopyMarkdownButton.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';
import { buildSectionMarkdown } from '../utils/markdown.js';

export default function SectionHead({ kicker, title, lead, sectionId }) {
  const { t, lang } = useI18n();
  return (
    <div className="ds-head">
      <div className="ds-head-row">
        <div className="ds-kicker">{kicker}</div>
        {sectionId && (
          <CopyMarkdownButton
            getMarkdown={() => buildSectionMarkdown(sectionId, lang)}
            label={t.copySection}
            variant="ghost"
          />
        )}
      </div>
      <h2 className="ds-h1" dangerouslySetInnerHTML={{ __html: title }} />
      {lead && <p className="ds-lead">{lead}</p>}
    </div>
  );
}
