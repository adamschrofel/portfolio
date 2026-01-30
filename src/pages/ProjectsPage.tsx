import { profile } from "../profile";
import { ProjectCard } from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="stack gap-lg">
      <div className="stack gap-sm">
        <h1>Projects</h1>
        <p className="muted">
          A few things I’ve built (and I’m building). Add screenshots + links as you go.
        </p>
      </div>

      <div className="gridCards">
        {profile.projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}