import React from 'react'
import "../HeroBox/HeroBox.css"
import heroman from "../../assets/heroman.png"


const HeroBox = () => {
  return (
    <div className='herobox '>
     <div className="herobox-left">
      <div className="herobox-left-content">
      <h1>Hi,</h1>
      <h3>I'm Rishabh.</h3>
      <h6>A self-motivated, highly skilled, and self-driven aspiring  Frontend Developer  with the ability to adapt to any situation and the proven ability to grow oneself and others.</h6>
      </div>
     </div>
     <div className="herobox-right hero-img">
       <img src={heroman} alt="" />
     </div>
      
    </div>
  )
}

export default HeroBox
