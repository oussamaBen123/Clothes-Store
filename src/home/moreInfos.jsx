
export default function MoreInfos({icon,title,desc}){

   return(
      <>
         <div className="flex flex-col justify-center items-center ">
            <img className="h-[45px] w-[45px]" src={icon} alt="" />
            <p className="font-medium">{title}</p>
            <p className="text-[#9CA3AF]">{desc}</p>
         </div>
      </>

   )
}