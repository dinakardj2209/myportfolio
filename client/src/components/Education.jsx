import { HiOutlineAcademicCap } from 'react-icons/hi';
import { education } from '../data/profile';
import SectionWrapper from './SectionWrapper';
import './Education.css';

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      label="Education"
      title="Academic Background"
      subtitle="Formal education and academic milestones that shaped my engineering foundation."
      alt
    >
      <div className="education-list">
        {education.map((item, index) => (
          <article key={index} className="education-card card">
            <div className="education-card__icon">
              <HiOutlineAcademicCap />
            </div>
            <div className="education-card__body">
              <div className="education-card__header">
                <h3 className="education-card__degree">{item.degree}</h3>
                <span className="education-card__period">{item.period}</span>
              </div>
              <p className="education-card__institution">{item.institution}</p>
              {item.score && <p className="education-card__score">{item.score}</p>}
              {item.highlights?.length > 0 && (
                <ul className="education-card__highlights">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
