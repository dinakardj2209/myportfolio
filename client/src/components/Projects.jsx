import { HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/profile';
import SectionWrapper from './SectionWrapper';
import './Projects.css';

export default function Projects() {
  const filled = projects.filter((p) => p.title);

  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      title="Featured Work"
      subtitle="Selected projects demonstrating full-stack development, system design, and problem-solving ability."
      alt
    >
      <div className="projects-grid">
        {filled.map((project, index) => (
          <article
            key={index}
            className={`project-card card ${project.featured ? 'project-card--featured' : ''}`}
          >
            <div className="project-card__header">
              <HiOutlineCode className="project-card__icon" />
              <div className="project-card__links">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                    <HiOutlineExternalLink />
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__desc">{project.description}</p>
            <div className="project-card__tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
