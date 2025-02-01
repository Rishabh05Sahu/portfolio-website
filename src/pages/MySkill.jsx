import React from "react";
import "./CSS/MySkill.css";
import Navbar from "../components/Navbar/Navbar";
import SocialMedia from "../components/SocialMedia/SocialMedia";

const MySkill = () => {
  return (
    <>
      <div className="myskill">
        <Navbar />
        <SocialMedia />
        <h1 className="skill-text-background">Skills</h1>
        <div className="main-skill-container">
          <div className="left-skill-container">
            <h2>Full Stack Developer</h2>
            <div className="first-left-skill-p">
              It's fun for me to bring new concepts to life.
            </div>
            <div className="skill-left-second-heading">
              <strong>I LIKE TO CODE IN</strong>
              <br />
              <p>
                {" "}
                Next.js, React.js, Redux, Node.js, Express.js , MongoDB, Material UI, Tailwind{" "}
              </p>
            </div>
            <div className="skill-left-tool">
              <strong>Tools</strong>
              <br />
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Postman</li>
                <li>Vercel</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
          <div className="right-skill-container">
            <h2>Software Engineer</h2>

            <div className="first-right-skill-p">
              I enjoy turning complex ideas into scalable solutions through
              clean and well-structured code.
            </div>

            <div className="skill-right-second-heading">
              <strong>I like to code in</strong>
              <br />
              <p> C++, Data Structures and Algorithms, SQL, DBMS, OS, OOPs</p>
            </div>
            <div className="skill-right-tool">
              <strong>Tools</strong>
              <br />
              <ul>
                <li> VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkill;
