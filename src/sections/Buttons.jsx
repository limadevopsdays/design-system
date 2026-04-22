import SectionHead from '../components/SectionHead.jsx';
import { useI18n } from '../i18n/I18nContext.jsx';

export default function Buttons() {
  const { t } = useI18n();
  const s = t.buttons;
  const L = s.labels;
  return (
    <section id="buttons" className="ds-section">
      <SectionHead sectionId="buttons" kicker={s.kicker} title={s.title} lead={s.lead} />

      <h3 className="ds-h3">{s.variants}</h3>
      <div className="comp-row">
        <button className="btn btn-primary">{L.submitTalk}</button>
        <button className="btn btn-secondary">{L.viewAgenda}</button>
        <button className="btn btn-dark">{L.contact}</button>
        <button className="btn btn-ghost">{L.cancel}</button>
        <button className="btn btn-danger">{L.delete}</button>
      </div>

      <h3 className="ds-h3">{s.sizes}</h3>
      <div className="comp-row">
        <button className="btn btn-primary btn-sm">{L.small}</button>
        <button className="btn btn-primary">{L.medium}</button>
        <button className="btn btn-primary btn-lg">{L.large}</button>
      </div>

      <h3 className="ds-h3">{s.states}</h3>
      <div className="comp-row">
        <button className="btn btn-primary">{L.default}</button>
        <button
          className="btn btn-primary"
          style={{
            background: 'var(--purple-deep)',
            transform: 'translateY(-2px)',
            boxShadow: 'var(--sh-3)',
          }}
        >
          {L.hover}
        </button>
        <button
          className="btn btn-primary"
          style={{ outline: '3px solid rgba(83,9,158,0.3)' }}
        >
          {L.focus}
        </button>
        <button className="btn btn-primary is-disabled">{L.disabled}</button>
      </div>
    </section>
  );
}
