import { useContext, useState } from "react";
import { cartContext } from "../../App";
import CardItem from "./components/cartItems";
import { Button } from "antd";

const Cart = () => {
 const [step,setStep] = useState(0)

    const myCart = useContext(cartContext)
    const {cartFood} = myCart;
console.log(myCart,'myCart');

// برای حذف غذا از سبد خرید
const deleteFoodHandler = (id) => { 
    const prevCart = cartFood;
    const foodIndex = prevCart.findIndex((item)=>item.id ===id)
    prevCart.splice(foodIndex,1)
    console.log(prevCart,'prevCart');
    myCart.setCartFoodHandler([...prevCart]) 
}

// [{id:1},{id:2}]

    return ( <>
    <div className="bg-red-200 mr-8" style={{width:'40%'}}>
{cartFood.map((item)=><CardItem  data={item} deleteFoodHandler={()=>deleteFoodHandler(item.id)} />)}
    </div>
   
    </> );
}
 
export default Cart;