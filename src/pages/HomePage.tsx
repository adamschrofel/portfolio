import { Link } from "react-router-dom";
import { profile } from "../profile";

export default function Homepage() {
  return (
    <section className="stack gap-lg">
      <div className="Adam">
        <p className="pill">{profile.lilbio}</p>
        <h1 className="Adam__title">Hi, I’m {profile.name}.</h1>

        <p className="Adam__subtitle">{profile.whaddup}</p>
        <div className="row gap-sm">
          <Link className="btn" to="/about">
            About
          </Link>
          <Link className = "btn" to="/contact">
            Contact
          </Link>
        </div>
      </div>

      <div className="grid2">
        <div className="card">
          <h2>Current Projects</h2>
          <ul className="list">
            <li>Build React/TypeScript frontends that feel fast and clean.</li>
            <li>Create backend services (Java/Spring) and APIs.</li>
            <li>Design data pipelines and dashboards (Azure/Power BI).</li>
          </ul>
        </div>
        <div className="card">
          <h2>Quick links</h2>
          <div className="stack">
            <a href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub →
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn →
            </a>
            <a href={`${import.meta.env.BASE_URL}AdamSchrofel_Resume.pdf`} target="_blank" rel=" noopener noreferrer">
              Resume →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
