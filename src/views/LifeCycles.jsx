import { useState } from "react";
import Animal from '../components/LifeCycles/Animal'

const LifeCycles = () =>{
  const [animals, setAnimals] =useState([
    {name:'Chat', quantity: 5},
    {name:'Chiens', quantity: 3},
    {name:'Oiseau', quantity: 2},
    {name:'Crocodile', quantity: 10},
  ])
  // const animalsDelete =(index) =>{
  //   const 
  // }
  return (
    <>
    <div>LifeCycles</div>
    {animals.map((animal,index)=>(
      <Animal 
        key={index} 
        name={animal.name} 
        quantity={animal.quantity} 
      />
    ))}
    </>
  )
}
export default LifeCycles;