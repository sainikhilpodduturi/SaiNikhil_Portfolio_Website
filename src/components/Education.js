import React from 'react'
import '../styles/education.css'

const Education = () => {
  return (
    <section id="education">
        <span className="header">EDUCATION</span>
        <div className="courses">
            
                <div className="course-details">
                    <h2>B.SC - Computer Science</h2>
                    <p>2019 - 2022 | Score: 9.38 CGPA</p>
                    <p>Osmania University, Hyderabad</p>
                </div>
                <div className="course-details">
                    <h2>Intermediate - MPC</h2>
                    <p>2017 - 2019 | Score: 97%</p>
                    <p>SMS Junior College, Siddipet</p>
                </div>
                <div className="course-details">
                    <h2>10th Standard</h2>
                    <p>2016 - 2017 | Score: 8.7 CGPA</p>
                    <p>Sharada High School, Siddipet</p>
                </div>
            
        </div>
    </section>
  )
}

export default Education;
