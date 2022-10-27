const View = ({curImage, sliderPosition, changeImage, imagesLength}) => {

  const decreasseSliderPosition = () =>{
    if(sliderPosition > 0){
      changeImage(sliderPosition-1)
    }
    else{
      changeImage(imagesLength-1)
    }
  }
  const increaseSliderPosition = () =>{
    if(sliderPosition < imagesLength-1){
      changeImage(sliderPosition+1)
    }else{
      changeImage(0)
    }
  }
  
  return(
    <>
      <button onClick={()=>{decreasseSliderPosition()}} > {"<"} </button>
        <img alt=" " src={curImage} style={{maxHeight: "400px", maxWidth: "500px",minHeight:"400px",minWidth:"500px"}}></img>
      <button onClick={()=>{increaseSliderPosition()}}> {">"}</button>
    </>
  )
}
export default View;