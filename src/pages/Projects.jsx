import React from 'react'
import Back from '../components/Back/Back'
import SocialMedia from '../components/SocialMedia/SocialMedia'
import Logo from '../components/logo/Logo'
import Card from '../components/Card/Card'
import "./CSS/Projects.css"

const Projects = () => {
  return (
    <div className='projects-page'>
      <Back/>
      <SocialMedia/>
      <Logo/>
      <div className="card-container">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}

export default Projects
