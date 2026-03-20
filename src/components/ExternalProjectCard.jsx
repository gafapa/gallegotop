import { ArrowUpRight } from "lucide-react";

export default function ExternalProjectCard({ copy, site }) {
  return (
    <article className="external-card">
      <div className="external-card-copy">
        <span className="card-badge">{site.titleLabel}</span>
        <h3>{site.titleLabel}</h3>
        <p>{site.focusLabel}</p>
      </div>

      <div className="external-card-meta">
        {site.author ? (
          <span>
            {copy.ui.communityBy} {site.author}
          </span>
        ) : null}
      </div>

      <a href={site.url} target="_blank" rel="noreferrer">
        {copy.ui.externalOpen}
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}
