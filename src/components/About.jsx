import React from "react";
import { Code, Coffee, Lightbulb, Target } from "lucide-react";
import "./About.css";

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code is my priority.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Problem Solver",
      description:
        "I love tackling complex challenges and finding innovative solutions.",
    },
    {
      icon: <Target size={24} />,
      title: "Goal Oriented",
      description:
        "Focused on delivering high-quality results that meet business objectives.",
    },
    {
      icon: <Coffee size={24} />,
      title: "Always Learning",
      description:
        "Continuously exploring new technologies and improving my skills.",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="about-description">
              <p>
                I’m a MERN Stack Developer with a Master’s degree from the
                College of Engineering, Guindy. I’m passionate about building
                dynamic, scalable web applications and delivering high-quality
                digital solutions. My journey began with a curiosity about how
                websites work, which evolved into a deep love for creating
                digital solutions that solve real-world problems.
              </p>
              <p>
                I specialize in React.js for frontend development, Node.js and
                Express.js for backend services, and MongoDB for database
                management. I'm also experienced with modern development tools
                and practices including Git, AWS, and agile methodologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community through blog posts and mentoring.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat">
                <h3>6+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Frontend Completed</p>
              </div>
              <div className="stat">
                <h3>1+</h3>
                <p>Backend Completed</p>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card glass-card">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
