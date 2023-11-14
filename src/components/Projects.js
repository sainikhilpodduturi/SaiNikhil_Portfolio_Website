import React from "react";
import "../styles/projects.css";
import { Link } from "react-scroll";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectheader">PROJECTS</h2>
      <div className="works">
        <div className="work">
          <h4 className="title">iNotebook</h4>
          <div className="description">
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, voluptas!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloremque?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum?</li>
            </ul>
          </div>
          <button className="workbtn">
            <Link>View Project</Link>
          </button>
          <button className="workbtn">
            <Link>View Project</Link>
          </button>
        </div>
        <div className="work">
          <h4 className="title">iNews</h4>
          <div className="description">
          <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, voluptas!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloremque?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum?</li>
            </ul>
          </div>
          <button className="workbtn">
            <Link>View Project</Link>
          </button>
        </div>
        <div className="work">
          <h4 className="title">iAnalyze</h4>
          <div className="description">
          <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, voluptas!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloremque?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum?</li>
            </ul>
          </div>
          <button className="workbtn">
            <Link>View Project</Link>
          </button>
        </div>
        <div className="work">
          <h4 className="title">iFoodie</h4>
          <div className="description">
          <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, voluptas!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloremque?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum?</li>
            </ul>
          </div>
          <button className="workbtn">
            <Link>View Project</Link>
          </button>
        </div>
        <div className="work">
          <h4 className="title">iCoder</h4>
          <div className="description">
          <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, voluptas!</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, doloremque?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cum?</li>
            </ul>
          </div>
          <button className="workbtn">
            <Link>View Project</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
