import React from 'react'
import "../SocialMedia/SocialMedia.css"
import linkdin from "../../assets/linkdin.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";

const SocialMedia = (props) => {
  return (
    <div className={`social-links-container ${props.className}`}>
   <a href="https://www.linkedin.com/in/rishabh-sahu14/" target='_blank'><img src={linkdin} alt="" /></a> 
    <a href="https://github.com/Rishabh05Sahu" target='_blank'><img src={github} alt="" /></a>
   <a href="https://x.com/RishabhSah77" target='_blank'> <img src={twitter} alt="" /></a>
    <hr />
</div>
  )
}

export default SocialMedia
