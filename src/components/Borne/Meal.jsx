const Meal = ({meal,addToCart}) => {
  return(
    <>
    <div>
      <h1 style={{textAlign:"center"}}>{meal.title}</h1>
      <img src={meal.image} style={{display:"block",margin:"auto",maxHeight: "200px", maxWidth: "300px",minHeight:"200px",minWidth:"300px",marginBottom:"20px"}}/>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <span>Prix : {meal.price}€</span>
        {addToCart &&
          <button onClick={()=>{addToCart(meal.id)}}>Ajouter au pannier</button>
        }
      </div>
    </div>
    </>
  )
}
export default Meal