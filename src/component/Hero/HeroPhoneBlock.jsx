import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";


const HeroPhoneBlock = () => {

  const desktopRef = useRef(null)
  const mobileRef = useRef(null)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)


  useEffect(() => {

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])


  useEffect(() => {

    const stopTrigger = () => {

      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: windowWidth < 750? mobileRef.current : desktopRef.current,
          scrub: true,
          pin: true,
        },
      })


      tl.to(desktopRef.current, { scale: .8 }, "+=.2")

      tl.to(
        ".mid",
        {
          backgroundColor: "#fff",
          duration: .25,
        },
        "-=.5"
      )

      return tl
    }
    const master = gsap.timeline()

    setTimeout(() => {
      master.add(stopTrigger())
    })

  }, [])


  return (
    <div data-scroll className="hero-phone-block" >
      <div className="hero-description">
        <h1 className="hero-greeting" >Hello.</h1>
        <p className="hero-name">Jason Clinton</p>
        <p className="">Multi-Discipline Designer</p>
        <p ref={mobileRef}>based in London.</p>
      </div>
      <div className="hero-phone-template" ref={desktopRef}>
        <div className="middle-circle">
          <div className="hacker-wrapper">
            <div className="inside-wrapper">
              <div className="person">
                <div className="hood">
                  <div className="spects">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="shoulder">
                  <div className="neck"></div>
                </div>
              </div>
              <div className="lap-screen">
                <span className="base"></span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <ul className="hero-description">
        <li>React</li>
        <li>Tailwind</li>
        <li>Typescript</li>
        <li>Design</li>
        <li>Figma</li>
      </ul>

    </div>
  )
}

export default HeroPhoneBlock
