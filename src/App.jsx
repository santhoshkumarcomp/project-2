import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader-text">
            <span>M</span>
            <span>E</span>
            <span>R</span>
            <span>N</span>
          </div>
          <div className="loader-bar">
            <div className="loader-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <div className="items-center justify-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
