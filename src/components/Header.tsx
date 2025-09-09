import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "subscriptions", label: "Subscriptions", href: "#subscriptions" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const Header = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavClick = (id: string) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header className="header" role="banner">
      <nav className="nav" aria-label="Main Navigation">
        <a href="#home" className="logo" aria-label="Infoverse home">
          Infoverse
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-list ${menuOpen ? "nav-list--open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link ${active === item.id ? "active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
