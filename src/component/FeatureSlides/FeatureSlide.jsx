import React, {useEffect, useRef} from 'react'
import useOnScreen from "../../hooks/useOnScreen"

function FeatureSlide({
  title,
  description,
  index,
  updateActiveImage
}) {

  const ref = useRef(null)
  const onScreen = useOnScreen(ref)

  useEffect(() =>{
    if(onScreen){
      updateActiveImage(index)
    }
  }, [onScreen, index])

  return (
    <div className="feature-slide" ref={ref}>
      <h3 className="feature-slide-title">{title}</h3>
      <p className="feature-slide-description">{description}</p>
    </div>
  )
}

export default FeatureSlide