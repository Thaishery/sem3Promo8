import { useState } from "react";
import Thumbnails from "../Slider/Thumbnails";

const View = ({curImage, sliderPosition, setSliderPosition,changeImage, imagesLength}) => {

  const decreasseSliderPosition = () =>{
    if(sliderPosition > 0){
      setSliderPosition(sliderPosition --)
      changeImage(sliderPosition--)
    }
    else{
      setSliderPosition(imagesLength)
      changeImage(imagesLength)
    }
  }
  const increaseSliderPosition = () =>{
    if(sliderPosition < imagesLength){
      setSliderPosition(sliderPosition++)
      changeImage(sliderPosition++)
    }else{
      setSliderPosition(0)
      changeImage(0)
    }
  }
  
  return(
    <>
      <button onClick={()=>{decreasseSliderPosition()}} > {"<"} </button>
        <img src={curImage}></img>
      <button onClick={()=>{increaseSliderPosition()}}> {">"}</button>
    </>
  )
}
export default View;