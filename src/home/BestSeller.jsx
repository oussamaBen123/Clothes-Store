import { useContext } from "react"
import { InfosContext } from "./LatestCollection"
import CardPrd from "../CardProduct";
import BeforeLast from "./BeforeLast";
import datas from "../ProductData.json";
import { NavLink } from "react-router-dom";
export default function BestSeller() {
  const infos = useContext(InfosContext)
  const { word1, word2 } = infos[1];

  return (
    <div className="flex flex-col w-[79vw] justify-center gap-8 !pt-[50px]">
      
      <div className="flex flex-col items-center p-6 max-w-[full]">
         <div className="flex justify-center items-center gap-2">
            <h1 className="text-[30px] uppercase text-[#6B7280] tracking-[1px]">
               {word1}
               <span className="text-[#374151] font-medium">{word2}</span>
            </h1>
            <p className="h-[2px] w-[48px] bg-[#374151] my-2"></p>
         </div>
        <p className="text-[16px] text-[#4B5563] font-[500] text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
      </div>

    <div className="flex gap-4">
  {datas.slice(0, 5).map((data) => {
    return (
      <NavLink key={data.id} to={`productDetails/${data.id}`}>
        <CardPrd
          image={data.image}
          description={data.productTitle}
          price={data.price}
        />
      </NavLink>
    );
  })}
</div>


    </div>
  );
}
