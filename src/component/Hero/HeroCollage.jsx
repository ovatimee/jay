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
          <div></div>
          <div></div>
        </div>
      </div>
      <HeroPhoneBlock />
      <div className="right-column">
        <div className="hero-circle-right hero-element">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default HeroCollage
