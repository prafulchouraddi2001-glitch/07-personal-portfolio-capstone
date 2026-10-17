export default function ProjectDetail({ project, onBack }) {
  if (!project) return null

  return (
    <main className="project-detail section">
      <button className="button button-secondary" type="button" onClick={onBack}>
        ← Back to all projects
      </button>

      <p className="eyebrow">{project.number} / {project.category}</p>
      <h1>{project.title}</h1>
      <p className="project-detail-summary">{project.summary}</p>

      <section className="detail-section">
        <h2>Project overview</h2>
        <p>{project.objective}</p>
      </section>

      <section className="detail-section">
        <h2>Architecture</h2>
        <ol>
          {project.architecture.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="detail-section">
        <h2>Implementation roadmap</h2>
        <ol>
          {project.roadmap.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="detail-section">
        <h2>Tools and versions</h2>
        <div className="detail-tools">
          {project.tools.map((tool) => (
            <article className="detail-tool" key={tool.name}>
              <h3>{tool.name}</h3>
              <p>{tool.version}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <h2>Useful commands</h2>
        <div className="detail-commands">
          {project.commands.map((item, index) => (
            <article className="detail-command" key={index}>
              <pre><code>{item.command}</code></pre>
              <p>{item.purpose}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section">
        <h2>Troubleshooting notes</h2>
        <ul>
          {project.troubleshooting.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section">
        <h2>Project evidence</h2>
        <ul>
          {project.evidence.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="detail-section detail-repository">
        <h2>Source code</h2>
        <p>Explore the project repository and its implementation.</p>
        <a
          className="button button-primary"
          href={project.repository}
          target="_blank"
          rel="noreferrer"
        >
          View repository ↗
        </a>
      </section>
    </main>
  )
}
