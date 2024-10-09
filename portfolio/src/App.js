
import React from 'react';
import './App.css';
import videoSource from './images/gif.mp4';
import logo from './images/brave.jpg';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const backToTopButton = document.getElementById("backToTop");
    if (backToTopButton) {
      backToTopButton.addEventListener("click", (event) => {
        event.preventDefault(); 
        window.scrollTo({
          top: 0, 
          behavior: "smooth",
        });
      });
    }

    // Clean up the event listener on component unmount
    return () => {
      if (backToTopButton) {
        backToTopButton.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <div className='main-container'>
    <div className="App">
      <header className="App-header">
      <img src={logo} alt="Logo" className="header-logo" />
      <h1>Software developer</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h3>About Me</h3>
        <p>
        I am an analytical and detail oriented Software Engineer with stellar communication skills. Adept at bringing team members together to reach a common goal on time and under budget. Conceptualising app solutions with the latest technology, design theory, and creativity
        </p>
      </section>
            <section id="projects">
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src={videoSource} type="video/mp4" />
                </video>
            </div>
  <h2>My Projects</h2>

  <div class="project-links">
    <div class="project-card">
      <a href="https://github.com/FWKlegacy/Flask-library-management-system.git" target="_blank" rel="noopener noreferrer">
        <p>A web application for managing library resources using Flask.</p>
      </a>
    </div>
    <div class="project-card">
      <a href="https://github.com/FWKlegacy/React-Node-Travel-Map-App-MERN-Stack-Using-Mapbox-and-React-Hooks.git" target="_blank" rel="noopener noreferrer">
        <p>MERN stack application utilizing Mapbox and React Hooks for an interactive travel map.</p>
      </a>
    </div>
    <div class="project-card">
      <a href="https://github.com/FWKlegacy/-authentication-system-using-Firebase-Auth-on-a-Next.JS-application.git" target="_blank" rel="noopener noreferrer">
        <p>Authentication system using Firebase Auth in a Next.js application.</p>
      </a>
    </div>
  </div>
</section>

<section id="skills">
  <h3>Skills</h3>
  <ul className="skills-list">
    <li>JavaScript</li>
    <li>React</li>
    <li>Node.js</li>
    <li>Python</li>
    <li>HTML5</li>
    <li>CSS</li>
    <li>Git</li>
  </ul>
</section>


      <section id="contact">
        <h3>Contact Me</h3>
        <p>
          You can view my CV <a href="https://raw.githubusercontent.com/FWKlegacy/Simple-React-Project/1fff782527f000bc63f7400764be1ceb43fe8d2f/Resume.updated%201.pdf
">here</a>
        </p>
        <p>Email: <a href="mailto:your.email@example.com">wanjalawafulabrevian@gmail.com</a></p>
        <p>
    <a href="#top" id="backToTop" className="back-to-top" aria-label="Back to top">
      ↑
      <i className="fas fa-arrow-up"></i>
    </a>
  </p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Wafula Brevian</p>
      </footer>
    </div>
    </div>
     
  );
}

export default App;


