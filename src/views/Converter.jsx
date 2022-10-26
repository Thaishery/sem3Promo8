import { useState } from "react";
import DisplayConverter from "../components/Converter/DisplayConverter";
import FormConverter from "../components/Converter/FormConverter";

const Converter = () =>{
  const [btcToEur,setBtcToEur] = useState([])
  const deleteEntry = (index) =>{
    console.log(index)
    let oldState = [...btcToEur]
    oldState.splice(index,1)
    setBtcToEur(oldState)
  }

  return(
    <>
      <FormConverter setNames={setBtcToEur} names={btcToEur}/>
      <DisplayConverter names={btcToEur} deleteEntry={deleteEntry}/>
    </>
  )
}
export default Converter;