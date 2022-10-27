import { useState } from "react";
import Cart from "../components/Borne/Cart";
import Meals from "../components/Borne/Meals";

const BorneView = () => {
  const [cart, setCart] = useState([])
  const [totalCart, setTotalCart] = useState(0)
  const [displayCart, setDisplayCart] = useState(false)
  const meals = [
      {
        id:0,
        title: "Menu 1",
        image: "https://www.umamiburgerparis.com/media/images/minigal/02.jpg",
        price: 10,
      },
      {
        id:1,
        title: "Menu 2",
        image: "https://cdn.vox-cdn.com/thumbor/w-lOZWKUJOdQd6PFQzMI4D9-Gd4=/0x0:984x633/1200x900/filters:focal(414x239:570x395)/cdn.vox-cdn.com/uploads/chorus_image/image/60053391/reve_burger.12.jpg",
        price: 15,
      },
      {
        id:2,
        title: "Menu 3",
        image: "https://www.gardengourmet.ch/sites/default/files/recipes/aeead5804e79ff6fb98b2039619c5230_200828_MEDIAMONKS_GG_Spicytarian.jpg",
        price: 9,
      },
      {
        id:3,
        title: "Menu 4",
        image: "https://img.cuisineaz.com/660x660/2019/04/17/i146583-tacos-poulet-curry.jpeg",
        price: 12,
      },
      {
        id:4,
        title: "Menu 5",
        image: "https://bakeitwithlove.com/wp-content/uploads/2022/02/ground-venison-tacos-sq.jpg",
        price: 7,
      },
      {
        id:5,
        title: "Menu 6",
        image: "https://www.lespommesdeterre.com/wp-content/uploads/2017/10/frites-maison-c-shutterstock_bd.jpg",
        price: 20,
      }
  ]
  const addToCart = (id) =>{
    let curCart = [...cart]
    curCart.push(meals[id])
    setCart(curCart);
    setTotalCart(totalCart+meals[id].price)
  }
  const closeCart = () =>{
    setDisplayCart(false)
  }
  return(
    <>
      {displayCart && 
        <Cart closeCart={closeCart} cart={cart} totalCart={totalCart}/>
      }
      {!displayCart &&
      <>
        <Meals meals={meals} addToCart={addToCart}/>
        <button onClick={()=>{if(cart.length > 0)setDisplayCart(!displayCart);else alert("Pas d'articles dans le pannier")}}>Pannier</button>
      </>
      }
    </>
  )
}
export default BorneView;