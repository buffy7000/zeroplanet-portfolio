import site from "@/data/site.json";
import projects from "@/data/projects.json";
import ProjectCard, { type Project } from "@/components/ProjectCard";

export default function Home() {
  const list = (projects as Project[]).filter((p) => p.status !== "archived");
  const count = String(list.length).padStart(2, "0");

  return (
    <div className="wrap">
      <header>
        <div className="logo">
          <span />
          {site.name}
        </div>
        <h1>
          {site.headline[0]}
          <br />
          {site.headline[1]}
        </h1>
        <p className="tagline">{site.tagline}</p>
        <div className="intro">
          {site.intro.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </header>

      <div className="sec">
        <strong>Selected Works</strong>
        <span>{count} 개 작품 · 계속 업데이트 중</span>
      </div>
      <div className="grid">
        {list.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
        <div className="card soon">
          <div className="thumb">준비 중</div>
          <div className="meta">
            <div>
              <h3>다음 작품</h3>
              <p className="desc">곧 공개됩니다</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <span>© 2026 {site.name}</span>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </footer>
    </div>
  );
}
