export default function SectionHeader({ id, eyebrow, title, description, compact = false }) {
  return (
    <div className={compact ? "section-header is-compact" : "section-header"}>
      <span className="section-kicker">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
