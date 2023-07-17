import {  Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

const App = () => {
  return ( 
    <>
    {/* 
    slider */}
    <Header/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/blogs" element={<h1>Blogs</h1>} />
      </Routes>
    <Footer/>
    </>
   );
}
 
export default App;