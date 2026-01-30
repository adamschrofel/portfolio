import { profile } from "../profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span> {new Date().getFullYear()} {profile.name}</span>
        <div className="footer__links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}