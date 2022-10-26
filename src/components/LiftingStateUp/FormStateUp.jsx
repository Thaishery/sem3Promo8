import { useState } from "react"

const FormStateUp = ({setNames, names}) =>{
  
  const [inputName, setInputName] = useState('')
  const handleSubmit = e =>{
    e.preventDefault()
    // setNames(oldState => [...oldState, inputName])
    setNames([...names, inputName])
    setInputName('')
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={e=>setInputName(e.target.value)} 
          value={inputName} 
          type="text"
        />
        <button type="submit">Ajouter</button>
      </form>
    </>
  )
}
export default FormStateUp;