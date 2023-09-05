import {  Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from './Pages/Shop'
import { createContext, useEffect, useState } from "react";
import Blog from "./Pages/blog";
import Cart from "./Pages/cart";
//Create Context
export const cartContext = createContext()

const App = () => {

  const [cartFood,setCartFood]=useState([])


 //  get From localStorage
 useEffect(()=>{
  const prevCartArr = JSON.parse(localStorage.getItem('cart'))
  if(prevCartArr){
      setCartFood(prevCartArr)
  } else { 
      setCartFood([])
  }
},[])
 // Set to localStorage
 useEffect(()=>{
  if(cartFood !== undefined ){
      localStorage.setItem('cart',JSON.stringify(cartFood))
  }
},[cartFood])

const setCartFoodHandler = (item) => { 
  setCartFood(item)
}

useEffect(()=>{
  console.log(cartFood,'cartFood in App.js');
})

  return ( 
    <cartContext.Provider value={{cartFood,setCartFoodHandler}}>

    {/* 
    slider */}
    <Header/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/shop" element={<Shop  />} />
          <Route path="/cart" element={<Cart  />} />


      </Routes>
    <Footer/>
    </cartContext.Provider>
   
   );
}
 
export default App;