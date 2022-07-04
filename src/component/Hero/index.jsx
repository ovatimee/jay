import React from "react"
import HeroHeader from "./HeroHeader"
import HeroCollage from "./HeroCollage"


import "./styles.scss"


const Hero = () => {
  return (
    
    <div className="hero-container">
      <HeroHeader />
      <div className="hero-media">
        <HeroCollage />
      </div>
    </div>
  )
}

export default Hero
