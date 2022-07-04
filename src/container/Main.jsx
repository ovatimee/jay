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
      <div className="mid">
        <Hero className="hero"  />
        <About />
      </div>
      <div> 
      <FeatureSlides />
      </div>
     <Footer />
    </div>
  )

}

export default Main
