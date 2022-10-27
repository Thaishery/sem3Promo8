import Meal from "./Meal"

const Meals = ({meals,addToCart}) => {
  return(
    <>
    <div style={{display:"flex",flexWrap:"wrap"}}>
      {meals.map((meal,i)=>(
        <div key={i} style={{width:"33%"}}>
          <Meal meal={meal} addToCart={addToCart}/>
        </div>
      ))}
    </div>
    </>
  )
}
export default Meals