
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
      <h1>Wafula Brevian</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h3>About Me</h3>
        <p> 
My name is Brevian Wafula.I am an analytical, detail-oriented, and results-driven Software Engineer with outstanding communication and leadership abilities. I excel at fostering collaboration within teams to achieve shared goals efficiently, meeting project deadlines, and ensuring delivery within budget constraints. With a strong focus on innovation, I specialize in conceptualizing and developing high-performance applications that integrate the latest technologies, design theory, and creative problem-solving.

Proficient in front-end technologies such as HTML5, CSS, JavaScript, and React.js, I create dynamic, responsive, and user-centric interfaces. On the back-end, I leverage Python and the Flask framework to build robust, scalable, and secure systems. With hands-on experience in version control using Git, database management using MySQL, and project tracking with Jira, I ensure a streamlined development process.

I thrive in agile environments, consistently delivering high-quality software solutions. I am passionate about staying at the forefront of technological advancements, continuously learning new tools and methodologies to enhance both my technical skill set and the overall efficiency of the projects I contribute to.
</p>
      </section>
            <section id="projects">
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src={videoSource} type="video/mp4" />
                </video>
            </div>
  <h2>MY PROJECTS</h2>

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
  <h3>SERVICES OFFERED</h3>
  <ul className="skills-list">
    <li>Web design</li>
    <li>Web development</li>
    <li>Mobile development</li>
    <li>IT Consultancy</li>
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


