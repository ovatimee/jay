import React, { useState, useRef, useEffect } from "react";
import { featureSlides } from "./data";
import FeatureSlide from "./FeatureSlide";
import { gsap } from "gsap";
import cn from 'classnames';
import "./styles.scss"

function RenderImages({ activeFeatureIndex }) {
  return featureSlides.map(({ imageUrl }, index) => (
    <div
    className={cn({ "phone-container": activeFeatureIndex === index })}
    >
 <img
     className={cn({ "phone-container": activeFeatureIndex === index })}
      key={imageUrl}
      src={imageUrl}
    />
    </div>
  ));
}
export default function FeatureSlides() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const featureSlidesRightRef = useRef(null);
 ;




  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSliderRef.current,
          start: "top top",
          end: () => `+=${featureSlidesRightRef.current.offsetHeight}`,
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
        <div className="img-containder">
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
        </div>
      </div>
    </div>
  );
}
