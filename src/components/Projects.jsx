import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;