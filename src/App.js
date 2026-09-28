import React from 'react';
import './App.css';
import profilePic from './images/profile.jpg';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={profilePic} alt="Alan Hsu" className="profile" />
      <h1>Alan Hsu</h1>
      <p>Field Engineer • Robotics • Software Engineering</p>
    </header>

      <nav>
        <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#work-example">Work Example</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
      {/* ABOUT */}
        <section id="about">
          <h2>About Me</h2>
            <p>
                I’m a Field and Software Engineer with a background in robotics, software development, and production deployments. 
                I’ve worked hands-on with robotic systems in real-world environments, covering deployment, configuration, calibration, 
                troubleshooting, software support, and system maintenance.
            </p>
            <p> My software engineering background allows me to troubleshoot beyond the hardware layer. I’m comfortable investigating software,
                APIs, databases, configurations, logs, and system behavior to identify and resolve issues. My field experience has also taught 
                me how to work under pressure, communicate with customers and engineering teams, and keep systems operating reliably in real-world 
                environments. 
            </p>
            <p> 
                Before transitioning into engineering, I worked as a Store Manager at Starbucks while completing my degree at Arizona State University. 
                Balancing full-time work with school helped develop my leadership, communication, and operational problem-solving skills. I graduated 
                summa cum laude. 
            </p>
            <p> 
                  I enjoy solving practical engineering problems and working at the intersection of software, robotics, hardware, and real-world operations. 
            </p>
        </section>
  
      {/* EXPERIENCE */}
      <section id="experience">
        <h2>Work Experience</h2>
          <div className="project">
            <h3>Field Engineer - Artly AI</h3>
              <p>September 2023 - April 2026</p>

              <ul>
                  <li> Deployed and commissioned robotic coffee systems across 20+ customer sites and live events in the U.S. and Canada with a 100% on-time completion rate, handling equipment receiving, staging, installation, configuration, calibration, operational testing, teardown, and packing. </li>
                  <li> Troubleshot robotic hardware and software failures in customer environments by isolating symptoms, checking system status and logs, inspecting hardware and wiring, and leveraging ROS/RViz and sensor data to restore operation. </li>
                  <li> Diagnosed and repaired component-level hardware issues involving sensors, cameras, linear servo actuators, solenoids, relays, control boards, and mechanical components using multimeters and system diagnostics. </li>
                  <li> Authored illustrated SOPs and step-by-step troubleshooting runbooks for both electro-mechanical subsystems and software tools, providing technical teams with visual guides for precision repairs and platform configurations. </li>
                  <li> Utilized ROS and RViz for field diagnostics and calibration, monitoring robot state, sensor data, camera feeds, TF relationships, and launch configurations to isolate issues across hardware and software boundaries. </li>
                  <li> Resolved software and configuration issues by reviewing Linux logs, modifying launch files/configuration parameters, and validating system behavior post-change. </li>
                  <li> Troubleshot networking, Linux services, backend connectivity, and database configurations during on-site and remote customer support, escalating complex software bugs to core engineering when required. </li>
                  <li> Performed preventive maintenance and post-repair validation by inspecting components, replacing failed parts, recalibrating systems, and running comprehensive operational tests. </li>
                  <li> Provided high-tier on-site and remote technical support 5 days per week, responding to service tickets and guiding troubleshooting from initial symptom identification through final resolution. </li>
                  <li> Partnered cross-functionally with software and engineering teams by providing field diagnostics, reproducing issues, and validating technical fixes on deployed systems. </li>
                  <li> Supported live customer coffee service, managing unexpected robot failures and implementing real-time adjustments to minimize service interruptions and maximize uptime. </li>
              </ul>
          </div>
          
          <div className="project">
            <h3>Software Engineer Intern - Artly AI</h3>
              <p>September 2022 - August 2023</p>

              <ul>
                <li>Built a full-stack order management system handling 1,000+ daily orders using Node.js, DynamoDB, and REST APIs.</li>
                <li>Developed React-based dashboards for system monitoring and operational visibility.</li>
                <li>Designed and maintained backend services supporting customer and operational workflows.</li>
                <li>Built and integrated REST APIs across system modules to ensure reliable data flow between frontend, backend, and robotics systems.</li>
                <li>Implemented automated testing (JUnit, Spring Boot Test) to improve system stability and reduce production issues.</li>
                <li>Integrated ROS-based robotics control into backend workflows for real-time system behavior updates.</li>
                <li>Supported production deployments and resolved system issues in live customer environments.</li>
              </ul>
          </div>
      
          <div className="project">
                  <h3>Store Manager - Starbucks Coffee Company</h3>
                    <p>December 2008 - September 2022</p>
                    <p>Promoted internally from Barista to Store Manager over 13+ years through demonstrated leadership, operational execution, and problem-solving in high-volume production environment. </p>
                    <ul>
                      <li> Led teams of 20–30 employees and directed daily store operations, ensuring cross-functional workflow coordination, staffing, logistics, and 100% operational continuity in a high-volume client environment. </li>
                      <li> Improved annual sales performance by 5–10% YoY and reduced employee turnover by 40% below company average through proactive team coaching, technical training, and workflow optimization. </li>
                      <li> Reduced hourly employee turnover to approximately 40% below company average through hands-on coaching, mentoring, and team development. </li>
                      <li> Oversaw equipment and operational issues, coordinating troubleshooting, maintenance, and timely resolution to minimize service disruptions. </li>
                      <li> Consistently exceeded customer satisfaction goals through process improvement, team coaching, and effective day-to-day execution. </li>
                      <li> Recognized as Manager of the Quarter (Q3 2017, Q2 2022) for operational performance and leadership. </li>
                    </ul>
                </div>
        </section>

        {/* WORK EXAMPLE */}
        <section id="work-example">
          <h2>Field Robotics Systems</h2>

          <h3>Deployment, Integration & Troubleshooting</h3>

          <p>
            Hands-on experience deploying, configuring, operating, and
            maintaining robotic systems in dynamic customer and production
            environments. My field work spans system integration, module-level
            diagnostics, hardware and software troubleshooting, Linux-based
            support, and ROS/RViz-based robot monitoring and calibration.
          </p>

          <div className="project">
            <h3>Technical Stack & Tools</h3>

            <ul>
              <li>
                <strong>Robot & Middleware:</strong> ROS, RViz
              </li>
              <li>
                <strong>Operating Systems & Runtime:</strong> Linux, Bash,
                Shell Tools, System Diagnostics
              </li>
              <li>
                <strong>Backend & Services:</strong> AWS, DynamoDB, REST APIs
              </li>
              <li>
                <strong>Programming & Scripting:</strong> Python, Java
              </li>
              <li>
                <strong>Hardware:</strong> Sensors, actuators, relays,
                control boards, power systems
              </li>
            </ul>
          </div>

          <div className="project">
            <h3>Field Deployment & System Integration</h3>

            <p>
              <strong>Pre-Deployment:</strong> Complete system checkout,
              configuration review, equipment preparation, and verification of
              required hardware and software components.
            </p>

            <p>
              <strong>On-Site Integration:</strong> Install and configure
              robotic systems, connect and validate supporting electromechanical
              equipment, and perform calibration and operational checks.
            </p>

            <p>
              <strong>Commissioning:</strong> Operate systems under real-world
              conditions, monitor robot state, tune parameters, and verify
              reliable performance before operational handoff.
            </p>

            <p>
              <strong>Post-Deployment:</strong> Perform teardown, investigate
              issues discovered during operation, document field findings, and
              provide ongoing remote technical support.
            </p>
          </div>

          <div className="project">
            <h3>Structured Troubleshooting Approach</h3>

            <p>
              When a field system encounters a fault, I focus on isolating the
              issue systematically before changing multiple variables at once.
              Starting from the observed symptoms, I evaluate the mechanical,
              electrical, software, configuration, and integration layers.
            </p>

            <ol>
              <li>
                <strong>Observe:</strong> Reproduce the failure safely and
                document symptoms and operating conditions.
              </li>
              <li>
                <strong>Isolate:</strong> Determine which system layer is most
                likely responsible for the fault.
              </li>
              <li>
                <strong>Diagnose:</strong> Analyze logs, Linux runtime behavior,
                ROS topics and states, configurations, and hardware behavior.
              </li>
              <li>
                <strong>Correct:</strong> Apply targeted repairs,
                recalibration, module replacement, or software changes.
              </li>
              <li>
                <strong>Validate:</strong> Run operational testing to confirm
                the system is functioning reliably.
              </li>
              <li>
                <strong>Close the Loop:</strong> Document findings and
                communicate technical feedback for future improvements.
              </li>
            </ol>
          </div>

          <div className="project">
            <h3>System-Level Debugging</h3>

            <ul>
              <li>
                <strong>Physical System:</strong> Inspect motion, mechanical
                wear, wiring, sensor alignment, and hardware interactions.
              </li>
              <li>
                <strong>Robot / Middleware:</strong> Use ROS and RViz to
                monitor robot state, visualize sensor data, and tune calibration
                parameters.
              </li>
              <li>
                <strong>Linux / Runtime:</strong> Use shell utilities and
                system diagnostics to investigate processes, resources,
                networking, and runtime configuration.
              </li>
              <li>
                <strong>Application / Backend:</strong> Trace application
                behavior through REST APIs and evaluate cloud database state
                such as DynamoDB.
              </li>
            </ul>
          </div>
        </section>
  
        {/* SKILLS */}
        <section id="skills">
          <h2>Skills</h2>
             <ul>
                <li><strong>Programming Languages:</strong> Java, Python, JavaScript, TypeScript, C++, Kotlin, Swift</li>
                <li><strong>Backend:</strong> Spring Boot, REST APIs, Microservices</li>
                <li><strong>Robotics & Field Systems:</strong> Robotics deployment, system integration, troubleshooting, calibration, production support</li>
                <li><strong>Robotics Tools:</strong> ROS, RViz</li>
                <li><strong>Cloud:</strong> AWS (EC2, S3, DynamoDB)</li>
                <li><strong>Databases:</strong> MySQL, PostgreSQL, DynamoDB</li>
                <li><strong>Frontend:</strong> React</li>
                <li><strong>Systems:</strong> Linux, Bash, Shell Tools</li>
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
            <p>
              Cumulative GPA: 3.68/4.0, Major GPA: 3.84/4.0
            </p>
          </div>

          <div className="project">
            <h3>Chung Yuan Christian University</h3>
            <p>Bachelor's Degree in Mechanical Engineering</p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2>Projects</h2>

          <div className="project">
            <h3>
              Capstone Project: Online E-commerce Marketplace for Selling
              Salvaged Lumber
            </h3>

            <p>Urban Machine • September 2022 - March 2023</p>

            <ul>
              <li>
                Collaborated in a team of 5 students to develop a prototype
                application for selling salvaged lumber online.
              </li>
              <li>
                Designed and implemented an online e-commerce marketplace
                using a three-tier architecture.
              </li>
              <li>
                Utilized PostgreSQL, SQL, Python, Node.js, TypeScript, and REST
                APIs for database management, full-stack development, and
                system integration.
              </li>
            </ul>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications">
          <h2>Certifications</h2>

          <div className="project">
            <h3>Technical Diagnostics and Troubleshooting Techniques</h3>
            <p>
              <strong>Microsoft</strong> · July 2026
            </p>
          </div>

          <div className="project">
            <h3>Artificial Intelligence Foundations: Machine Learning</h3>
            <p>
              <strong>LinkedIn</strong> · June 2024
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <h2>Contact</h2>

          <p>
            Email:{' '}
            <a href="mailto:alaste22@gmail.com">
              alaste22@gmail.com
            </a>
          </p>

          <p>
            Phone:{' '}
            <a href="tel:+16504512294">
              (650) 451-2294
            </a>
          </p>

          <p>Location: San Mateo, CA</p>

          <p>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/alan-hsu-096065161"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/alan-hsu-096065161
            </a>
          </p>

          <p>
            Portfolio:{' '}
            <a
              href="https://ahsu55.github.io/alan-hsu-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ahsu55.github.io/alan-hsu-portfolio
            </a>
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Alan Hsu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
