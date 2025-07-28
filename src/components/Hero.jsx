import React, { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "MERN Stack Developer";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting animate-fade-in-up">Hello, I'm</p>
            <h1 className="hero-name animate-slide-in-left">
              <span className="gradient-text">Santhosh Kumar</span>
            </h1>
            <h2 className="hero-title animate-slide-in-right">
              <span className="typewriter">{displayedText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description animate-fade-in-up">
              I specialize in creating seamless user experiences with React,
              crafting robust backends with Node.js and Express, and managing
              data efficiently with MongoDB
            </p>

            <div className="hero-actions animate-fade-in-up">
              <button
                className="btn btn-primary"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </button>
              <a
                href="https://drive.google.com/file/d/1DIEB-Yuzy0K9APGNzis0RHKoYPx3NLVr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <button className="btn btn-outline">
                  <Download size={18} />
                  Download CV
                </button>
              </a>
            </div>

            <div className="hero-social animate-fade-in-up">
              <a
                href="https://github.com/santhoshkumarcomp"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/santhosh-kumar-r-63277531a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:santhoshkumarcomp@gmail.com"
                className="social-link"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="hero-visual animate-slide-in-right">
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="code-snippet">
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> developer</span>
                    <span className="code-operator"> = </span>
                    <span className="code-bracket">{"{"}</span>
                  </div>
                  <div className="code-line code-indent">
                    <span className="code-property">name</span>
                    <span className="code-operator">: </span>
                    <span className="code-string">'Santhosh Kumar'</span>
                    <span className="code-operator">,</span>
                  </div>
                  <div className="code-line code-indent">
                    <span className="code-property">skills</span>
                    <span className="code-operator">: </span>
                    <span className="code-bracket">['</span>
                    <span className="code-string">MERN</span>
                    <span className="code-bracket">']</span>
                    <span className="code-operator">,</span>
                  </div>
                  <div className="code-line code-indent">
                    <span className="code-property">passion</span>
                    <span className="code-operator">: </span>
                    <span className="code-string">'Coding'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-bracket">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="scroll-indicator" onClick={scrollToNextSection}>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
