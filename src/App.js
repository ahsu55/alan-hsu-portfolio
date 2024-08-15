import React from 'react';
import './App.css';
import profilePic from './images/profile.jpg';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={profilePic} alt="Alan Hsu" className="profile" />
      <h1>Alan Hsu</h1>
      <p>Software Engineer</p>
    </header>

      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Dynamic software engineer with a Bachelor's degree in Software Engineering from Arizona State University and valuable internship experience at Blue Hill Tech, Inc. Proficient in Python, Java, JavaScript, and web development frameworks including React and Spring Boot.</p>
        </section>

        <section id="experience">
          <h2>Work Experience</h2>
          <div className="project">
            <h3>Software Engineer Intern - Blue Hill Tech, Inc.</h3>
            <p>September 2022 - September 2023</p>

              <li>Designed and implemented an order management system processing 1,000+ daily orders, utilizing DynamoDB for efficient querying and data management.</li>
              <li>Implemented data visualization components using React and Node.js.</li>
              <li>Designed and implemented RESTful API for seamless communication between system components.</li>
          
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="project">
            <h3>Arizona State University</h3>
            <p>Bachelor of Science in Software Engineering</p>
            <p>January 2020 - December 2023</p>
            <p>Cumulative GPA: 3.68/4.0, Major GPA: 3.84/4.0</p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>Programming Languages: Java, Python, Golang, C, C++, C#, JavaScript, TypeScript, React, Kotlin, Swift</li>
            <li>Containerization: Docker</li>
            <li>Databases: MySQL, PostgreSQL</li>
            <li>Cloud Technologies: AWS Cloud (EC2), Amazon S3, DynamoDB</li>
            <li>Version Control: Git, GitHub</li>
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Capstone Project: Online E-commerce Marketplace for Selling Salvaged Lumber</h3>
            <p>Urban Machine • September 2022 - March 2023</p>
            <ul>
              <li>Collaborated in a team of 5 students to develop a prototype application for selling salvaged lumber online.</li>
              <li>Designed and implemented an online e-commerce marketplace with a three-tier architecture.</li>
              <li>Utilized PostgreSQL, SQL, Python, Node.js, Typescript, and REST APIs for database management, full stack development, and seamless integration of user interactions.</li>
            </ul>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: alaste22@gmail.com</p>
          <p>Phone: (650) 451-2294</p>
          <p>Location: San Mateo, CA</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/alan-hsu-096065161" target="_blank" rel="noopener noreferrer">linkedin.com/in/alan-hsu-096065161</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Alan Hsu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;