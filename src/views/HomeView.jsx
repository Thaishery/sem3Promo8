import { useState } from "react";

const HomeView = () => {

  const [task, setTask] = useState([])
  const [inputTask, setInputTask]= useState("")
  const handleSubmit = e =>{
    e.preventDefault()
    setTask([...task,inputTask])
    setInputTask("")
  }
  const handleDelete = (e,key) =>{
    let temp = task
    temp.splice(key,1)
    setTask([...temp])
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>nom : </label>
      <input
        type="text"
        value={inputTask}
        onChange={e=>setInputTask(e.target.value)}
      />
      <button type="submit">Ajouter tache</button>
    </form>
    {task.map((tache, key)=>(
        <div key={key}>
          {tache}
          <button onClick={(e)=>{handleDelete(e,key)}}>supprimer</button>
        </div>
      ))
    }
    </>
  )
}
 
export default HomeView;