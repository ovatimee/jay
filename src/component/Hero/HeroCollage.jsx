import React, { useEffect } from "react";
import { gsap } from "gsap";
import HeroPhoneBlock from "./HeroPhoneBlock"



const HeroCollage = () => {

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 0.5
    })

    tl.fromTo(
      ".hero-element",
      { y: 300 },
      { y: 0, duration: 1, delay: (i) => (0.2 * i) }
    )

  }, [])


  return (
    <div className="hero-collage">
      <div className="left-column">
        <div className="hero-circle-left hero-element">
        <svg height="500" width="200">
      		<circle cx="0" cy="220" r="50%" stroke="white" fill="none" stroke-opacity=".2" />
    	</svg>
      <span className="circle-first-child">
      <svg height="400" width="200">
      		<circle cx="0" cy="220" r="35%" stroke="white" fill="none" stroke-width="2%" />
    	</svg>
      </span>
      <span className="circle-second-child">
      <svg height="400" width="200">
      		<circle cx="0" cy="220" r="28%" stroke="white" fill="white" />
    	</svg>
      </span>
        </div>
      </div>
      <HeroPhoneBlock />
      <div className="right-column">
        <div className="hero-circle-right hero-element">
        <svg height="500" width="200">
      		<circle cx="220" cy="220" r="50%" stroke="white" fill="none" stroke-opacity=".2" />
    	</svg>
      <span className="circle-first-child">
      <svg height="400" width="200">
      		<circle cx="220" cy="220" r="35%" stroke="white" fill="none" stroke-width="2%" />
    	</svg>
      </span>
      <span className="circle-second-child">
      <svg height="400" width="200">
      		<circle cx="220" cy="220" r="28%" stroke="white" fill="white" />
    	</svg>
      </span>
        </div>

      </div>
    </div>
  )
}

export default HeroCollage
