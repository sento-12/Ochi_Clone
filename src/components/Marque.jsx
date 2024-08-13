// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
// eslint-disable-next-line no-unused-vars
import React from 'react'

const Marque = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full rounded-3xl py-20 bg-[#004d43] '>
        <div className="flex whitespace-nowrap border-t-2  overflow-hidden border-b-2 border-zinc-300 " >
            <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease : "linear", repeat : Infinity, duration :6} } className=" text-[15vw]  leading-none font-['Founders Grotesk'] font-bold ">WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease : "linear", repeat : Infinity, duration :6} } className=" text-[15vw]  leading-none  font-['Founders Grotesk'] font-bold ">WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marque