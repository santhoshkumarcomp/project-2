import React from "react";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/santhoshkumarcomp",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/santhosh-kumar-r-63277531a/",
      label: "LinkedIn",
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:santhoshkumarcomp@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-particles"></div>
      </div>

      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">
                  <span className="logo-bracket">{"<"}</span>
                  Santhosh Kumar
                  <span className="logo-bracket">{"/>"}</span>
                </span>
              </div>
              <p className="footer-tagline">
                MERN Stack Developer passionate about creating exceptional
                digital experiences.
              </p>
              <div className="footer-social">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="footer-link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Let's Connect</h3>
              <p>Ready to start your next project?</p>
              <a
                href="mailto:santhoshkumarcomp@gmail.com"
                className="btn btn-primary footer-cta"
              >
                <Mail size={16} />
                Get In Touch
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {currentYear} Santhosh Kumar. Made with{" "}
                <Heart size={16} className="heart-icon" /> using React.js
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="back-to-top"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
