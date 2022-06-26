import React, { useRef, useEffect } from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsDiscord } from "react-icons/bs"
import gsap from "gsap"



const HeroFooter = () => {

    const navRef = useRef(null)

    console.log("ji")
    
    // useEffect(() => {
    //     function stopTrigger() {
    //         const tl = gsap.timeline({
    //             delay: 1,
    //             scrollTrigger: {
    //                 trigger: navRef.current,
    //                 start: "top top",
    //                 end: "+=2000",
    //                 scrub: true,
    //                 pin: true,
    //                 // anticipatePin: 1,
    //                 // markers: true,
    //             },
    //         }, []);

    //         // add animations and labels to the timeline
    //         tl.to(
    //             ".hero-footer",
    //             {
    //                 // selector text, Array, or object
    //                 color: "#000",
    //                 position: "fixed",
    //                 padding: "0",
    //                 duration: 0.25, // seconds
    //             },
    //             "-=0.5"
    //         );

    //         return tl;
    //     }

    //     const master = gsap.timeline()
    //     setTimeout(() => {
    //         master.add(stopTrigger())
    //     }, 1000)

    // }, [])



    return (
        <div className="hero-footer" ref={navRef}>
            <div className="footer-container">
                <h2>ovatimee@gmail.com</h2>
                <div className="nav">
                    <ul>
                        <li>About</li>
                        <li>Work</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="hero-socials">
                    <BsGithub />
                    <BsInstagram />
                    <BsLinkedin />
                    <BsDiscord />
                </div>
            </div>
        </div>
    )
}

export default HeroFooter