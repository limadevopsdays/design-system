import SectionHead from '../components/SectionHead.jsx';

export default function Patterns() {
  return (
    <section id="patterns" className="ds-section">
      <SectionHead
        kicker="15 — Componentes"
        title="Patrones."
        lead="Piezas compuestas frecuentes del producto y la comunicación."
      />

      <h3 className="ds-h3">Ticket del evento</h3>
      <div className="pattern-tile">
        <div className="pt-label"><span>Event ticket</span><span>pattern.ticket</span></div>
        <div className="ticket-preview">
          <div>
            <div className="tk-name">
              DevOps<em>Days</em><br />Lima 2026
            </div>
            <div className="tk-meta">Attendee · General · #00427</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="tk-date">27<em>–</em>28</div>
            <div className="tk-date-sub">AGO · 2026</div>
          </div>
        </div>
      </div>

      <h3 className="ds-h3">Section chrome</h3>
      <div className="pattern-tile">
        <div className="pt-label"><span>Section chrome</span><span>pattern.chrome</span></div>
        <div className="section-chrome">
          <span>03 — Sponsors</span>
          <span>Edición 2026</span>
        </div>
      </div>

      <h3 className="ds-h3">Marquee / Ticker</h3>
      <div className="pattern-tile">
        <div className="pt-label"><span>Brand ticker</span><span>pattern.marquee</span></div>
        <div className="marquee-outer">
          <div className="marquee-track">
            <span>DevOpsDays Lima 2026</span><span>◆</span>
            <span>27–28 · AGO · 2026</span><span>◆</span>
            <span>Build · Ship · Operate</span><span>◆</span>
            <span>SRE · Platform · DevSecOps</span><span>◆</span>
            <span>DevOpsDays Lima 2026</span><span>◆</span>
            <span>27–28 · AGO · 2026</span><span>◆</span>
            <span>Build · Ship · Operate</span><span>◆</span>
          </div>
        </div>
      </div>
    </section>
  );
}
