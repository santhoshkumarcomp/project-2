import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo home-link">
            <span className="gradient-text ">
              <span className="logo-bracket">{"<"}</span>
              <span
                className="home-link"
                onClick={() => scrollToSection(`#home`)}
              >
                Dev
              </span>
              <span className="logo-bracket">{"/>"}</span>
            </span>
          </div>

          <nav className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="nav-link"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav
          className={`nav-mobile ${isMobileMenuOpen ? "nav-mobile-open" : ""}`}
        >
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="nav-link-mobile"
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
