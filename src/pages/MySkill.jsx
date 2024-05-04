import React from 'react'
import "../pages/CSS/MySkill.css"
import Logo from '../components/logo/Logo'
import Back from '../components/Back/Back'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import laptop from "../assets/laptop.png"
import paint from "../assets/paint.png"

const MySkill = () => {
  return (
    <div>
      <Logo/>
      <Back/>
      <SocialMedia/>
      <div className="main-container">
        <div className="left">
          <div className="left-heading">
          <img src={laptop} alt="" /> <h2>Software Developer</h2>
          </div>
          <p>I enjoy writing clean code and creating useful products.</p>
          <h2 className='second-heading'>I LIKE TO CODE IN</h2>
          <p>Python, Java, Javascript, Node, MySQL, GraphQL, Spring, C, C++, MongoDB</p>
          <h2>TOOLS</h2>
          <ul>
            <li>Anaconda </li>
            <li>Eclipe</li>
            <li>Jupiter</li>
            <li>PyCharm</li>
          </ul>
        </div>
        <div className="right">
        <div className="right-heading">
          <img src={paint} alt="" /> <h2>Frontend Developer</h2>
          </div>
          <p>It's fun for me to bring new concepts to life. I consider myself fortunate to be a frontend developer because my work has a direct impact on the user's life.</p>
          <h2 className='second-heading'>SKILLS</h2>
          <p>Html, Css, Js, Handlebars, React, Redux, Sass, Bootstrap, Firebase</p>
          <h2>TOOLS</h2>
          <p>VScode, Figma, Github, AdobeXD etc.</p>
        </div>
      </div>
      <h1 className='my-skill-background-text'>Skills</h1>
    </div>
  )
}

export default MySkill
