import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "HTML5", level: 95, icon: "🟧" },
        { name: "CSS3", level: 90, icon: "🔵" },
        { name: "Tailwind CSS", level: 85, icon: "💨" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "MongoDB", level: 85, icon: "🍃" },

        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "SQL", level: 70, icon: "📈" },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 90, icon: "📚" },

        { name: "AWS", level: 70, icon: "☁️" },

        { name: "Visual Studio Code", level: 90, icon: "💻" },
        ,
        { name: "Webpack", level: 75, icon: "📦" },
        { name: "Vite", level: 80, icon: "⚡" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle text-center">
          Technologies and tools I use to bring ideas to life
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category glass-card">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3>Additional Skills</h3>
          <div className="skill-tags">
            {[
              "Responsive Design",
              "Redux",
              "TypeScript",

              "Agile/Scrum",
              "Unit Testing",
              "CI/CD",
              "Linux",
              "Figma",
            ].map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
