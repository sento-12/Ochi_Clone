// eslint-disable-next-line no-unused-vars
import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-speed=".2"  className='w-full  p-[4vw] bg-[#cdea68] rounded-t-3xl text-black  '>
        <h1 className='text-[4vw] tracking-tight leading-[4vw] font-normal font-["Neue Montreal"]    '>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, exeplain complex ideas, and hire great people.
        </h1>
        <div className="border-t-[2px]  py-4 mt-11  flex border-[#8c985e]  ">
            <div className="w-1/2  ">
                <h1 className='text-[4vw] mb-6 font-["Neue Montreal"]'>Our opproach :</h1>
                <button className='py-4 items-center flex gap-9 px-6 text-white rounded-full bg-zinc-800'>READ MORE
                    <div className="w-2 h-2 rounded-full bg-slate-50"></div>
                </button>
            </div>
            <div className="w-1/2 h-[30vw] rounded-3xl bg-[#adc06a] "></div>
        </div>

    </div>
  )
}

export default About