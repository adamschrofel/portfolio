import { profile } from "../profile";
import { ProjectCard } from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <section className="stack gap-lg">
      <div className="stack gap-sm">
        <h1 className="Adam__title">Projects</h1>
        <p className="muted">
          A few things I’ve built (and a few things I’m building). Check out the repositories to learn more about the design of current projects and the motivations behind them. 
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