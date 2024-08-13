// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {  GoArrowUpRight,  } from "react-icons/go";

const Landingpage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.7" className="w-full h-screen bg-zinc-900">
        <div className="textsturce py-20 ml-24 ">
        {["WE CREATE", "EYE-OPENING", "PRESENTATION"].map((item, index)=>{
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="mask overflow-hidden " >
            <div className="w-fit flex items-center">
              {index ===1 && (<motion.div  initial={{width : 0}} animate={{width : "7.5vw"}} transition={{ease : [0.45, 0, 0.55, 1], duration : 0.5}} className='w-[7.5vw] h-[5vw] top-[0.5vw] relative bg-green-500 rounded-lg '> </motion.div>)}
            <h1 key={index} className="text-[7vw] leading-[6vw] font-bold  font-['Founders Grotesk'] ">{item}</h1>
            </div>
        </div>
          )}
        )}
            
        </div>

        <div className="w-full flex justify-between items-center   px-20 py-3  border-t-[0.5px] border-zinc-500 ">
          {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>{
            return <p key={index} className='font-light tracking-[0.5px]'> {item} </p>
          })}
          <div className="start flex gap-2 items-center">
          <div className=" font-light border-[2px] rounded-full py-1 px-2 border-zinc-400  ">START THE PROJECT </div>
          <div className="py-2 px-2 rounded-full border-[2px] border-zinc-500">
            <GoArrowUpRight />
          </div>
          </div>
        </div>
    </div>
  )
}

export default Landingpage