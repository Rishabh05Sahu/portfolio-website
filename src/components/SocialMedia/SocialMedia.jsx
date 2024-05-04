import React from 'react'
import "../SocialMedia/SocialMedia.css"
import github from "../../assets/github.png"
import linkdin from "../../assets/linkdin.png"
import twitter from "../../assets/twitter.png"

const SocialMedia = (props) => {
  return (
    <div className={props.className}>
      <div className="social-media">
        <img src={linkdin} alt="" />
        <img src={github} alt="" />
        <img src={twitter} alt="" />
      </div>
      <hr className='ss-line'/>
    </div>
  )
}

export default SocialMedia
