export default function SectionHead({ kicker, title, lead }) {
  return (
    <div className="ds-head">
      <div className="ds-kicker">{kicker}</div>
      <h2 className="ds-h1" dangerouslySetInnerHTML={{ __html: title }} />
      {lead && <p className="ds-lead">{lead}</p>}
    </div>
  );
}
