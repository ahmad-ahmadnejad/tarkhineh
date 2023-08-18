import {  Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from './Pages/Shop'
const App = () => {
  return ( 
    <>
    {/* 
    slider */}
    <Header/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/blogs" element={<h1>Blogs</h1>} />
          <Route path="/shop" element={<Shop />} />

      </Routes>
    <Footer/>
    
    </>
   );
}
 
export default App;