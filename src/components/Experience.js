import React from "react";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="experience-header">EXPERIENCE</h2>
      <div className="company">
        <h3 className="job-title">Software Engineer</h3>
        <p className="company-detail">
          LTIMindtree Ltd. | Bengaluru, India <br /> Jul,2022 - Aug,2023{" "}
        </p>
        <ul className="job-summary">
          <li>
            Developed a module of the ITOPS tool using React and Spring Boot,
            ensuring smooth functionality and optimal user experience.
          </li>
          <li>
            Actively participated in Agile methodologies, including sprint
            planning, daily stand-ups, and retrospective meetings, fostering
            collaboration, transparency, and continuous improvement in project
            execution.
          </li>
          <li>
            Prepared test cases for a specific component of the ITOPS tool,
            ensuring thorough verification of its functionalities and features.
          </li>
          <li>
            Conducted extensive research and analysis on various Document
            Management System (DMS) tools available in the market. Evaluated
            their features and suitability to meet the requirements of the ITOPS
            tool.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
