import React from "react";
import './About.css';
import computer from "../../assets/images/computer.png"
const About = () => {
  return (
    <section className="About" id="about">
      <div className="a-left">
        {/* <span>left</span> */}
        <img src={computer}></img>
      </div>
      <div className="a-right"> 
      <h3>About Me</h3>
      <h4> Based on Almaty, Kazakhstan 📍</h4>
      <p>
        Hey there! I'm Zhandos, a beginner web developer and QA engineer. I am passionate about what I do and love diving into the world of web development and quality assurance. 
        My journey in IT world started from <a href="Verigram.ai">Verigram</a> in 2021 January. I started working as Data Annotator and grew up to Team Lead of Data Annotation, and we also, as a team,
        manually tested face recognition and document recognition services. Most of time I worked with large data sets, parsing and labeling them. In 2023 April I enrolled to internship in <a href="a1qa.com">A1qa</a>. 
        And now i'm doing Quality Assurance automation course and i continue to do this.
      </p>

      </div>
    </section>
  );
};

export default About;
{/* <p>
Hey there! I'm Zhandos, a beginner web developer and QA engineer. I am passionate about what I do and love diving into the world of web development and quality assurance. 
My journey in IT world started from <a href="Verigram.ai">Verigram</a> in 2021 January. I started working as Data Annotator and grew up to Team Lead of Data Annotation, and we also, as a team,
manually tested face recognition and document recognition services. Most of time I worked with large data sets, parsing and labeling them. In 2023 April I enrolled to internship in <a href="a1qa.com">A1qa</a>. 
And now i'm doing Quality Assurance automation course and i continue to do this.
</p> */}