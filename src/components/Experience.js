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
            Spearheaded the development of a critical module for the ITOPS tool,
            leveraging React for the front-end and Spring Boot for the back-end.
            Ensured seamless functionality and an optimal user experience
            through meticulous design and implementation.
          </li>
          <li>
            Played a pivotal role in adopting and implementing Agile
            methodologies, actively engaging in sprint planning, daily
            stand-ups, and retrospective meetings. This fostered a culture of
            collaboration, transparency, and continuous improvement, enhancing
            overall project execution efficiency.
          </li>
          <li>
            Demonstrated a commitment to software quality by meticulously
            preparing and executing test cases for a specific component of the
            ITOPS tool. This thorough verification process ensured the
            reliability and robustness of the tool's functionalities and
            features.
          </li>
          <li>
            Conducted extensive research and analysis on various Document
            Management System (DMS) tools available in the market. This involved
            evaluating their features and assessing their suitability to meet
            the specific requirements of the ITOPS tool. tool.
          </li>
          <li>
            Facilitated effective cross-functional collaboration by actively
            participating in diverse project activities, contributing to a
            well-rounded understanding of project dynamics beyond individual
            roles and responsibilities.
          </li>
          <li>
            Exhibited a problem-solving mindset by addressing challenges
            encountered during the development process. Additionally,
            contributed to the innovative solutions and enhancements that
            positively impacted the overall performance of the ITOPS tool.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
