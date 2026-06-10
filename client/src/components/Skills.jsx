import { skillCategories } from '../data/profile';
import SectionWrapper from './SectionWrapper';
import './Skills.css';

const colorMap = {
  blue: { bg: 'rgba(37, 99, 235, 0.1)', border: 'rgba(37, 99, 235, 0.3)', text: '#2563eb' },
  cyan: { bg: 'rgba(6, 182, 212, 0.1)', border: 'rgba(6, 182, 212, 0.3)', text: '#0891b2' },
  green: { bg: 'rgba(34, 197, 94, 0.1)', border: 'rgba(34, 197, 94, 0.3)', text: '#16a34a' },
  purple: { bg: 'rgba(139, 92, 246, 0.1)', border: 'rgba(139, 92, 246, 0.3)', text: '#7c3aed' },
  red: { bg: 'rgba(220, 38, 38, 0.1)', border: 'rgba(220, 38, 38, 0.3)', text: '#dc2626' },
};

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      label="Skills"
      title="Technical Expertise"
      subtitle="Categorized skill sets across languages, frameworks, cloud platforms, and development practices."
    >
      <div className="skills-grid">
        {skillCategories.map((cat, index) => {
          const colors = colorMap[cat.color] || colorMap.blue;
          return (
            <div
              key={index}
              className="skill-category card"
              style={{
                '--cat-bg': colors.bg,
                '--cat-border': colors.border,
                '--cat-text': colors.text,
              }}
            >
              <h3 className="skill-category__title">{cat.category}</h3>
              <div className="skill-category__skills">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-category__skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
