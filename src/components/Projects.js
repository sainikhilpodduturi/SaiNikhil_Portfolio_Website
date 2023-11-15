import React from "react";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectheader">PROJECTS</h2>
      <div className="works">
        <div className="work">
          <h4 className="title">iNotebook</h4>
          <div className="description">
            <ul>
              <li>
                Demonstrated expertise in full-stack development through the
                creation of iNotebook, a web application powered by the MERN
                (MongoDB, Express.js, React.js, Node.js) stack. Leveraged
                Bootstrap for responsive and aesthetically pleasing user
                interfaces.
              </li>
              <li>
                Engineered a robust note-taking platform with sophisticated
                features, allowing users to organize their notes effectively by
                utilizing tags, titles, and detailed descriptions. This enhances
                user experience and productivity by providing a structured
                approach to information management.
              </li>
              <li>
                Implemented a secure authentication system using JSON Web Tokens
                (JWT) to safeguard user data and ensure a protected environment.
                This adds an extra layer of privacy and control, contributing to
                the overall reliability of the iNotebook application.
              </li>
            </ul>
          </div>
          <button
            className="workbtn"
            onClick={() => {
              window.open(
                "https://github.com/sainikhilpodduturi/iNotebook---Frontend"
              );
            }}
          >
            Frontend Code
          </button>
          <button
            className="workbtn"
            onClick={() => {
              window.open(
                "https://github.com/sainikhilpodduturi/iNotebook---Backend"
              );
            }}
          >
            Backend Code
          </button>
        </div>
        <div className="work">
          <h4 className="title">iNews</h4>
          <div className="description">
            <ul>
              <li>
                Developed using React and Bootstrap, iNews employs modern web
                development practices. React-router is incorporated for smooth
                navigation, ensuring a seamless transition between different
                sections of the application. The integration of the NewsAPI adds
                real-time and up-to-date content, enhancing the application's
                relevance and reliability
              </li>
              <li>
                iNews stands out with its category-specific news presentation,
                allowing users to explore content tailored to their interests.
                The inclusion of a dark mode offers a personalized and visually
                comfortable experience. The implementation of infinite scroll
                eliminates the need for pagination, providing a continuous and
                uninterrupted flow of news content. These features collectively
                contribute to a well-rounded and user-centric news application.
              </li>
            </ul>
          </div>
          <button
            className="workbtn"
            onClick={() => {
              window.open("https://github.com/sainikhilpodduturi/iNews");
            }}
          >
            View Code
          </button>
        </div>
        <div className="work">
          <h4 className="title">iAnalyze</h4>
          <div className="description">
            <ul>
              <li>
                iAnalyze stands out as a cutting-edge text analyzing web
                application meticulously crafted with React and Bootstrap.
                Leveraging fundamental React concepts such as state, props, and
                hooks, the application offers a seamless user experience for
                text manipulations.
              </li>
              <li>
                Through the incorporation of essential features like Dark Mode,
                iAnalyze goes beyond the basics. The application empowers users
                with the ability to perform diverse text transformations,
                including converting text to lower and upper case, and
                eliminating extra white spaces.
              </li>
              <li>
                iAnalyze goes beyond basic text manipulation, offering users
                valuable insights such as word count and estimated reading time.
                The project showcases a commitment to delivering practical
                functionality and a user-focused approach to text analysis.
              </li>
            </ul>
          </div>
          <button
            className="workbtn"
            onClick={() => {
              window.open("https://ianalyze.netlify.app/");
            }}
          >
            View Demo
          </button>
          <button
            className="workbtn"
            onClick={() => {
              window.open("https://github.com/sainikhilpodduturi/iAnalyze");
            }}
          >
            View Code
          </button>
        </div>
        <div className="work">
          <h4 className="title">iFoodie</h4>
          <div className="description">
            <ul>
              <li>
                Crafted iFoodie, a dynamic and visually engaging static website
                using a combination of HTML and CSS. Employed cutting-edge media
                queries and adhered to industry-standard CSS practices to ensure
                seamless responsiveness across all devices.
              </li>
              <li>
                Demonstrated a comprehensive understanding of CSS, incorporating
                a spectrum of properties from fundamental to advanced levels in
                the iFoodie project. The website stands out not only for its
                aesthetic appeal but also for the meticulous application of CSS
                techniques, showcasing a commitment to design innovation and
                user-centricity.
              </li>
              <li>
                Ensured universal accessibility by meticulously designing
                iFoodie to be compatible with all devices. Through strategic
                implementation of responsive design principles, the website
                adapts effortlessly to various screen sizes, offering a
                consistent and enjoyable browsing experience for users across
                desktops, tablets, and smartphones.
              </li>
            </ul>
          </div>
          <button
            className="workbtn"
            onClick={() => {
              window.open("https://sainikhilpodduturi.github.io/iFoodie/");
            }}
          >
            View Demo
          </button>
          <button
            className="workbtn"
            onClick={() => {
              window.open("https://github.com/sainikhilpodduturi/iFoodie");
            }}
          >
            View Code
          </button>
        </div>
        <div className="work">
          <h4 className="title">iCoder</h4>
          <div className="description">
            <ul>
              <li>
                Skillfully crafted a static website, iCoder, using Bootstrap as
                the primary framework, demonstrating a comprehensive
                understanding of Bootstrap concepts from fundamental to advanced
                levels.
              </li>
              <li>
                Purposefully developed iCoder not only as a practical
                implementation of Bootstrap but also as a testament to the depth
                of knowledge acquired in web development through hands-on
                experience.
              </li>
              <li>
                Successfully covered a spectrum of Bootstrap features, spanning
                from basic principles to advanced techniques, highlighting a
                commitment to continuous learning and growth in web development.
              </li>
            </ul>
          </div>
          <button
            className="workbtn"
            onClick={() => {
              window.open("https://sainikhilpodduturi.github.io/iCoder/");
            }}
          >
            View Demo
          </button>
          <button
            className="workbtn"
            onClick={() => {
              window.open("https://github.com/sainikhilpodduturi/iCoder");
            }}
          >
            View Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
