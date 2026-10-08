export type Project = {
  slug: string;
  title: string;
  summary: string;
  url: string;
  tags: string[];
  thumbnail?: string;
  highlight?: { label: string; from: string; to: string; color?: string };
  status: "live" | "wip" | "archived";
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="card" href={project.url} target="_blank" rel="noopener noreferrer">
      <div
        className={project.highlight ? "thumb hl" : "thumb"}
        style={project.highlight?.color ? { background: project.highlight.color } : undefined}
      >
        {project.thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.thumbnail} alt={`${project.title} 화면`} loading="lazy" />
        )}
        {project.highlight && (
          <div className="hl-text">
            <small>{project.highlight.label}</small>
            <b>
              {project.highlight.from} → <em>{project.highlight.to}</em>
            </b>
          </div>
        )}
      </div>
      <div className="meta">
        <div>
          <h3>
            {project.title} <span className="ar">↗</span>
          </h3>
          <p className="desc">{project.summary}</p>
          <p className="tags">{project.tags.join(" · ")}</p>
        </div>
      </div>
    </a>
  );
}
