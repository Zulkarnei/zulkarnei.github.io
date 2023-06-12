// Home
import React from "react";
import './Home.css';
import sharp from "../../assets/images/sharp.png"
import css from "../../assets/images/css.png"
import html from "../../assets/images/html.png"
import java from "../../assets/images/java.png"
import selenium from "../../assets/images/selenium.png"
import js from "../../assets/images/js.png"
// import docker from "../../assets/images/docker.png"
import nomad from "../../assets/images/nomad.png"
import NavigationBar from "../NavigatioBar/NavigationBar";
const Home = () => {
  return (
    <section className="intro" id="home">
      <div className="i-left">
        {/* left */}
        <div className="i-name">
          <span>Hi! I am</span>
          <span>Zhalgassov Zhandos</span>
          <span>Junior web and QA automation developer,  producting the quality work</span>
          <span>My Tech Stack</span> 
          <div className="i-skills">
            {/* <p className="i-stack">Tech Stack</p> */}
            <ul>
              <li><a href="https://docs.oracle.com/en/java/"><img src={java}></img></a></li>
              <li><a href="https://learn.microsoft.com/en-us/dotnet/csharp/"><img src={sharp}></img></a></li>
              <li><a href="https://www.selenium.dev/documentation/"><img src={selenium}></img></a></li>
              <li><a href="https://javascript.info/"><img src={js}></img></a></li>
              <li><a href="https://www.w3.org/Style/CSS/"><img src={css}></img></a></li>
              <li><a href="https://html.spec.whatwg.org/"><img src={html}></img></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="i-right">
         {/* right */}
         <img src={nomad} alt="nomad" className="nomad-img"/>
      </div>
    </section>
    
  );
};

export default Home;
