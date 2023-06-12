import React from "react";
import './Experience.css';

const Experience = () => {
  return (
    <section className="Experience" id="experience">
      <h1 className="e-heading">Work Experience</h1>
      <div className="e-container">
        <div className="e-left">
          <ul>
            <h3>QA Automation Intern</h3>
            <h3>at A1qa</h3>
            <h4>Apr 2023 - Present</h4>
            <li>Completed units in testing and test automation, covering key terms and concepts.</li>
            <li>Acquired proficiency in web automation using the Selenium WebDriver tool.</li>
            <li>Demonstrated knowledge of various test libraries such as TestNG.</li>
            <li>Developed understanding of project structure and test automation framework.</li>
            <li>Applied automation templates to streamline web application testing processes.</li>
            <li>Leveraged object-oriented programming languages, specifically Java, to automate authentication and customer success flow in web applications.</li>
          </ul>
        </div>
        <div className="e-right">
          <ul>
            <h3>Lead Data Annotator/Manual QA Engineer Lead</h3>
            <h3>at Verigram</h3>
            <h4>Jan 2021 – Dec 2022</h4>
            <li>Computer vision team Almaty, Kazakhstan</li>
            <li>Led a team of 4 manual QA engineers, effectively coordinating their efforts.</li>
            <li>Assisted clients in setting up their infrastructure, providing valuable support and expertise in Red Hat Enterprise.</li>
            <li>Collaborated closely with clients to understand their specific needs and requirements, ensuring successful onboarding.</li>
            <li>Documented complex infrastructure architecture, enabling faster onboarding for new team members.</li>
            <li>Conducted meetings with stakeholders for project planning and progress updates.</li>
            <li>Facilitated and coordinated the collection of data necessary for ML model processing.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
