import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Badges() {
  const { t } = useI18n();
  const s = t.badges;
  const L = s.labels;
  return (
    <section id="badges" className="ds-section">
      <SectionHead sectionId="badges" kicker={s.kicker} title={s.title} />
      <div className="comp-row">
        <span className="badge badge-purple">{L.platform}</span>
        <span className="badge badge-lime">{L.cfp}</span>
        <span className="badge badge-dark"><span className="dot" />{L.live}</span>
        <span className="badge badge-outline">{L.devsecops}</span>
        <span className="badge badge-success">{L.confirmed}</span>
        <span className="badge badge-warn">{L.pending}</span>
        <span className="badge badge-error">{L.closed}</span>
      </div>
    </section>
  );
}
