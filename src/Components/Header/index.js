import { Badge } from "antd";
import { useContext } from "react";
import { cartContext } from "../../App";
import { Link } from "react-router-dom";

const Header = () => {

  const myCartCount = useContext(cartContext)

console.log(myCartCount,'myCartCount');


    return ( 
    <div className="flex flex-row justify-between items-center p-4 mr-8 ml-8">
         <div className="flex flex-row justify-center items-center gap-2">
         <Link to={'/login'} >

            <div className="bg-[#E5F2E9] p-2 rounded-lg text-[#417F56]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

            </div></Link>
<Link to={'/cart'} >
            <div className="bg-[#E5F2E9] p-2 rounded-lg cursor-pointer text-[#417F56]">
            <Badge count={myCartCount.cartFood.length}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg></Badge>

            </div></Link>
            <div className="hidden md:block bg-[#E5F2E9] p-2 rounded-lg text-[#417F56]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
            </div>

         </div>
         <div className="text-[#717171] flex flex-row-reverse justify-center items-center gap-4">
            <div className="hover:text-[#417F56] cursor-pointer hover:border-b-2 border-[#417F56]">صفحه اصلی</div>
            <div className="hover:text-[#417F56] cursor-pointer hover:border-b-2 border-[#417F56]">شعبه</div>
            <div className="hover:text-[#417F56] cursor-pointer hover:border-b-2 border-[#417F56]">منو</div>
            <div className="hover:text-[#417F56] cursor-pointer hover:border-b-2 border-[#417F56]">اعطای نمایندگی</div>
            <div className="hover:text-[#417F56] cursor-pointer hover:border-b-2 border-[#417F56]">تماس با ما</div>
            <div className="hover:text-[#417F56] cursor-pointer hover:border-b-2 border-[#417F56]">درباره ما</div>
         </div>
        <div>
            <img alt="لوگوی ترخینه" className="w-32"  src="/images/logo.png" />
        </div>
    </div>
     );
}
 
export default Header;