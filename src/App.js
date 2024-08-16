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
          <p>I’m Alan Hsu, a software developer with a robust foundation in full stack and mobile development. Before transitioning to tech, I managed a Starbucks store full-time while balancing my studies, successfully driving business growth, enhancing customer satisfaction, and reducing turnover. I achieved a GPA of 3.86 and graduated summa cum laude during this period.</p>
          <p>In my role as a Software Engineer Intern at Blue Hill Tech, I gained extensive hands-on experience and honed my skills across various aspects of software development. I focused heavily on Java object-oriented programming, including encapsulation to ensure data integrity and security, the Spring Boot framework, and the Model-View-Controller (MVC) architecture. My work involved using Data Access Objects (DAO) and Business Objects (BO), JavaBeans, and controllers to build APIs, which deepened my understanding of building scalable and maintainable software solutions. Additionally, I worked with AWS DynamoDB, implemented APIs, and contributed to frontend development using React, Swift, and Kotlin for mobile app and web development.</p>
          <p>I’m skilled in Java, React, Python, JavaScript, and TypeScript, with experience in backend development, AWS, web development with React and React-admin, and mobile app development using Kotlin and Swift. I’m excited to leverage my diverse skills and experiences in a dynamic and collaborative environment.</p>

        </section>

        <section id="experience">
          <h2>Work Experience</h2>
          <div className="project">
            <h3>Software Engineer Intern - Blue Hill Tech, Inc.</h3>
            <p>September 2022 - September 2023</p>

              <li>Designed and implemented an order management system processing 1,000+ daily orders, utilizing DynamoDB for efficient querying and data management while adhering to strict coding standards.</li>
              <li>Implemented data visualization components using React and Node.js, showcasing proficiency in multiple programming languages.</li>
              <li>Designed and implemented RESTful API for seamless communication between system components, demonstrating strong problem-solving skills.</li>
              <li>Ensured code quality and reliability by conducting thorough code reviews and implementing automated testing framework, resulting in 98% bug-free codebase.</li>
              <li>Utilized the robotics middleware (ROS) to adjust robot actions and program automated tasks, enhancing operational efficiency and precision.</li>
              <li>Increased team productivity by 20% through successful implementation of Robot IO management features, saving 40 OPS days per year.</li>
              <li>Streamlined store metadata management process, increasing efficiency by 50% and empowering non-technical team members.</li>
              <li>Improved code reliability by developing and executing automated tests, including unit and integration tests with SpringBootTest and JUnit.</li>
              <li>Collaborated with cross-functional teams to create UI design for iOS & Android apps, ensuring intuitive and visually appealing UI design while applying computer science concepts and demonstrating effective problem solver capabilities.</li>
         
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
            <li>Languages: English, Chinese(Mandarin)</li>
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