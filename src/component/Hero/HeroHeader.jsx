import React from "react";
import Avartar from "../../assets/profile.png"
import {HiMenuAlt1} from "react-icons/hi"


const HeroHeader = () => {
  return (
      <div className="hero-header">
        <img className="logo" src={Avartar} alt="logo"/>
        <div className="hamburger"> <HiMenuAlt1 /> </div>
      </div>
  )
}

export default HeroHeader
