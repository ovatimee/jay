import React, { useState, useEffect, useRef } from "react";
import Hero from "../component/Hero"
import FeatureSlides from "../component/FeatureSlides"
import About from "../component/SemiSection/About"
import Footer from "../component/Footer"
import CustomCursor from "../component/CustomCursor"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";



const Main = () => {
  const [loader, setLoader] = useState(true)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)  


  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 500)
  }, [1])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  return loader ? (
    <div  />
  ) : (
   
    <div >
    { windowWidth > 750? <CustomCursor /> : "" }
      <div className="mid">
        <Hero className="hero" windowWidth={windowWidth} />
        <About />
      </div>
      <div> 
      <FeatureSlides windowWidth={windowWidth}/>
      </div>
     <Footer />
    </div>
  )

}

export default Main
