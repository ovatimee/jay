import React, { useCallback, useRef, useEffect } from "react";
import {AiFillGithub } from "react-icons/ai"
import {IoMdOpen} from "react-icons/io"
import useOnScreen from "../../hooks/useOnScreen";
export default function FeatureSlide({
  title,
  description,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);


  useEffect(() => {

    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div ref={ref} className="feature-slide">

      <h3 className="feature-slide-title">{title}</h3>
      <p className="feature-slide-description">{description}</p>
      < div
        className="app__work-hover"
      >
        <a href="" target="_blank" rel="noreferrer">
            <IoMdOpen />
        </a>
        <a href="" target="_blank" rel="noreferrer">
            <AiFillGithub />
        </a>
      </div>
    </div>
  );
}
