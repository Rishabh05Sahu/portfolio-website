import React from 'react'
import "../Back/Back.css"
import { Link } from 'react-router-dom'

const Back = () => {
  return (
    <div >
    
      <Link className="back" style={{ textDecoration: 'none' }} to="/"><button className='back-btn'>←</button></Link>
    </div>
  )
}

export default Back
