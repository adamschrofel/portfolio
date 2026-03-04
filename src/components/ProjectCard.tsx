import type { Project } from "../profile";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <h3 className="card__title">{project.title}</h3>
      {/* Preserve line breaks (\n) in project descriptions */}
      <p className="muted whitespace-pre-line" style={{ whiteSpace: "pre-line" }}>
        {project.description}
      </p>

      <div className="tagRow">
        {project.tech.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>

      {project.links?.length ? (
        <div className="card__links">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label} →
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}