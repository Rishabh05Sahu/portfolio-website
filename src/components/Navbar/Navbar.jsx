import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import back_icon from "../../assets/back.svg"


const Navbar = (props) => {
  return (
  
    <div className={`navbar ${props.className}`}>
     
      <h1 className="logo-text">RS</h1>
      <button className='back-btn'>
      <Link  style={{ textDecoration: 'none' }} to="/"><img src={back_icon} alt="" /></Link>
        </button>
    </div>
  )
}

export default Navbar


