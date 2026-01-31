import { profile } from "../profile";

export default function Contact() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 className="Adam__title">Contact</h1>
      <p style={{ maxWidth: 700 }}>
        Feel free to reach out through email or LinkedIn to collaborate or chat! 
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
        
      </ul>
    </main>
  );
}
