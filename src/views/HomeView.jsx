import { useEffect, useState } from "react";

const HomeView = () => {
  const [taches, setTaches] = useState([{
    id:0,
    nomTache: "",
    tache: "",
  }])
  const [curTacheNom,setCurTacheNom] = useState("")
  const [curTache, setCurTache] = useState("")
  const handleNomChange = (val)=>{setCurTacheNom(val.target.value)}
  const handleTacheChange=(val)=>{setCurTache(val.target.value)}
  const addTaches = (tache)=>{
    console.log(tache)
    tache.preventDefault()
    let temp = taches
    let newTache = {
      id: temp.length,
      nomTache: curTacheNom,
      tache: curTache
    }
    temp.push(newTache)
    setTaches(temp)
  }
  const deleteTaches = (tache)=>{
    let temp = taches.splice(tache.id, 1)
    setTaches(temp)
  }
  return (
    <>
    <div>hello world</div>
    <form action="addTache" onSubmit={addTaches}>
      <label>nom : </label>
      <input
        type="text"
        value={curTacheNom}
        onChange={(val)=>handleNomChange(val)}
      />
      <label>tache : </label>
      <input 
        type="text"
        value={curTache}
        onChange={(val)=>handleTacheChange(val)} 
      />
      <button>Ajouter tache</button>
    </form>
    {taches && taches.map((tache, key)=>{
      if(tache.nomTache !== "" && tache.tache !== "")
      return (
        <div key={key}>
          {tache.nomTache} : {tache.tache}
        </div>
      )
    })}
    </>
  )
}
 
export default HomeView;