import Meal from "./Meal"
const Cart = ({closeCart,totalCart, cart}) => {
  return(
    <>
      <button onClick={()=>{closeCart()}}>fermer</button>
      <div style={{display:"flex",flexWrap:"wrap" }}>
        {cart.map((meal,i)=>(
            <div key={i} style={{width:"33%"}}>
              <Meal meal={meal} addToCart={false}/>
            </div>
        ))}
      </div>
      <span>Total : {totalCart}€</span>
      <button>Payer</button>
    </>
  )
}
export default Cart