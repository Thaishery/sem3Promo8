import { useEffect, useState } from "react";
import Movie from"../components/Film/Movie";

const Films = () =>{
  const [films, setFilms] = useState([])
  const [filmName, setFilmName] = useState("")
  const [filmYear, setFilmYear] = useState("")
  const [deletedFilms, setDeletedFilms] = useState(0)
  const handleSubmit = e => {
    e.preventDefault()
    const film = {
      id: films.length,
      name: filmName,
      year: filmYear
    }
    setFilmName("")
    setFilmYear("")
    setFilms([...films,film])
  }
  const deleteFilm = id =>{
    console.log(id)
    let curFilms = [...films]
    curFilms.splice(id,1)
    curFilms.map((film,index)=>
      film.id = index
    )
    setFilms(curFilms)
  }
  const updateDeletedCount = (isDelete)=>{
    if(isDelete === true){
      let deleted = deletedFilms
      deleted ++
      setDeletedFilms(deleted);
    }
  }

  return(
    <>
      <div>films supprimées : {deletedFilms}</div>
      <form onSubmit={handleSubmit}>
        <label>nom : </label>
        <input 
          type="text"
          value={filmName}
          onChange={e=>setFilmName(e.target.value)}
        />
        <label>année : </label>
        <input 
          type="text"
          value={filmYear}
          onChange={e=>setFilmYear(e.target.value)}
        />
        <button>Ajouter film</button>
      </form>
      {films &&
        films.map((film,index)=>(
          <div key={index}>
            <Movie
              key={index}
              deleted={deletedFilms}
              id={film.id}
              name={film.name}
              year={film.year}
              deleteFilm={deleteFilm}
              updateDeletedCount={updateDeletedCount}
            />
          </div>
        ))
      }
    </>
  )

}
export default Films;