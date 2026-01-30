import { NavLink } from "react-router-dom";
import { profile } from "../profile";

export function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    "navlink" + (isActive ? " active" : "");
  return (
    <header className="nav">
      <div className="nav__inner">
        <NavLink to="/" className="brand">
          {profile.name}
        </NavLink>
        <nav className="nav__links">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
        <div className="nav__actions">
          <a
            className="btn btn--ghost"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
