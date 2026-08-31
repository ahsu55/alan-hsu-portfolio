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
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        <section id="about">
          <h2>About Me</h2>
            <p>
              I’m a Software and Field Engineer with a background in software development, robotics, and production deployments. I’ve worked hands-on with robotic systems in real-world environments, where I’ve been responsible for deployment, configuration, troubleshooting, software support, and keeping systems running reliably in the field.
            </p>
            <p>
              My software engineering background allows me to approach field problems beyond just hardware troubleshooting—I’m comfortable investigating software, APIs, databases, configurations, and system behavior to identify and resolve issues. At the same time, my field experience has taught me how to work under pressure, communicate with customers and cross-functional teams, and turn engineering solutions into reliable real-world operations.
            </p>
            <p>
              Before transitioning into engineering, I worked as a Store Manager at Starbucks while completing my degree at Arizona State University. Balancing full-time work with school helped develop my leadership, communication, and operational problem-solving skills. I graduated summa cum laude.
            </p>
            <p>
             I enjoy solving practical engineering problems and working at the intersection of software, robotics, hardware, and real-world operations.
            </p>
        </section>

      <section id="experience">
        <h2>Work Experience</h2>
          <div className="project">
            <h3>Field Engineer - Artly AI</h3>
              <p>September 2023 - April 2026</p>

              <ul>
                <li>Deploy, configure, and maintain robotic systems at client locations and store events, including setup, calibration, operation, and teardown.</li>
                <li>Troubleshoot and repair robotic systems, performing module-level diagnostics to ensure reliable operation.</li>
                <li>Modify software configurations and system parameters to improve functionality and operational reliability.</li>
                <li>Implement hardware and software upgrades to support evolving business requirements.</li>
                <li>Managed DynamoDB and backend systems supporting robotic operations.</li>
                <li>Provide on-site and remote technical support using Linux shell tools.</li>
                <li>Utilize ROS and RViz to monitor robot state, visualize sensor data, and tune system parameters for calibration and deployment.</li>
              </ul>
          </div>
          
          <div className="project">
            <h3>Software Engineer Intern - Artly AI</h3>
              <p>September 2022 - August 2023</p>

              <ul>
                <li>Built a full-stack order management system handling 1,000+ daily orders using Node.js, DynamoDB, and REST APIs.</li>
                <li>Developed React-based dashboards for system monitoring and operational visibility.</li>
                <li>Designed and maintained backend services supporting real-time robotics and operational workflows.</li>
                <li>Built and integrated REST APIs across system modules to ensure reliable data flow between frontend, backend, and robotics systems.</li>
                <li>Implemented automated testing (JUnit, Spring Boot Test) to improve system stability and reduce production issues.</li>
                <li>Integrated ROS-based robotics control into backend workflows for real-time system behavior updates.</li>
                <li>Supported production deployments and resolved system issues in live customer environments.</li>
              </ul>
          </div>
      
          <div className="project">
                  <h3>Store Manager - Starbucks Coffee Company</h3>
                    <p>December 2008 - September 2022</p>
                    <p>Promoted internally from Barista to Store Manager over 13+ years through demonstrated leadership, operational execution, and problem-solving in high-volume production environmet. </p>
                    <ul>
                      <li>Led daily operations including workflow coordination, staffing, inventory management, equipment oversight, and operational uptime.</li>
                      <li>Built and managed high-performing teams while maintaining operational efficiency in fast-paced environments.</li>
                      <li>Recognized as Manager of the Quarter (Q3 2017, Q2 2022) for operational performance and leadership.</li>
                      <li>Increased annual sales performance by 5–10% year-over-year through workflow improvements, customer retention, and team development.</li>
                      <li>Maintained hourly turnover rates approximately 40% below company average through mentorship and strong team culture.</li>
                      <li>Consistently exceeded customer satisfaction goals through operational execution, coaching, and process optimization.</li>
                    </ul>
                </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
             <ul>
                <li><strong>Program Languages:</strong> Java, Python, JavaScript, TypeScript, C++, Kotlin, Swift</li>
                <li><strong>Backend:</strong> Spring Boot, REST APIs, Microservices</li>
                <li><strong>Field Systems:</strong> Robotics systems support, deployment, troubleshooting</li>
                <li><strong>Cloud:</strong> AWS (EC2, S3, DynamoDB)</li>
                <li><strong>Databases:</strong> MySQL, PostgreSQL, DynamoDB</li>
                <li><strong>Frontend:</strong> React</li>
                <li><strong>Tools:</strong> Docker, Git, GitHub</li>
                <li><strong>Languages:</strong> English, Mandarin</li>
              </ul>
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
          </div>
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

        <section id="certifications">
          <h2>Certifications</h2>

          <div className="project">
            <h3>Technical Diagnostics and Troubleshooting Techniques</h3>
            <p><strong>Microsoft</strong> · July 2026</p>
          </div>

          <div className="project">
            <h3>Artificial Intelligence Foundations: Machine Learning</h3>
            <p><strong>LinkedIn</strong> · June 2024</p>
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
        <p>&copy; 2026 Alan Hsu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
