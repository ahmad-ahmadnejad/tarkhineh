import { useEffect, useState } from "react";
import FoodItem from "./component/foodItem";
import axios from "axios";
import { Button, message } from "antd";

const Shop = () => {
    const [counter,setCounter] = useState(1)
    
    const [foods,setFoods] = useState([])
    useEffect(()=>{ 
        axios.get('https://82d4d64c-bce0-4f3b-94e9-624d12cee2ed.mock.pstmn.io/products').then(({data})=>{
        setFoods(data.data)
        }).catch((err)=>{
            console.log(err,'err');
        })
    },[])

    const buyFoodHandler = (item) => { 
        console.log(item,'item');
        const prevCartArr = JSON.parse( localStorage.getItem('cart'))
        console.log(prevCartArr,'prevCartObj');
        
        if(prevCartArr){ 

            const duplicate = prevCartArr.map((itm)=>{
                return itm.id === item.id ? true : false   
            })
            console.log(duplicate,'duplicate');
            if(duplicate.includes(true)){
               
                message.error('غذای انتخابی تکراری است')
            } else { 
            // برای غذای دوم به بعد
            prevCartArr.push(item)
            console.log(prevCartArr,'prevCartArr');
            localStorage.setItem('cart',JSON.stringify(prevCartArr))
            message.success('غذا به سبد خرید اضافه شد')
            }
           
        } else { 
            // برای غذای اولمون
            localStorage.setItem('cart',JSON.stringify([item]))
            message.success('غذا به سبد خرید اضافه شد')
        }
    }

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

            <Button onClick={()=>setCounter(counter+1)} >+</Button>
        </>
       
     );
}
 
export default Shop;