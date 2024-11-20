import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../pages/CSS/Home.css";
import Wheel from "../components/Wheel/Wheel";
import Navbar from "../components/Navbar/Navbar";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import HeroBox from "../components/HeroBox/HeroBox";


const Home = () => {
  const [symbolClick, setsymbolClick] = useState(false);

  return (
    <div className={`home ${symbolClick ? "herobox-container " : ""}  `}>
      <Navbar className={` ${symbolClick ? "socialmediaAbout " : ""}  `} />
      {symbolClick ? <HeroBox /> : <></>}
      <Wheel symbolClick={symbolClick} setsymbolClick={setsymbolClick} />
      <Link style={{ textDecoration: "none" }} to="/projects">
        <h2
          className={`project-link ${symbolClick ? "socialmediaAbout " : ""}  `}
        >
          Projects
        </h2>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/about">
        <h2
          className={`about-link ${symbolClick ? "aboutabout  socialmediaAbout" : ""}  `}
        >
          About
        </h2>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/my-skills">
        <h2 className="my-skill-link">My Skill</h2>
      </Link>
      <a href="https://bit.ly/rishabhsahu-resume" target='_blank' rel='noopener noreferrer'>
        <h2 className={`resume-link ${symbolClick ? "socialmediaAbout " : ""}`}>
          Resume
        </h2>
      </a>
      <a
        href="mailto:rishabhsahu13873@gmail.com?subject=Contact&body=Hi, I would like to get in touch with you."
        target='_blank' className="hi-link"
        style={{ textDecoration: "none" }}
      >
        <h3 className="hi-link">Say hi..</h3>
      </a>

      <SocialMedia className={` ${symbolClick ? "socialmediaAbout aboutabout " : ""}  `} />
    </div>
  );
};

export default Home;

