import { profile } from "../profile";

export default function AboutPage() {
  return (
    <section className="stack gap-lg">
      <div className="stack gap-sm">
        <h1 className="Adam__title">About</h1>
        <p className="muted">
          I’m an ACS graduate with a strong interest in building thoughtful,
          user-focused software. So far I've enjoyed learning as much as I can
          across the stack, most recently working with React and TypeScript on
          some full-stack projects. I’m especially drawn to problems at the
          intersection of HCI, data, and system design. I’m always looking to
          learn, iterate, and build things that are both technically solid and
          genuinely useful (Especially if they help me beat my family and friends at
          board games or poker).
        </p>
      </div>

      <div className="card">
        <ul className="list">
          {profile.about.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="grid2">
        {Object.entries(profile.skills).map(([group, items]) => (
          <div className="card" key={group}>
            <h2 className="capitalize">{group}</h2>
            <div className="tagRow">
              {items.map((s) => (
                <span className="tag" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
