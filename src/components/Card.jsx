// eslint-disable-next-line no-unused-vars
import React from 'react'

const Card = () => {
  return (
    <div className=" p-16">
    <div className="w-full p-20 flex gap-10 border-t-[1px] border-zinc-600  ">
        <div className="w-1/2 relative bg-[#004d43] flex justify-center items-center rounded-3xl h-[25vw]  ">

        <h1 className='flex absolute '>
            {"FYDE".split("").map((item, index)=>{
                <span key={index} className='inline-block'>{item}</span>
            })}
        </h1>
            <img className='w-[13vw]  ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-2 text-[1.2vw] font-semibold bottom-[1vw] left-[1vw] border-[1px] rounded-full  '>&copy; 2019-2020</button>
        </div>
        <div className="w-1/2 flex  gap-10">
            <div className="w-1/2 flex justify-center items-center bg-[#212121] rounded-3xl h-[25vw]">
                <img className='w-[7vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            </div>
            <div className="w-1/2 flex justify-center items-center bg-[#212121] rounded-3xl h-[25vw]">
                <img className='w-[7vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card