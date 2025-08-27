import { NavLink } from "react-router-dom";
import CartItem from "./CartProduct";
import { useStore } from "./states/ProductMang";
export default function Basket() {
const cart = useStore((state) => state.cart);
const Subtotal = cart.reduce((acc,pr) => acc + pr.price * pr.qty,0)
const shippingFee = 10
 let total = Subtotal + shippingFee
 const initiaTotalValue = 0
  return (
    <div className="W-full min-h-[500px] flex flex-col border-gray-200 border-t justify-between gap-2 !mx-[120px]">
      <div className="w-[100%]">
        <div className="!pt-[55px] !pb-[30px] title flex items-center gap-2">
          <h1 className="text-[25px] uppercase text-[#6B7280] tracking-[1px]">
            your<span className="text-[#374151] font-medium">cart</span>
          </h1>
          <p className="h-[2px] w-[48px] bg-[#374151]"></p>
        </div>
         <div className="w-full">
              <CartItem />
         </div>
      </div>
      <div className="totals w-[100%] !py-[40px] !pb-[200px] flex justify-end flex-col items-end">
         <div className="flex flex-col justify-end items-end w-[55%]">
          <div className="flex items-center gap-2 w-[80%] !pb-[15px]">
            <h1 className="text-[25px] uppercase text-[#6B7280] tracking-[1px]">
              cart<span className="text-[#374151] font-medium"> totals</span>
            </h1>
            <p className="h-[2px] w-[48px] bg-[#24477f]"></p>
           
          </div>
        
        <form className="w-[80%] flex flex-col gap-3 text-[14px]">
          <div className="flex justify-between border-b-gray-300 border-b-[1px] !pb-[5px]">
            <p>Subtotal</p>
            <p>${Subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between border-b-gray-300 border-b-[1px] !pb-[5px]">
            <p>Shipping Fee</p>
            <p>${shippingFee.toFixed(2)}</p>
          </div>
          <div className="flex justify-between !mb-[15px] font-bold">
            <p>Total</p>
            <p>${Subtotal !== 0 ? total.toFixed(2) : `${initiaTotalValue.toFixed(2)}`}</p>
          </div>
          <div className="flex justify-end">
            <NavLink to="/place-order">
              <button className=" bg-black text-white text-[14px] !px-[30px] !py-[9px]">
                PROCEED TO CHECKOUT
              </button>
            </NavLink>
          </div>
        </form>

         </div>
      </div>
    </div>
  );
}
