import React from "react";
import "../styles/intro.css";
import Image from "../assets/Image.png";
import { Link } from "react-scroll";
import Resume from "../assets/resume.pdf";

const Intro = () => {
  return (
    <section id="intro">
      <img src={Image} alt="" className="introImg" />
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sai Nikhil Podduturi</span> <br /> Web
          Developer
        </span>
        <p className="introPara">
          Dynamic software engineer with 1 year of hands-on experience, I
          specialize in crafting robust web applications using a diverse tech
          stack, including React.js, Springboot, and Express.js. Proficient in
          HTML, CSS, JavaScript, and adept at leveraging Node.js, MySQL, and
          MongoDB to create robust backends. I excel in full-stack development
          and leverage Git for version control. Well-versed in Agile
          methodology, I bring a collaborative and adaptive approach to project
          management. My expertise extends to Java, Bootstrap, and Linux.
          Passionate about continuous learning and implementing best practices
          in software development. Seeking opportunities to contribute my skills
          and passion for innovative software development on challenging
          projects.
        </p>
        <Link>
          <button
            className="introBtn"
            onClick={() => {
              window.open(Resume);
            }}
          >
            My Resume
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
