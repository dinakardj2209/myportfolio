import { careerPath } from '../data/profile';
import SectionWrapper from './SectionWrapper';
import './CareerPath.css';

const statusLabels = {
  completed: 'Completed',
  current: 'Current',
  upcoming: 'Upcoming',
};

export default function CareerPath() {
  return (
    <SectionWrapper
      id="career"
      label="Career Path"
      title="My Professional Roadmap"
      subtitle="A timeline of my educational journey, internships, and career aspirations toward top-tier engineering roles."
    >
      <div className="career-timeline">
        {careerPath.map((item, index) => (
          <div key={index} className={`career-item career-item--${item.status}`}>
            <div className="career-item__marker">
              <span className="career-item__dot" />
            </div>
            <div className="career-item__content card">
              <div className="career-item__header">
                <span className="career-item__year">{item.year}</span>
                <span className={`career-item__status career-item__status--${item.status}`}>
                  {statusLabels[item.status]}
                </span>
              </div>
              <h3 className="career-item__title">{item.title}</h3>
              <p className="career-item__desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
