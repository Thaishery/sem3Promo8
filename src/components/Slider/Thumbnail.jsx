import { useState } from "react";
const Thumbnail = ({image}) => {
  return(
    <>
      <img style={{maxWidth:"100px", maxHeight:"100px"}} src={image} />
    </>
  )
}
export default Thumbnail;