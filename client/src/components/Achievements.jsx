import { HiMiniTrophy, HiMiniStar, HiMiniCheckBadge } from 'react-icons/hi2';
import { achievements } from '../data/profile';
import SectionWrapper from './SectionWrapper';
import './Achievements.css';

const iconMap = {
  trophy: HiMiniTrophy,
  star: HiMiniStar,
  award: HiMiniCheckBadge,
};

export default function Achievements() {
  const filled = achievements.filter((a) => a.title);

  return (
    <SectionWrapper
      id="achievements"
      label="Achievements"
      title="Milestones & Recognition"
      subtitle="Hackathons, competitions, awards, and notable accomplishments."
      alt
    >
      {filled.length === 0 ? (
        <div className="empty-state card">
          <HiMiniTrophy className="empty-state__icon" />
          <p className="empty-state__title">Achievements coming soon</p>
        
        </div>
      ) : (
        <div className="achievements-grid">
          {achievements.map((item, index) => {
            if (!item.title) return null;
            const Icon = iconMap[item.icon] || HiMiniTrophy;
            return (
              <div key={index} className="achievement-card card">
                <div className="achievement-card__icon">
                  <Icon />
                </div>
                <div>
                  <div className="achievement-card__header">
                    <h3 className="achievement-card__title">{item.title}</h3>
                    {item.year && <span className="achievement-card__year">{item.year}</span>}
                  </div>
                  <p className="achievement-card__desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </SectionWrapper>
  );
}
