import React from 'react'
import "../SocialMedia/SocialMedia.css"
import linkdin from "../../assets/linkdin.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";

const SocialMedia = (props) => {
  return (
    <div className={`social-links-container ${props.className}`}>
    <img src={linkdin} alt="" />
    <img src={github} alt="" />
    <img src={twitter} alt="" />
    <hr />
</div>
  )
}

export default SocialMedia
