import { HiOutlineDownload, HiOutlineMail } from 'react-icons/hi';
import { profile } from '../data/profile';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container hero__inner">
        <div className="hero__image-wrapper">
          <div className="hero__image-border">
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="hero__image"
              onError={(e) => {
                e.target.src = '/images/mypic.jpeg';
              }}
            />
          </div>
          <div className="hero__status">
            <span className="hero__status-dot" />
            Open to opportunities
          </div>
        </div>

        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__title">{profile.title}</h2>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <a href={profile.resumePath} download className="btn btn-primary">
              <HiOutlineDownload size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              <HiOutlineMail size={18} />
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
