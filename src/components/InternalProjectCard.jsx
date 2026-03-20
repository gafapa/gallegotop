import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function InternalProjectCard({ app, copy, reduceMotion }) {
  return (
    <motion.article
      className={`project-card tone-${app.accent}`}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <div className="project-card-top">
        <span className="card-badge">{app.tagLabel}</span>
        {app.progress ? <span className="status-badge">{copy.ui.progress}</span> : null}
      </div>

      <div className="project-card-copy">
        <h4>{app.titleLabel}</h4>
        <p>{app.description}</p>
      </div>

      <div className="project-card-footer">
        <span>{app.slug}</span>
        <a href={app.href} target="_blank" rel="noreferrer">
          {copy.ui.openApp}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}
