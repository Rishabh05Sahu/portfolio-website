import React from 'react'
import Back from '../components/Back/Back'
import "../pages/CSS/About.css"
import SocialMedia from '../components/SocialMedia/SocialMedia'
import man from "../assets/man.png"
import Logo from '../components/logo/Logo'

const About = () => {
  return (
    <div className='aboutPage'>
      <h1 className='about-background-heading'>ABOUT</h1>
      <Logo className="about-logo"/>
      <Back/>
      < SocialMedia className="about-social-media"/>
      <div className="about-main">
      <div className="about-left">
       
        <p>I'm a Software Developer at Zoho Corporation. I adore designing user-friendly websites that are both simple and elegant. I consider myself to be a lifelong learner. I'm proficient in data structures and algorithms.</p>
        <p>I'm also interested in Machine Learning, and I adore experimenting with new ideas and putting together fantastic projects. I've always been interested in robotics and built around seven of them when I was 15 years old.</p>
        <p>I'm a Crypto junkie and a Pianist contrasting right ? I've been fascinated by technology since I was a child and grown up as a Tech Savvy</p>
        
      </div>
        <div className="about-right">
          <img src={man} alt="" />
        </div>
        </div>
        
    </div>
  )
}

export default About
