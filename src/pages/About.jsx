import React from 'react'
import "./CSS/About.css"
import man from "../assets/man.png"
import Navbar from "../components/Navbar/Navbar"
import SocialMedia from '../components/SocialMedia/SocialMedia'


const About = () => {
  return (
    
    <div className='about'>
      <Navbar className="navbarAbout"/>
      <SocialMedia className="socialmediaAbout"/>

     <div className= "about-content">
     <p>I'm a Computer Science  student, currently in my final year of BTech. Surrounded by an educational environment and esteemed mentors, I've enhanced my technical knowledge.</p>
    <br />
     <br />
     <p>I have a keen interest in Web 2.0 and Web 3.0 technologies. Proficient in HTML, CSS, and JavaScript, I enjoy working with modern frameworks like React, Redux, Tailwind CSS and NextJs. My aim is not just to write code, but to develop aesthetically pleasing and high-performance web applications.</p><br />
     <br />
     <p>I take pride in my practical projects, where I've built interactive web applications and user interfaces. My projects feature innovative designs and clean codebases, enhancing user engagement and usability.</p>
     </div>
     <div className="man-img">
      <img src={man} alt="" />
     </div>
      
    </div>
  )
}

export default About
