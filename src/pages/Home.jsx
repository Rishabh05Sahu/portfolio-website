import React from 'react'
import "../pages/CSS/Home.css"
import YinYang from '../components/Yin-Yang/YinYang'
import Logo from '../components/logo/Logo'
import "../components/logo/Logo"
import Back from '../components/Back/Back'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>

      <Logo />
      <Back />
      <p className='hi'>Say hi..</p>
      <YinYang />

      <Link className="project" style={{ textDecoration: 'none' }} to="/projects">Projects</Link>
      <Link className="about" style={{ textDecoration: 'none' }} to="/about">About</Link>
      <Link className="my-skill" style={{ textDecoration: 'none' }} to="/my-skills">My Skill</Link>
      <h3 className='resume'>Resume</h3>

      <SocialMedia />

    </div>
  )
}

export default Home
