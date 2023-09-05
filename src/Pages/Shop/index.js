import { useContext, useEffect, useState } from "react";
import FoodItem from "./component/foodItem";
import axios from "axios";
import {  message } from "antd";
import { cartContext } from "../../App";

const Shop = () => {
    const [foods,setFoods] = useState([])
    // const [cartFood,setCartFood]=useState([])
    const cartFood = useContext(cartContext)


    useEffect(()=>{ 
        axios.get('https://82d4d64c-bce0-4f3b-94e9-624d12cee2ed.mock.pstmn.io/products').then(({data})=>{
        setFoods(data.data)
        }).catch((err)=>{
            console.log(err,'err');
        })
    },[])

    // //  get From localStorage
    // useEffect(()=>{
    //     const prevCartArr = JSON.parse(localStorage.getItem('cart'))
    //     if(prevCartArr){
    //         setCartFood(prevCartArr)
    //     } else { 
    //         setCartFood([])
    //     }
    // },[])


    // // Set to localStorage
    // useEffect(()=>{
    //     if(cartFood !== undefined && cartFood.length > 0){
    //         localStorage.setItem('cart',JSON.stringify(cartFood))
    //     }
    // },[cartFood])

  
    const buyFoodHandler = (newFood) => { 
        // اولین غذا
        if(cartFood.cartFood === undefined || cartFood.cartFood.length === 0) { 
            cartFood.setCartFoodHandler([newFood])// [{}]
        } else {
            // دومین یا بیشتر
        const duplicate = cartFood.cartFood?.map((itm)=>{
            return itm.id === newFood.id ? true : false   
        })
        if(duplicate.includes(true)) {
            // اگه غذای تکراری وجود داشت
            message.warning('غذا تکراری است',0.5)
        } else{ 
            cartFood.setCartFoodHandler([...cartFood.cartFood,newFood])
        }
        }}

    return (
        <>
            <h2 className="text-red-500 md:text-blue-600">پیشنهاد ویژه</h2>
            <div className="flex flex-col md:flex-row justify-start items-center">
                {foods.map((item)=><FoodItem 
                key={item.id} title={item.title}
                starCount={item.starCount}
                scoreCount={item.scoreCount}
                price={item.price}
                hasDiscount={item.hasDiscount}
                discountedPrice={item.discountedPrice}
                discountedPercent={item.discountedPercent}
                foodImage={`/images/foods/${item.id}.png`}
                buyFoodHandler={()=>buyFoodHandler(item)}
                />)}

         
            </div>

        </>
       
     );
}
 
export default Shop;