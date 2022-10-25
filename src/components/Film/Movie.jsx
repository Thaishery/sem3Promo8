import { useEffect, useState } from "react";

const Movie = (film) =>{
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
// useEffect(() => {
//   film.updateDeletedCount(false)
//   return () => {
//     film.updateDeletedCount(true)
//   }
// }, [film.deleted]);

  return(
    <>
    <div style={movieStyle}>
      {film.name} {film.year}
      <button onClick={handleColorChange}>Changer la couleur de fond</button>
      <button onClick={()=>{film.deleteFilm(film.id)}}>Supprimer le film</button>
      </div>
    </>
  )
}
export default Movie;