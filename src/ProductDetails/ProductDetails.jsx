import { useParams } from "react-router-dom";
import data from "../home/ProductData.json";
import starIcon from "/icons/star_icon.png";
import starDullIcon from "/icons/star_dull_icon.png";
import SizeBtn from "./SizeBtn";
import smallImg from "/img/p_img1.png";
import mainImg from "/img/p_img1.png";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProductPage() {
  let ProductsDatas = data;
  const { ProductId } = useParams();
  let product = ProductsDatas.find((p) => {
    return p.id == ProductId;
   });
   const [selectedSize, setSelectedSize] = useState(null);
    const sizes = ["S", "M", "L", "XL", "XXL"];
   const [addToCart , setAddToCart] = useState(false);

   function addToCartBn(){
      if(selectedSize === null){
         toast.error("Please select a size")
      }else{
         alert('product add to cart !')
      }
   }
  return (
    <div className=" flex !mx-[120px] gap-16 h-auto border-t-[2px] !pt-[50px] border-gray-200 !pb-[40px] !mb-[100px]">
      <div className="w-[50%] flex gap-4 h-auto ">
        <img className="w-[90px] h-[90px]" src={product.image} alt="" />
        <img className="w-[410px] h-[500px]" src={product.image} alt="" />
      </div>
      
      <div className="product-infos w-[50%]">
         <div className="flex flex-col gap-4 w-[90%] border-b-[1px] border-gray-200 h-full">
        <h1 className="font-medium text-2xl">
          {product.productTitle}
        </h1>
        <div className="flex gap-3 items-center">
          <div className="star-rate flex gap-1">
            <img className="h-3" src={starIcon} alt="" />
            <img className="h-3" src={starIcon} alt="" />
            <img className="h-3" src={starIcon} alt="" />
            <img className="h-3" src={starIcon} alt="" />
            <img className="h-3" src={starDullIcon} alt="" />
          </div>
          <p>(122)</p>
        </div>
        <h1 className="font-medium text-3xl">${product.price}</h1>
        <p className="text-[#6B7280]">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </p>
        <label>Select Size</label>
        <div className="size-btn flex gap-2 !pb-[12px]">
           {
            sizes.map((size ,index)=>{
               return <SizeBtn 
               key={index}
               size={size}
               active={selectedSize === size}
               onClick={()=>setSelectedSize(size)}
               />
            })
           }
        </div>
        <div>
          <button onClick={addToCartBn} className="hover:bg-gray-800 cursor-pointer text-[13px] add-btn bg-black text-white uppercase !py-[12px] !px-[35px]">
            add to cart
          </button>
        </div>
       

         </div>
      <div className="">
          <p className="text-[#6B7280] text-[14px]">
            100% Original product.<br />
            Cash on delivery is available on this product.<br />
            Easy return and exchange policy within 7 days
          </p>
         
      </div>
      </div>
      
    </div>
  );
}
