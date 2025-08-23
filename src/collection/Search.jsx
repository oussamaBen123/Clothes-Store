import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Search({onSearch}){
const [searchVisible , setSearchVisible] = useState(false);

return(
      
      <div className={`visible items-center gap-2.5 translate-y-[-30px] h-[100px] border-b-[2px] border-gray-100 flex justify-center bg-[#F9FAFB]
          ${(searchVisible) ? "hidden" : "visible"}`}>
         <div className="relative rounded-[30px] flex justify-between w-[50%]">
            <input onChange={(e)=>{onSearch(e.target.value)}} className="text-[14px] outline-0 rounded-[30px] !py-[6px] border-[1px] w-full !pl-[15px]" placeholder="Search"/>
            <CiSearch className="absolute right-2.5 top-[50%] translate-y-[-50%]"/>
         </div>
         <IoMdClose onClick={()=>{setSearchVisible(true)}} className="cursor-pointer text-[20px]"/>
      </div>
      
   )
}