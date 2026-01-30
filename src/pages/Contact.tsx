import { profile } from "../profile";

export default function Contact() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Contact</h1>
      <p style={{ maxWidth: 700 }}>
        Want to reach out? Email is best. You can also find me here:
      </p>

      <ul style={{ lineHeight: 1.8 }}>
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${profile.contact.email}`} rel="noreferrer">
            aschrofel10@gmail.com
          </a>
        </li>

        <li>
          <div className="nav__actions">
            <a
              className="btn btn--ghost"
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </li>
        <li>
            <div className="nav__actions">
          <a
            className="btn btn--ghost"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          </div>
        </li>
        <li>
            <strong>Fax:</strong>{" "}
          <a>
            {profile.contact.fax}
          </a>
        </li>
      </ul>
    </main>
  );
}
