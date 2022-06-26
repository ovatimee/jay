import React, { useState, useEffect, useRef } from 'react'
import { featureSlides } from "../../data"
import FeatureSlide from "./FeatureSlide"
import gsap from 'gsap'
import cn from "classnames"

function RenderImages({ activeFeatureIndex }) {
  return featureSlides.map(({ imageUrl }, index) => (
    <img
      className={cn({ "as-primary": activeFeatureIndex === index })}
      key={imageUrl}
      style={{ backgroundImage: `url(${imageUrl})` }}
      alt=""
    />
  ))
}

function FeatureSlides() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0)
  const featureSlideRef = useRef(null)
  const featureSlidesRightRef = useRef(null)

    useEffect(() => {
      const stopTrigger = () =>{
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: featureSlidesRightRef.current,
            start: "top top",
            end: ()=> `+=${featureSlideRef.current.offsetHeight}`, 
            scrub: true, 
            pin: true
          }
        })
        return tl
      }
      const master = gsap.timeline()
      master.add(stopTrigger())
    }, [])


  return (
    <>
       <div className="feature-slides-container" ref={featureSlideRef}>
      <div className="feature-slide-left">
        {featureSlides.map((feature, index) => (
          <FeatureSlide
            updateActiveImage={setFeatureIndex}
            key={feature.imageUrl}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
      <div className="feature-slides-right" ref={featureSlidesRightRef}>
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
    </>
 
  )
}

export default FeatureSlides