import {  Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return ( 
    <>
    {/* 
    slider */}
    <Header/>
      <Routes>
          <Route index element={<h1>Home</h1>} />
          <Route path="/blogs" element={<h1>Blogs</h1>} />
      </Routes>
    <Footer/>
    </>
   );
}
 
export default App;