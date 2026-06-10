import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { profile, socialLinks } from '../data/profile';
import './Footer.css';

const socialConfig = [
  { key: 'instagram', icon: FaInstagram, label: 'Instagram' },
  { key: 'twitter', icon: FaTwitter, label: 'Twitter' },
  { key: 'linkedin', icon: FaLinkedin, label: 'LinkedIn' },
  { key: 'github', icon: FaGithub, label: 'GitHub' },
  { key: 'leetcode', icon: SiLeetcode, label: 'LeetCode' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          {/* <div className="footer__brand">
            <img
              src={profile.logoPath}
              alt={`${profile.name} logo`}
              className="footer__logo"
            />
            <div>
              <p className="footer__name">{profile.name}</p>
              <p className="footer__title">{profile.title}</p>
            </div>
          </div> */}

          <div className="footer__contact">
            {profile.email && (
              <a href={`mailto:${profile.email}`} className="footer__contact-item">
                <HiOutlineMail />
                <span>{profile.email}</span>
              </a>
            )}
            {profile.phone && (
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="footer__contact-item">
                <HiOutlinePhone />
                <span>{profile.phone}</span>
              </a>
            )}
            {profile.location && (
              <span className="footer__contact-item">
                <HiOutlineLocationMarker />
                <span>{profile.location}</span>
              </span>
            )}
          </div>

          <div className="footer__social">
            {socialConfig.map(({ key, icon: Icon, label }) => {
              const url = socialLinks[key];
              if (!url) {
                return (
                  <span
                    key={key}
                    className="footer__social-link footer__social-link--disabled"
                    title={`${label} — add your link in profile.js`}
                    aria-label={`${label} (not configured)`}
                  >
                    <Icon />
                  </span>
                );
              }
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} {profile.name}. All rights reserved.</p>
          <p className="footer__built">Built with MERN Stack</p>
        </div>
      </div>
    </footer>
  );
}
