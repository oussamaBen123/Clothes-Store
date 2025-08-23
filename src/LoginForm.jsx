import {NavLink} from 'react-router-dom'
export default function Login({toSignUp}){

   return(
      <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center">
         <div className="flex justify-center items-center flex-col w-[30%]">
            <div className="flex justify-center items-center gap-2.5">
               <h1 className="font-prata text-[35px] font-light">Login</h1>
               <p className="w-8 h-0.5 bg-gray-600 !mt-[8px] "></p>
            </div>
            <form onSubmit={(e)=>{e.preventDefault()}} className="flex flex-col justify-center items-center w-full gap-2 !pt-9 !pb-8">
               <input placeholder="Email" className="border-[1px] border-black w-full !py-[7px] !pl-[10px] !mb-2" type="text" />
               <input placeholder="Password" className="border-[1px] border-black w-full !py-[7px] !pl-[10px] " type="password" />
               <div className="w-full flex justify-between text-[13px] font-medium !mb-6">
                  <p><a href="">Forgot your password?</a></p>
                  <NavLink to="/signup">
                  <p>Create account</p>
                  </NavLink>
               </div>
               <button className=" cursor-pointer bg-black !px-8 text-white font-300 !py-2">Sign In</button>
            </form>
         </div>
      </div>
   )
}