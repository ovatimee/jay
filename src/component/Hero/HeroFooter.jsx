import React, { useRef, useEffect } from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsDiscord } from "react-icons/bs"
import gsap from "gsap"



const HeroFooter = () => {



    return (
        <div className="hero-footer" >
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