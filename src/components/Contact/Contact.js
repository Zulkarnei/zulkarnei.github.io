import React from "react";
import './Contact.css';
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="Contact">
      {/* <p className="Contact">Contacts</p> */}
      <h6>My contacts</h6>
      <a href="https://github.com/Zulkarnei"><AiFillGithub className="github-icon"/></a>
      <a href="https://www.linkedin.com/in/zhandos-zhalgassov-74aaa31b8/"><AiFillLinkedin className="linkedin-icon"/></a>
      <a href="https://t.me/Dazai_Osamu_33"><BsTelegram className="telegram-icon"/></a>
    </div>
  );
};

export default Footer;
