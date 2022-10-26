import { useEffect, useState } from "react";

const Movie = ({id,name,year,deleteFilm,updateDeletedCount}) =>{
  const [movieStyle, setMovieStyle]= useState({})
  const handleColorChange = ()=>{
    let style = {
      backgroundColor: getColorCode()
    }
    setMovieStyle(style)
  }
  const getColorCode= ()=> {
    var makeColorCode = '0123456789ABCDEF';
    var code = '#';
    for (var count = 0; count < 6; count++) {
       code =code+ makeColorCode[Math.floor(Math.random() * 16)];
    }
    return code;
  }
useEffect(() => {
  console.log("mount")
  return () => {
    console.log("unmount")
    updateDeletedCount()
  }
}, []);

  return(
    <>
    <div style={movieStyle}>
      {name} {year}
      <button onClick={handleColorChange}>Changer la couleur de fond</button>
      <button onClick={()=>{deleteFilm(id)}}>Supprimer le film</button>
      </div>
    </>
  )
}
export default Movie;