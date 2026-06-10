import { HiOutlineAcademicCap, HiOutlineExternalLink } from 'react-icons/hi';
import { certificates } from '../data/profile';
import SectionWrapper from './SectionWrapper';
import './Certificates.css';

export default function Certificates() {
  const filled = certificates.filter((c) => c.title);

  return (
    <SectionWrapper
      id="certificates"
      label="Certificates"
      title="Certifications & Courses"
      subtitle="Professional certifications and completed courses that validate my technical expertise."
    >
      <div className="certificates-grid">
        {filled.map((cert, index) => (
          <div key={index} className="certificate-card card">
            <div className="certificate-card__icon">
              <HiOutlineAcademicCap />
            </div>
            <div className="certificate-card__body">
              <h3 className="certificate-card__title">{cert.title}</h3>
              <p className="certificate-card__issuer">{cert.issuer}</p>
              {cert.year && <span className="certificate-card__year">{cert.year}</span>}
            </div>
            {cert.link ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-card__link"
                aria-label={`View ${cert.title}`}
              >
                <HiOutlineExternalLink />
              </a>
            ) : (
              <span className="certificate-card__link certificate-card__link--disabled">
                <HiOutlineExternalLink />
              </span>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
