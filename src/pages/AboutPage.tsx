import { profile } from "../profile";

export default function AboutPage() {
  return (
    <section className="stack gap-lg">
      <div className="stack gap-sm">
        <h1>About</h1>
        <p className="muted">
          
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
