import React from 'react';
import './App.css';
import profilePic from './images/profile.jpg';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={profilePic} alt="Alan Hsu" className="profile" />
      <h1>Alan Hsu</h1>
      <p>Software Engineer • Field Engineer • Technical Support</p>
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
            <p>
              I’m a Software Engineer with experience across full-stack development, field engineering, and technical support in robotics and production environments.
              I enjoy working across both software systems and real-world hardware deployments, bridging engineering teams with on-site operations.
            </p>

            <p>
              Previously, I worked as a Store Manager at Starbucks while completing my degree, where I developed strong leadership, customer service, and operational problem-solving skills.
              I graduated summa cum laude with a 3.68 GPA while working full time.
            </p>

            <p>
              My engineering experience includes building backend services, APIs, and robotics-integrated systems using Java, Spring Boot, AWS (DynamoDB), and React, along with hands-on field troubleshooting and system support in production environments.
            </p>
        </section>

      <section id="experience">
        <h2>Work Experience</h2>

          <div className="project">
            <h3>Software Engineer Intern / Field Engineer - Artly AI</h3>
              <p>September 2022 - September 2023</p>

              <ul>
                <li>Developed and maintained backend services for an order management system handling 1,000+ daily transactions using Java and DynamoDB.</li>
                <li>Built and supported RESTful APIs for communication between software systems and robotics hardware components.</li>
                <li>Worked directly with robotics systems in production environments, supporting deployment, configuration, and real-time issue resolution.</li>
                <li>Diagnosed and resolved on-site system issues, improving reliability and reducing downtime in field operations.</li>
                <li>Implemented frontend features using React and Node.js for internal dashboards and operational tools.</li>
                <li>Improved system reliability through automated testing (JUnit, SpringBootTest) and structured code reviews.</li>
                <li>Collaborated with cross-functional engineering and operations teams to improve workflows and system efficiency.</li>
              </ul>
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

          <div className="project">
            <h3>Chung Yuan Christian University</h3>
            <p>Bachelor's Degree in Mechanical Engineering</p>
            <p>Mechanical Engineering Foundation Program</p>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
             <ul>
                <li><strong>Languages:</strong> Java, Python, JavaScript, TypeScript, C++, Kotlin, Swift</li>
                <li><strong>Backend:</strong> Spring Boot, REST APIs, Microservices</li>
                <li><strong>Field Systems:</strong> Robotics systems support, deployment, troubleshooting</li>
                <li><strong>Cloud:</strong> AWS (EC2, S3, DynamoDB)</li>
                <li><strong>Databases:</strong> MySQL, PostgreSQL, DynamoDB</li>
                <li><strong>Frontend:</strong> React</li>
                <li><strong>Tools:</strong> Docker, Git, GitHub</li>
                <li><strong>Languages:</strong> English, Mandarin</li>
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
              <li>Utilized PostgreSQL, SQL, Python, Node.js, TypeScript, and REST APIs for database management, full stack development, and system integration.</li>
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
