import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './NavigationBar.css';
// import Toggle from "../Toggle/Toggle";
const NavigationBar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Zhandos</div>
            {/* <Toggle/> */}
            {/* <span>toggle</span> */}
            </div>
            <div className="n-right">
            <div className="n-list">
            <ul style={{ listStyleType: 'none' }}>
            <li className="button">
            <Link to="home" smooth={true} duration={500}>
            Home
            </Link>
            </li>
            <li className="button">
            <Link to="about" smooth={true} duration={500}>
            About
            </Link>
            </li>
            <li className="button">
            <Link to="experience" smooth={true} duration={500}>
            Experience
            </Link>
            </li>
            <li className="button">
            <Link to="projects" smooth={true} duration={500}>
            Projects
            </Link>
            </li>
            </ul>

            </div>
        </div>
    </div>
  );
};

export default NavigationBar;
