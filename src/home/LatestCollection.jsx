import CardPrd from "../CardProduct";
import datas from "../ProductData.json"
import BestSeller from "./BestSeller";
import { createContext,useState } from "react";
import {NavLink} from 'react-router-dom'

export const InfosContext = createContext();
export default function LatestCollection(){
   const [infos ,setInfos]  = useState([{word1:"latest",word2:"collection"},{word1:"best",word2:"sellers"}]);
   const word1 = infos[0].word1;
   const word2 = infos[0].word2 
   return(
      <div className=" products flex flex-col gap-7 !pt-16 lg:!pt-16 !">
         <div className="titles flex justify-center flex-col items-center gap-2">
            <div className="flex items-center gap-2">
               <h1 className="text-[30px] uppercase text-[#6B7280] tracking-[1px]">{word1}<span className="text-[#374151] font-medium">{word2}</span></h1>
               <p className="h-[2px] w-[48px] bg-[#374151]"></p>
            </div>
            <p className="text-[16px] text-[#4B5563] font-[500] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.

</p>
         </div>
         <div className="Products  grid grid-cols-2 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-5 gap-x-0 gap-y-4 w-auto !mx-[120px]">
            {
               datas.slice(0,10).map((data)=>{
                  return(
                  <>
                  <NavLink key={data.id} to={`/productDetails/${data.id}`}>
                     <CardPrd image={data.image} description={data.productTitle} price={data.price} width="190px" height="250px"/>
                  </NavLink>
                  </>

                  )
                  
               })
            }
            <InfosContext.Provider value={infos}>
               <BestSeller/>
            </InfosContext.Provider>
         </div>
      </div>
   )
}