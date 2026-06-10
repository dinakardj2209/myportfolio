import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navItems, profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#hero" className="header__brand" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
          <img
            src={profile.logoPath}
            alt={`${profile.name} logo`}
            className="header__logo"
          />
          <span className="header__title">
            <span className="header__name">{profile.name.split(' ')[0]}</span>
            <span className="header__role"></span>
          </span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
          <ul className="header__menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`header__link ${activeSection === item.id ? 'header__link--active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <ThemeToggle />
          <button
            type="button"
            className="header__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
