import { useContext } from "react"
import { BorneContext } from "../../context/BorneContext"

const Meal = ({meal}) => {
  const {setCart, cart,setTotalCart, totalCart} = useContext(BorneContext)
  const handleClick = ()=>{
    const newArray = [...cart]
    newArray.push(meal)
    setCart(newArray)
    setTotalCart(totalCart+meal.price)
  }
  return(
    <>
    <div>
      <img src={meal.image} style={{display:"block",margin:"auto",maxHeight: "200px", maxWidth: "300px",minHeight:"200px",minWidth:"300px",marginBottom:"20px"}}/>
      <span style={{textAlign:"center"}}>{meal.title}</span>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <span>Prix : {meal.price}€</span>
        <button onClick={()=>{handleClick()}}>Ajouter au pannier</button>
      </div>
    </div>
    </>
  )
}
export default Meal