import React, {useRef, useEffect} from "react"
import "./styles.scss"

const About = () => {

  return (
    <div className="about-container">
<div className="hero-usedBy" >
      <div className="hero-usedBy-copy" >
        <div className="hero-usedBy-card" >
          <h3>Design</h3>
          <p>Create A digital projects with unique ideas</p>
          <a href="#">20 Projects</a>
        </div>
        <div className="hero-usedBy-card">
          <h3>Front-End</h3>
          <p>I develop frontend with coding super smooth</p>
          <a href="#">20 Projects</a>
        </div>
        <div className="hero-usedBy-card">
          <h3>SEO</h3>
          <p>Boost Your Business with SEO optimized</p>
          <a href="#">20 Projects</a>
        </div>
      </div>
      <div className="hero-usedBy-logos">
        <p className="hero-usedBy-title">Every great design begin with better story </p>
        <p className="p-text">Since beginning my journey as frontend developer, designer and a hacker. I've dont remote work for agencies, consulted for startups with talented people to create degital products for both business and consumer use. I'm quitely confident, naturally curius, and perpually working on improving my chopson design problem by time. </p>
      </div>
    </div>
    </div>
    
  )
}

export default About
