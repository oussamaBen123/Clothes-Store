import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export default function Basket(){

   return(
   <div className="W-full min-h-[500px] flex justify-between gap-6 !mx-[120px]">
      <div className="w-[50%]">
         <div className="title flex items-center gap-2">
            <h1 className="text-[25px] uppercase text-[#6B7280] tracking-[1px]">your<span className="text-[#374151] font-medium">cart</span></h1>
            <p className="h-[2px] w-[48px] bg-[#374151]"></p>
         </div> 
      </div>
      <div className="totals w-[50%] flex justify-center flex-col items-center">
            <div className="flex items-center gap-2 w-[80%] !pb-[15px]">
               <h1 className="text-[25px] uppercase text-[#6B7280] tracking-[1px]">cart<span className="text-[#374151] font-medium"> totals</span></h1>
               <p className="h-[2px] w-[48px] bg-[#24477f]"></p>
            </div>
            <form className="w-[80%] flex flex-col gap-3 text-[14px]">
               <div className="flex justify-between border-b-gray-300 border-b-[1px] !pb-[5px]">
                  <p>Subtotal</p>
                  <p>$0.00</p>
               </div>
               <div className="flex justify-between border-b-gray-300 border-b-[1px] !pb-[5px]">
                  <p>Shipping Fee</p>
                  <p>$0.00</p>
               </div>
               <div className="flex justify-between !mb-[15px] font-bold">
                  <p>Total</p>
                  <p>$0.00</p>
               </div>
               <div className="flex justify-end">
               <NavLink to="/place-order">
               <button className=" bg-black text-white text-[14px] !px-[30px] !py-[9px]">PROCEED TO CHECKOUT</button>
               </NavLink>

               </div>
            </form>
      </div>     
   </div>
   )
}