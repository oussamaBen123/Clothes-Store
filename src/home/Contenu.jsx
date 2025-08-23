import heroImg from "/img/hero_img.png"
export default function Contenu(){

   return(
      <div className="overflow-hidden max-w-[100%] max-h-[420px] font-normal border-[1px] text-[#414141] border-gray-500 flex-col lg:flex-row !mx-[90px] lg:!mx-[120px] flex justify-between items-center" >
      <div className=" flex justify-center flex-col items-center gap-2.5 w-full h-auto sm:w-[50%] sm:max-h-[100%]">
         <div className="w-[100%] h-auto md:w-[50%] lg:h-full">
         <div className="font-medium flex items-center gap-3">
            <p className="w-10 h-0.5 bg-gray-600"></p>
            <p className="uppercase">our BestSellers</p>
         </div>
         <h1 className="text-[20px] md:text-[48px] font-prata">Latest Arrivals</h1>
         <div className="font-medium flex items-center gap-3">
            <p className="uppercase">shop now</p>
            <p className="w-10 h-0.5 bg-gray-600"></p>
         </div>
         </div>
      </div>
      <img className="w-[100%] h-[50%] md:h-[auto] md:w-[50%]" src={heroImg} alt="" />
      </div>
   )
}