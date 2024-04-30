import React, { useEffect, useState } from 'react'
import {api_key} from '../data'
import { FiMapPin } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { BsWind } from "react-icons/bs";
import { MdOutlineVisibility, MdThumbUp } from "react-icons/md";
import clear from '../assets/sunny.png'
import fewcloud from '../assets/fewcloud.png'
import cloudy from '../assets/cloudy.png'
import rain from '../assets/rain.png'
import mist from '../assets/mist.png'
import snow from '../assets/snow.png'
import scatter from '../assets/scatter.png'
import thunder from '../assets/thunder.png'
import search from '../assets/search.png'

const fewcloudbg = `https://plus.unsplash.com/premium_photo-1667143327560-ac86c2b8afa6?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
const mistbggg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6RdFnWLMtxoRLM9OiMaxz5bw05ongU5Je3-gznsBTg&s`
const rainbg =`https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
const snowbg =`https://plus.unsplash.com/premium_photo-1675715924010-11ffef953747?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
const cloudybgg= `https://images.unsplash.com/photo-1641933002369-1122e78d0b47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
const clearbg = `https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
const thunderbg  = `https://images.unsplash.com/photo-1465799522714-8eb0e6fccf73?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
function Home() {

    const [data , setdata] = useState(null);
    const [input ,setinput] =useState('bhubaneswar')
    const [wicon ,setWicon] = useState()
    const [bgwicon ,setBgWicon] = useState( )
   
    
    const featchdata = async ()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=Metric&appid=${api_key}`
        await fetch(url).then(res=>res.json()).then(data=>setdata(data));
    }  
useEffect(()=>{
    if(input !== undefined  ){
        featchdata()
    }  

if(data !== null){
    if(data.weather[0].icon === '01d' ||data.weather[0].icon === '01n' ){
        setWicon(clear);
        setBgWicon(clearbg)
        }
    if(data.weather[0].icon === '02d' ||data.weather[0].icon === '02n' ){
        setWicon(fewcloud);
        setBgWicon(fewcloudbg)
        }
    
    if(data.weather[0].icon === '03d' ||data.weather[0].icon === '03n' ){
        setWicon(scatter);
        setBgWicon(clearbg)
        }
    
    if(data.weather[0].icon === '04d' ||data.weather[0].icon === '04n' ){
        setWicon(cloudy);
        setBgWicon(cloudybgg)
        }
    
    if(data.weather[0].icon === '09d' ||data.weather[0].icon === '09n' ){
        setWicon(rain);
        setBgWicon(rainbg)
        }
    
    if(data.weather[0].icon === '10d' ||data.weather[0].icon === '10n' ){
        setWicon(rain);
        setBgWicon(rainbg)
        }
    
    if(data.weather[0].icon === '11d' ||data.weather[0].icon === '11n' ){
        setWicon(thunder);
        setBgWicon(thunderbg)
        }
    
    if(data.weather[0].icon === '13d' ||data.weather[0].icon === '13n' ){
        setWicon(snow);
        setBgWicon(snowbg)
        }
    
    if(data.weather[0].icon === '50d' ||data.weather[0].icon === '50n' ){
        setWicon(mist);
        setBgWicon(mistbggg)
        }
    } 
},[  input,featchdata  ])
 
