import React, { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import "./Projects.css";
import BusBook from "../assets/Bus Ticketing.png";
import Auction from "../assets/Auction.png";
import Twitter from "../assets/T.jpg";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Bus Booking Platform",
      description:
        "Full-stack solution  that book your tickets in seconds with our streamlined booking process. No waiting, no hassle.",
      image: BusBook,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/santhoshkumarcomp/bus-ticketing-backend",
      live: "https://bus-ticketing-frontend.vercel.app",
    },
    {
      id: 2,
      title: "Auction App",
      description:
        "It allows users to browse, bid on, and sell items in various categories and sellers to connect with them.",
      image: Auction,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/santhoshkumarcomp/BE_CAPSTONE",
      live: "https://subtle-kleicha-aa8606.netlify.app/",
    },
    {
      id: 3,
      title: "Twitter Dashboard",
      description:
        "Modern twitter clone application with beautiful UI, tweets and so on.",
      image: Twitter,
      technologies: ["React", "CSS3"],
      category: "fullstack",
      github: "https://github.com/santhoshkumarcomp/project",
      live: "https://lively-mermaid-39ac84.netlify.app",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle text-center">
          A showcase of my recent work and personal projects
        </p>

        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                activeFilter === category.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              <Filter size={16} />
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta text-center">
          <p>Want to see more of my work?</p>
          <a
            href="https://github.com/santhoshkumarcomp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
