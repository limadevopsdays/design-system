import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function DoDont() {
  const { t } = useI18n();
  const s = t.dodont;
  return (
    <section id="dodont" className="ds-section">
      <SectionHead sectionId="dodont" kicker={s.kicker} title={s.title} />
      <div className="dodont">
        <div className="dodont-card do">
          <div className="dodont-hd">{s.do}</div>
          <div className="dodont-body">
            <ul>{s.dos.map((text) => <li key={text}>{text}</li>)}</ul>
          </div>
        </div>
        <div className="dodont-card dont">
          <div className="dodont-hd">{s.dont}</div>
          <div className="dodont-body">
            <ul>{s.donts.map((text) => <li key={text}>{text}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
