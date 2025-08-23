import MoreInfos from './moreInfos'
import challengeIcon from '/icons/challenge.png'
import casqueIcon from '/icons/casque.png'
import checkIcon from '/icons/checkIcon.png'

export default function BeforeLast(){

   return(
      <>
      <div className='flex justify-center items-center gap-[100px] !pt-[120px] !pb-[70px]'>
        <MoreInfos icon={challengeIcon} title="Easy Exchange Policy" desc="We offer hassle free exchange policy"/>
        <MoreInfos icon={checkIcon} title="7 Days Return Policy" desc="We provide 7 days free return policy"/>
        <MoreInfos icon={casqueIcon} title="Best customer support" desc="we provide 24/7 customer support"/>
      </div>
      <div className='!pb-[20px] flex flex-col gap-3 justify-center items-center '>
      <h1 className='text-[23px] font-medium'>Subscribe now & get 20% off</h1>
      <p className='text-[#9CA3AF]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <form className='flex !pb-[140px]'>
         <input itemType='email' required className='text-[#9CA3AF] border-[1px] border-[#cfcfcf] !py-[11px] !pr-[200px] !pl-[15px]' placeholder="Enter your email" type="text" />
         <button className='text-[12px] bg-black text-white !px-[30px] !py-[15px]' type="submit">SUBSCRIBE</button>
      </form>
      </div>
      
      </>

   )
}