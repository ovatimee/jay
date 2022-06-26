import React from "react"
import HeroHeader from "./HeroHeader"
import HeroCollage from "./HeroCollage"
import HeroFooter from "./HeroFooter"


import "./styles.scss"


const Hero = () => {
  return (
    
    <div className="hero-container">
      <HeroHeader />
      <div className="hero-media">
        <HeroCollage />
      </div>
      <HeroFooter />
    </div>
  )
}

export default Hero
