import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Patterns() {
  const { t, lang } = useI18n();
  const s = t.patterns;
  const monthLabel = lang === 'en' ? 'AUG · 2026' : 'AGO · 2026';
  return (
    <section id="patterns" className="ds-section">
      <SectionHead sectionId="patterns" kicker={s.kicker} title={s.title} lead={s.lead} />

      <h3 className="ds-h3">{s.ticket}</h3>
      <div className="pattern-tile">
        <div className="pt-label"><span>Event ticket</span><span>pattern.ticket</span></div>
        <div className="ticket-preview">
          <div>
            <div className="tk-name">
              DevOps<em>Days</em><br />Lima 2026
            </div>
            <div className="tk-meta">{s.ticketMeta}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="tk-date">27<em>–</em>28</div>
            <div className="tk-date-sub">{monthLabel}</div>
          </div>
        </div>
      </div>

      <h3 className="ds-h3">{s.chrome}</h3>
      <div className="pattern-tile">
        <div className="pt-label"><span>Section chrome</span><span>pattern.chrome</span></div>
        <div className="section-chrome">
          <span>{s.sponsors}</span>
          <span>{s.edition}</span>
        </div>
      </div>

      <h3 className="ds-h3">{s.marquee}</h3>
      <div className="pattern-tile">
        <div className="pt-label"><span>Brand ticker</span><span>pattern.marquee</span></div>
        <div className="marquee-outer">
          <div className="marquee-track">
            <span>DevOpsDays Lima 2026</span><span>◆</span>
            <span>27–28 · {monthLabel}</span><span>◆</span>
            <span>Build · Ship · Operate</span><span>◆</span>
            <span>SRE · Platform · DevSecOps</span><span>◆</span>
            <span>DevOpsDays Lima 2026</span><span>◆</span>
            <span>27–28 · {monthLabel}</span><span>◆</span>
            <span>Build · Ship · Operate</span><span>◆</span>
          </div>
        </div>
      </div>
    </section>
  );
}
