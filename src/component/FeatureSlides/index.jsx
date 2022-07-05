import React, { useState, useRef, useEffect } from "react";
import { featureSlides } from "./data";
import FeatureSlide from "./FeatureSlide";
import SectionHeader from "./SectionHeader";
import { gsap } from "gsap";
import cn from 'classnames';

import "./styles.scss"

function RenderImages({ activeFeatureIndex }) {
  return featureSlides.map(({ imageUrl }, index) => (
    <img
      className={cn({ "as-primary": activeFeatureIndex === index })}
      key={imageUrl}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  ));
}
export default function FeatureSlides() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const featureSlidesRightRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)


  useEffect(() => {

    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])


  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlidesRightRef.current,
          start: "top top",
          end: windowWidth < 750? `+=1020` : `+=2070`,
          scrub: true,
          pin: true,
        },
      });

      return tl;
    }
    const master = gsap.timeline();
    master.add(stopTrigger()); //with a gap of 2 seconds
  }, []);


  return (
    <>
    <SectionHeader title="Works" />
    <div ref={featureSliderRef} className="feature-slides-container">
      <div className="feature-slides-left">
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
      <div ref={featureSlidesRightRef} className="feature-slides-right">
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
    </>
  );
}
