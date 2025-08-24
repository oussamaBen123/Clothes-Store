import logo from "/img/logo.png"
import searchIcon from "/img/search_icon.png"
import userIcon from "/img/profile_icon.png"
import cartIcon from "/img/cart_icon.png"
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { PiLessThanThin } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useCart } from "./states/zuStand"; // <-- import du store
export default function NavBar({onUserClick}){
const [visibile , setVisible] = useState(false);
  const cartVal = useCart((state)=> state.cart)

   return(
      <div className="nav flex justify-between items-center h-[80px] !px-[90px] sm:!px-[120px] text-[#414141]">
         <img className="h-[25px] w-[110px]" src={logo} alt="" />
         <ul className="text-[14px] flex justify-between items-center gap-6 font-medium">
            <li className="hidden lg:inline uppercase">
            <NavLink to="/" className={({isActive})=> isActive ? "text-red-500":"text-[#414141]"}>
               home
            </NavLink>
            </li>

            <li className="hidden lg:inline uppercase">
            <NavLink to="/collection" className={({isActive})=> isActive ? "text-red-500":"text-[#414141]"}>
            collection
            </NavLink>
            </li>

            <li className="hidden lg:inline uppercase">
            <NavLink to="/about" className={({isActive})=> isActive ? "text-red-500":"text-[#414141]"}>
            about
            </NavLink>
            </li>

            <li className="hidden lg:inline uppercase">
            <NavLink to="/contact" className={({isActive})=> isActive ? "text-red-500":"text-[#414141]"}>
            contact
            </NavLink>
            </li>               

            <li className="hidden lg:inline text-[12px] text-[#374151] border-[1px] border-[#e4e4e4] !px-[14px] rounded-[20px] !py-[6px] ">
            <NavLink to="adminPannel" className={({isActive})=> isActive ? "text-red-500":"text-[#414141]"}>
            Admin panel
            </NavLink>
            </li>            
         </ul>
         <div className="flex justify-between items-center gap-5">
  <NavLink to="/collection">
    <img className="cursor-pointer h-[20px]" src={searchIcon} alt="Search" />
  </NavLink>

  <NavLink to="/login">
    <img className="cursor-pointer h-[20px]" src={userIcon} alt="User" />
  </NavLink>

  <div className="relative inline-block">
    <NavLink to="/cart">
      <img className="cursor-pointer h-[20px]" src={cartIcon} alt="Cart" />
    </NavLink>
    <span className="absolute top-2 -right-2 bg-black text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
      {cartVal}
    </span>
  </div>
</div>

         <RiMenu3Fill onClick={()=>{setVisible(true)}} className="inline lg:hidden" />
            <div
  className={`absolute top-0 bottom-0 right-0 bg-white transition-all duration-400 overflow-hidden ${
    visibile ? "w-full" : "w-0"
  }`}
>
  <div className="flex items-center gap-3 px-3">
    <PiLessThanThin
      className="text-gray-400 cursor-pointer"
      onClick={() => setVisible(false)}
    />
    <p className="!py-3">Back</p>
  </div>

  <NavLink
    to="/"
    className="block uppercase text-[14px] border-[1px] border-gray-700 !px-3 !py-3 font-medium text-gray-500"
    onClick={() => setVisible(false)}
  >
    home
  </NavLink>

  <NavLink
    to="/collection"
    className="block uppercase text-[14px] border-[1px] border-gray-700 !px-3 !py-3 font-medium text-gray-500"
    onClick={() => setVisible(false)}
  >
    collection
  </NavLink>

  <NavLink
    to="/about"
    className="block uppercase text-[14px] border-[1px] border-gray-700 !px-3 !py-3 font-medium text-gray-500"
    onClick={() => setVisible(false)}
  >
    about
  </NavLink>

  <NavLink
    to="/contact"
    className="block uppercase text-[14px] border-[1px] border-gray-700 !px-3 !py-3 font-medium text-gray-500"
    onClick={() => setVisible(false)}
  >
    contact
  </NavLink>
</div>
      </div>

   )
}