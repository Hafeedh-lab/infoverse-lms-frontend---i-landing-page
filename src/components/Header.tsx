import React, { useState } from 'react';
import './Header.css';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#subscriptions', label: 'Subscriptions' },
  { href: '#about', label: 'About' },
];

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav" aria-label="Main navigation">
        <a href="#home" className="logo">
          Infoverse
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="hamburger" />
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={active === link.href ? 'active' : ''}
                aria-current={active === link.href ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

