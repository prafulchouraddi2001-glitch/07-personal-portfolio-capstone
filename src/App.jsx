import './App.css'

const skills = {
  "Operating Systems": ["Linux", "Bash"],
  "Containers & CI/CD": ["Docker", "Jenkins", "Git", "GitHub Actions"],
  "Cloud & Infrastructure": ["AWS", "Terraform", "Ansible"],
  "Kubernetes & Monitoring": ["Kubernetes", "Prometheus", "Grafana"],
  "Programming": ["Python", "React", "JavaScript"],
}

const projects = [
  {
    number: "01",
    title: "DevOps Docker Lab",
    description:
      "Containerized an application with Docker and added automated checks and image-build validation using GitHub Actions.",
    stack: ["Docker", "Python", "GitHub Actions"],
  },
  {
    number: "02",
    title: "AWS Deployment Lab",
    description:
      "Practiced deploying and managing application infrastructure on AWS, including EC2-based deployment workflows.",
    stack: ["AWS", "EC2", "Linux"],
  },
  {
    number: "03",
    title: "Jenkins CI/CD Lab",
    description:
      "Built and tested a Jenkins pipeline, explored build execution on agents, and practiced automated CI/CD workflows.",
    stack: ["Jenkins", "Docker", "Linux"],
  },
  {
    number: "04",
    title: "Terraform Infrastructure",
    description:
      "Practiced infrastructure as code, reusable configuration, and remote-state integration with S3.",
    stack: ["Terraform", "AWS", "S3"],
  },
  {
    number: "05",
    title: "Ansible Server Configuration",
    description:
      "Automated server configuration with Ansible playbooks and repeatable infrastructure setup tasks.",
    stack: ["Ansible", "YAML", "Linux"],
  },
  {
    number: "06",
    title: "Kubernetes Monitoring & Storage",
    description:
      "Worked with Kubernetes workloads, Services, probes, storage claims, monitoring, and persistent-data recovery.",
    stack: ["Kubernetes", "Prometheus", "Grafana"],
  },
]

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Praful home">
          <span className="brand-mark">P<span>.</span></span>
          <span>praful<span className="muted">.dev</span></span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">Contact ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              OPEN TO DEVOPS OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M</p>
            <h1>Praful <span>Chouraddi.</span></h1>
            <h2 className="hero-role">Aspiring DevOps Engineer</h2>
            <p className="hero-description">
              I build, automate, and deploy applications using cloud,
              containers, CI/CD, and infrastructure as code. I enjoy turning
              manual workflows into reliable, repeatable systems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a className="button button-secondary" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-meta">
              <span><span className="meta-symbol">⌘</span> DevOps & Cloud</span>
              <span><span className="meta-symbol">⌖</span> Bengaluru, India</span>
            </div>
          </div>

          <div className="terminal-card" aria-label="DevOps terminal illustration">
            <div className="terminal-top">
              <div className="window-dots"><i /><i /><i /></div>
              <span>praful@devops: ~</span>
              <span className="terminal-menu">•••</span>
            </div>
            <div className="terminal-body">
              <p><span className="terminal-green">➜</span> whoami</p>
              <p className="terminal-output">praful-chouraddi</p>
              <p><span className="terminal-green">➜</span> cat focus.txt</p>
              <p className="terminal-output">automation</p>
              <p className="terminal-output">cloud infrastructure</p>
              <p className="terminal-output">continuous delivery</p>
              <p><span className="terminal-green">➜</span> kubectl get projects</p>
              <div className="terminal-table">
                <span>NAME</span><span>STATUS</span>
                <span>devops-labs</span><span className="terminal-green">ready</span>
                <span>portfolio</span><span className="terminal-yellow">building</span>
              </div>
              <p className="terminal-prompt"><span className="terminal-green">➜</span> <span className="cursor">▋</span></p>
            </div>
            <div className="terminal-footer"><span>●</span> SYSTEMS THINKING · AUTOMATION FIRST</div>
          </div>
          <div className="hero-glow" />
        </section>

        <section className="trust-strip" aria-label="Core focus areas">
          <span>LINUX</span><b>✳</b><span>DOCKER</span><b>✳</b>
          <span>AWS</span><b>✳</b><span>JENKINS</span><b>✳</b>
          <span>TERRAFORM</span><b>✳</b><span>KUBERNETES</span>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>Engineering reliable<br /><span>delivery systems.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              I'm a Master of Computer Applications graduate focused on
              DevOps engineering, cloud infrastructure, automation, and
              continuous delivery.
            </p>
            <p>
              I've completed six hands-on learning projects covering
              containerization, AWS deployment, CI/CD, infrastructure as
              code, configuration management, and Kubernetes monitoring
              and storage. This portfolio is my next step: bringing those
              skills together in one end-to-end engineering project.
            </p>
            <div className="about-stats">
              <div><strong>06</strong><span>Completed projects</span></div>
              <div><strong>10+</strong><span>Tools explored hands-on</span></div>
              <div><strong>∞</strong><span>Curiosity to learn</span></div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / TOOLKIT</p>
            <h2>Tools I work <span>with.</span></h2>
            <p className="section-subtitle">
              A practical toolkit built through labs and projects.
            </p>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <article className="skill-card" key={category}>
                <div className="skill-card-top">
                  <span className="skill-icon">{category === "Programming" ? "</>" : category === "Cloud & Infrastructure" ? "☁" : category === "Kubernetes & Monitoring" ? "⌘" : category === "Containers & CI/CD" ? "↗" : "⌁"}</span>
                  <span className="card-index">TOOLKIT / 0{Object.keys(skills).indexOf(category) + 1}</span>
                </div>
                <h3>{category}</h3>
                <div className="tags">
                  {items.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
          <p className="honesty-note">
            Skills shown reflect my learning and project experience; proficiency varies by tool.
          </p>
        </section>

        <section className="section projects-section" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>Built by learning.<br /><span>Proven by doing.</span></h2>
            </div>
            <p className="projects-intro">
              Six completed DevOps projects, each focused on a different part
              of the delivery lifecycle.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow">↗</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
          <p className="projects-footnote">
            Project cards describe completed work. Repository links will be added after the repositories are published.
          </p>
        </section>

        <section className="section next-section">
          <div>
            <p className="eyebrow">CURRENTLY BUILDING</p>
            <h2>One portfolio.<br /><span>End-to-end DevOps.</span></h2>
          </div>
          <div className="next-steps">
            <p>01 <span>React + Vite portfolio</span><b>IN PROGRESS</b></p>
            <p>02 <span>Docker image & container</span><b>UP NEXT</b></p>
            <p>03 <span>Jenkins CI/CD pipeline</span><b>PLANNED</b></p>
            <p>04 <span>Kubernetes deployment</span><b>PLANNED</b></p>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">04 / LET'S CONNECT</p>
          <h2>Ready to build<br /><span>something reliable?</span></h2>
          <p className="contact-copy">
            I'm looking for an opportunity to contribute, keep learning,
            and grow with an engineering team.
          </p>
          <a className="button button-primary" href="mailto:your-email@example.com">
            Email me <span>↗</span>
          </a>
          <p className="contact-note">
            Replace the placeholder email and add your real profile links before publishing.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">P<span>.</span></span><span>praful<span className="muted">.dev</span></span></a>
        <p>Designed to learn. Built to automate.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App
