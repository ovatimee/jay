import React, {useEffect, useRef} from 'react'
import gsap from 'gsap'

const FeaturesHeader = () => {
    const phoneRef = useRef(null)

  useEffect(() => {
   const tl = gsap.timeline({
      scrollTrigger: {
        trigger: phoneRef.current,
        start: "top center",
        scrub: true
      }
   })
   tl.to(
    ".hero-container",
    {backgroundColor: "#fff",
    duration: 0.25,
    },
    "-=2"
    )
  }, [])
  

  return (
    <div className="hero-text-section" ref={phoneRef}>
      <h1 className="hero-text">Visual Stories that feels like yours because they are.</h1>
    </div>
  )
}

export default FeaturesHeader