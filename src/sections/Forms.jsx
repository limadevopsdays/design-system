import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Forms() {
  const { t } = useI18n();
  const s = t.forms;
  const f = s.fields;
  return (
    <section id="forms" className="ds-section">
      <SectionHead sectionId="forms" kicker={s.kicker} title={s.title} />

      <div className="forms-grid">
        <div className="field">
          <label>{f.name}</label>
          <input type="text" placeholder={f.namePh} />
        </div>
        <div className="field">
          <label>{f.email}</label>
          <input type="email" placeholder={f.emailPh} />
          <span className="hint">{f.emailHint}</span>
        </div>
        <div className="field">
          <label>{f.topic}</label>
          <select defaultValue={f.topics[0]}>
            {f.topics.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="field">
          <label>{f.format}</label>
          <select defaultValue={f.formats[0]}>
            {f.formats.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="field full">
          <label>{f.summary}</label>
          <textarea rows={4} placeholder={f.summaryPh} />
        </div>
      </div>
    </section>
  );
}
