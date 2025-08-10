import searchBtn from './Assets/search.png'
import weatherIcon from './Assets/clear.png'
import humidityImg from './Assets/humidity.png'
import windImg from './Assets/wind.png'
import { useEffect, useState } from 'react'
export default function WeatherApp(){
const [weatherData,setWeatherData] = useState(null)
const [searchcity , setSearchCity] = useState("lisbon")
const [searchInp , setSearchInp] = useState("")
const styles = {
   background:"linear-gradient(45deg, #2f4680, #500ae4)",
   boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
}
const apiKey = import.meta.env.VITE_WEATHER_KEY

function handleClick(){
   if(searchInp.trim().toLowerCase() !== ""){
      setSearchCity(searchInp)
   }else{
      alert('Please Select a city');
   }
}
useEffect(()=>{
   if(!searchcity) 
      return;
         const getData = async (apiKey,searchcity)=>{
         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=${apiKey}&units=metric`)
         let data = await response.json()
         setWeatherData(data)
      }

   getData(apiKey,searchcity)
},[searchcity])
   if(weatherData){
      return(
         <div className='weather-card font-poppins !py-[52px] !px-[60px] rounded-2xl flex gap-5 flex-col justify-center items-center' style={styles}>
            <div className='search-bar flex gap-4'>
               <input value={searchInp} onChange={(e)=>
                  setSearchInp(e.target.value)
               }  className='bg-[#ebfffc] text-[14px] h-11 rounded-full outline-none !pl-4' type="text" placeholder='Search'/>
               <img onClick={handleClick} className='bg-[#ebfffc] cursor-pointer rounded-full !py-[10px] !px-[14px] ' src={searchBtn} alt="" />
            </div>
            <img className='h-[110px] w-[110px]' src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
            alt={weatherData.weather[0].description}  />
            <div className='flex justify-center items-center flex-col'>
               <h1 className='text-white font-thin  text-[5rem]'>{Math.round(weatherData.main.temp)}°C</h1>
               <p className='text-[1.4rem] !mt-[-22px] text-white font-extralight'>{weatherData.name}</p>
            </div>
            <div className='last-infos w-full  flex justify-between items-center'>
               <div className='humidity flex gap-2 items-center text-white'>
                  <img className='h-7' src={humidityImg} alt="" />
                  <p>{weatherData.main.humidity}%</p>
               </div>
               <div className='wind flex gap-2 items-center text-white'>
                  <img className='h-7' src={windImg} alt="" />
                  <p>{weatherData.wind.speed}Km/h</p>
               </div>
            </div>
         </div>
            
         )

   }
}