return (
    <div className={`w-full h-screen bg-[#295a99cf] flex flex-col overflow-hidden text-white justify-between py-5   `} style={{ backgroundColor: "#295a99cf", backgroundImage: `url(${bgwicon})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

        <div className='px-5 mb-7 lg:mb-0  lg:px-9 items-center flex justify-between ' > 
        <div> <h1 className='text-[25px] lg:text-[4vh]  text-white '>Wcast</h1></div>
         
        <div className='flex items-center   border-[#ffffff84]  border-[0.1px] backdrop-blur-[9px] rounded-3xl px-3'> <input   onKeyDown={(e) => { 
                        if (e.key === "Enter") { 
                           setinput(e.target.value) 
                        } 
                    }}  onChange={(e)=>setinput()}   className= ' text-[#ffffff] text-[18px] lg:w-[400px] w-[180px] h-[40px] px-2  border-none outline-none bg-transparent ' type="text" placeholder='Search place name ' />
                    
                 <img onClick={(e)=>{setinput(e.target.previousSibling.value)}}  className='w-[22px] lg:w-[28px]' src={search} alt="" />
                     </div>
        </div>


        <div className='flex w-full flex-wrap-reverse px-[15%] gap-5 justify-center  lg:justify-between'>
           
        <div className='temp lg:w-[330px] w-full border-[#ffffff50]  border-[0.1px] backdrop-blur-[9px] px-[10px] lg:px-[20px] lg:pr-[35px] rounded-2xl py-4   h-[250px]  lg:h-[300px]'> 
         
           <p>Current Weather </p> 
           
        <div className='flex items-center  gap-5 justify-evenly pt-5'>
             <img className='w-[100px] lg:w-[140px] ' src={wicon} alt="" /> 
        <div className=' relative'> 
        <h1 className='text-[60px] font-semibold'>{data?Math.floor(data.main.temp):'0'} </h1>
         <p className=' absolute text-[60px] top-[-50px] right-[-30px]'> &deg;c</p>
          </div> 
           </div> 
          <div className='flex'>
          <p className='mt-4'>Feels like {data? Math.floor(data.main.feels_like):'0'}</p>
          
          </div>
        <p className=' text-[25px] lg:mt-1 text-center'>{data?data.weather[0].description:'Loading'}</p>
        </div>


        <div className='city backdrop-blur-[9px] py-2 lg:py-0 rounded-3xl w-full lg:w-[40%] flex items-center justify-center flex-col   border-[#ffffff84]  border-[0.1px]'>
            <p className=' text-start'>Currently showing...</p>
            <div className='flex items-center gap-5 justify-center'>
            <FiMapPin className=' text-[25px]' />
                <p className='text-[30px] lg:text-[40px] font-semibold text-white'> {data ? data.name :'...'}</p>        

            </div>
          </div>
        </div>

        <div className='flex lg:gap-[unset] gap-4  w-full justify-evenly flex-wrap '>
            <div className='flex  flex-col gap-4 items-center justify-center  h-[150px] lg:h-[240px] w-[45%] lg:w-[300px] border-[#ffffff4b] rounded-2xl border-[0.1px] backdrop-blur-[20px]'> <p>Wind Speed</p> <div className='flex items-center gap-4'><BsWind className=' text-[30px]' /> <p className=' text-[25px] font-medium'>{data?data.wind.speed:'0'}</p>km/h </div></div>


             <div className='flex flex-col gap-1 lg:gap-4 px-6  items-center justify-center h-[150px] lg:h-[240px] w-[45%] lg:w-[300px] border-[#ffffff4b] rounded-2xl border-[0.1px] backdrop-blur-[20px]'> <p>Visibility</p> <div className="flex items-center gap-4"><MdOutlineVisibility  className=' text-[30px]' /> <p className=' text-[25px] font-medium'>{data?data.visibility:'0'}</p></div> 
           <div className='flex flex-col lg:flex-row  gap-1'>  <p className='text-[18px] '>Min Temp{data? Math.floor(data.main.temp_min):'0'}</p>
          <p className=' text-[18px]'>Max Temp {data? Math.floor(data.main.temp_max):'0'}</p>
             </div>
               </div>
             <div className='flex flex-col gap-4  items-center justify-center h-[150px] lg:h-[240px] w-[45%] lg:w-[300px] border-[#ffffff4b] rounded-2xl border-[0.1px] backdrop-blur-[20px]'> <p>Humidity</p> <div className="flex items-center gap-4"><WiHumidity className=' text-[39px]' /> <p className=' text-[25px] font-medium'>{data?data.main.humidity:'0'} %</p> </div> </div>
        </div> 
 
    </div>
  )
}

export default Home