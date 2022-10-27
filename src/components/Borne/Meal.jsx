const Meal = ({meal,addToCart}) => {
  return(
    <>
    <div>
      <h1>{meal.title}</h1>
      <img src={meal.image} style={{maxHeight: "200px", maxWidth: "300px",minHeight:"200px",minWidth:"300px"}}/><br/>
      <span>{meal.price}€</span>
      {addToCart &&
        <button onClick={()=>{addToCart(meal.id)}}>+</button>
      }
      </div>
    </>
  )
}
export default Meal