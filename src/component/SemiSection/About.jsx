
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import SectionHeader from "./SectionHeader";


import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import useOnScreen from "../../hooks/useOnScreen";

import "./styles.scss";

export default function About() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <SectionHeader title="about" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        Since beginning my journey as frontend developer, designer and a hacker. I've dont remote work for agencies, 
        consulted for startups with talented people to create degital products for both business and consumer use. 
        I'm quitely confident, naturally curius, and perpually working on improving my chopson design problem by time.
      </p>

    </section>
  );
}