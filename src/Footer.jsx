import logo from '/img/logo.png'
export default function Footer(){

   return(
      <div className='!pb-[20px]'>
         <div className='ligne border-b-[1px] !mb-[10px] border-b-[#dadada] flex !pb-[40px] justify-between w-[80%] !mx-auto items-center'>
            <div className='flex flex-col w-[33%]'>
               <img className='h-[35px] w-[120px]' src={logo} alt="" />
               <p className='!pt-[22px] text-[13px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                   when an unknown 
                  printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
               <h1 className='text-[20px] font-medium  !pb-[22px]'>COMPANY</h1>
               <ul className='text-[13px]'>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Privacy policy</li>
               </ul>
            </div>
            <div>
               <h1 className='text-[20px] font-medium !pb-[22px]'>GET IN TOUCH</h1>
               <ul className='text-[13px] flex flex-col gap-1'>
                  <li>+1-000-000-0000</li>
                  <li>greatstackdev@gmail.com</li>
                  <li>Instagram</li>
               </ul>
            </div>
         </div>
            <p className='text-center text-[13px] font-medium'>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
      </div>
   )
}