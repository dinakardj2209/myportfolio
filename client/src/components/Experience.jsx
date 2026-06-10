import { experience } from '../data/profile';
import SectionWrapper from './SectionWrapper';
import './Experience.css';

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      title="Where I've Worked"
      subtitle="Professional internships and hands-on development experience in full-stack and enterprise technologies."
    >
      <div className="experience-list">
        {experience.map((job, index) => (
          <article key={index} className="experience-card card">
            <div className="experience-card__header">
              <div>
                <h3 className="experience-card__role">{job.role}</h3>
                <p className="experience-card__company">
                  {job.company}
                  {job.location && <span> · {job.location}</span>}
                </p>
              </div>
              <span className="experience-card__period">{job.period}</span>
            </div>
            <ul className="experience-card__highlights">
              {job.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="experience-card__tech">
              {job.technologies.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
