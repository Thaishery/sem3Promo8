
import { useState } from "react";
import DisplayStateUp from "../components/LiftingStateUp/DisplayStateUp";
import FormStateUp from "../components/LiftingStateUp/FormStateUp";

const FilftingStateUp = () =>{
  const [names,setNames] = useState([])

  return(
    <>
      <FormStateUp setNames={setNames} names={names}/>
      <DisplayStateUp names={names}/>
    </>
  )
}
export default FilftingStateUp;