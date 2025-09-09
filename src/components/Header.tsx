import React, { useState, useEffect } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id], header[id]");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id: string) => {
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <a href="#home" className="logo">
          Infoverse
        </a>
        <button
          className="hamburger"
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <ul
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "open" : ""}`}
        >
          <li>
            <a
              href="#home"
              className={`nav-link ${active === "home" ? "active" : ""}`}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#subscriptions"
              className={`nav-link ${active === "subscriptions" ? "active" : ""}`}
              onClick={() => handleLinkClick("subscriptions")}
            >
              Subscriptions
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className={`nav-link ${active === "testimonials" ? "active" : ""}`}
              onClick={() => handleLinkClick("testimonials")}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${active === "contact" ? "active" : ""}`}
              onClick={() => handleLinkClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

