import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";


const HeroPhoneBlock = () => {

  const phoneRef = useRef(null)


  useEffect(() => {
    const intro = () => {
      const tl = gsap.timeline()
      tl.fromTo(phoneRef.current, { y: 200 }, { y: 0, duration: 1 })
      return tl
    }

    const stopTrigger = () => {

      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          scrub: true,
          pin: true,
          // anticipatePin: 1,
          // markers: true,
        },
      })


      tl.to(phoneRef.current, { scale: .8 }, "+=.2")
      // tl.to(
      //   `.hero-phone-template`,
      //   {
      //     rotate: 199,
      //     transformOrigin: "100% 100%",
      //     duration: .2,
      //     ease: 'none',
      //   })

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
    master.add(intro())
    setTimeout(() => {
      master.add(stopTrigger())
    }, 1000)
  }, [])


  return (
    <div data-scroll className="hero-phone-block" >
      <div className="hero-description">
        <h1 className="hero-greeting">Hello.</h1>
        <p className="hero-name">Jason Clinton</p>
        <p className="">Multi-Discipline Designer</p>
        <p>based in London.</p>
      </div>
      <div className="hero-phone-template" ref={phoneRef}>
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

          {/* <div id="figure">

            <div id="a7">
              <span id="a71">paoock prod.</span>
              <span id="a73">
                <b class="a731">19</b>
                <b class="a732">29</b>
              </span>
              <span id="a74">
                <b class="a741">30/</b>
                <b class="a742">06/</b>
                <b class="a743">2012</b>
              </span>
              <span id="a76">CSS animation</span>
            </div>

            <div id="f1"></div>
            <div id="f2"></div>

            <div id="f3">
              <div id="f31">   <span class="f311"><b></b></span>   <span class="f312"><b></b></span>   </div>
              <div id="f32">   <span class="f321"></span>   <span class="f322"></span>   </div>
              <div id="f33"></div>
              <div id="f34"></div>
            </div>

            <div id="f4">
              <div id="f41"></div>
              <div id="f42"></div>
              <div id="f43" class="f431"></div>
              <div id="f43" class="f432"></div>
              <div id="f43" class="f433"></div>
              <div id="f43" class="f434"></div>
            </div>

            <div id="f5"></div>

            <div id="f6"></div>
            <div id="f7">
              <div id="f71"></div>
              <div id="f72"></div>
            </div>
            <div id="f8">
              <div id="f81"></div>
              <div id="f82"></div>
            </div>
            <div id="f9">
              <span></span>
            </div>

          </div> */}
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
