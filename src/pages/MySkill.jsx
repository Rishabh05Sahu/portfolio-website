import React from 'react'
import "./CSS/MySkill.css"
import Navbar from "../components/Navbar/Navbar"
import SocialMedia from "../components/SocialMedia/SocialMedia"


const MySkill = () => {
  return (
    <>

    <div  className='myskill'>
      <Navbar/>
      <SocialMedia/>
      <h1 className='skill-text-background'>Skills</h1>
      <div className="main-skill-container">
        <div className="left-skill-container">
          <h2>Frontend Developer</h2>
          <div className="first-left-skill-p">
          It's fun for me to bring new concepts to life.
          </div>
          <div className="skill-left-second-heading">
          <strong>I LIKE TO CODE IN</strong>
          <br />
          <p> Html, Css, Javascript,  React.js, Redux</p>
          </div>
          <div className="skill-left-tool">
          <strong>Tools</strong>
          <br />
          <ul>
            <li>Vs Code</li>
            <li>Figma</li>
            <li>Tailwind</li>
           
          </ul>
          </div>
        </div>
        <div className="right-skill-container">
        
          <h2>Backend Developer</h2>
         
          <div className="first-right-skill-p">
          Powering seamless digital experiences with robust backend solutions.
          </div>
       
          <div className="skill-right-second-heading">
          <strong>I like to code in</strong>
          <br />
          <p> Node, Mongo-db</p>
          </div>
          <div className="skill-right-tool">
          <strong>Tools</strong>
          <br />
         VScode, Github etc.
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default MySkill
