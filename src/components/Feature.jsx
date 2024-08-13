// eslint-disable-next-line no-unused-vars
import React from 'react'

const Feature = () => {
  return (
    <div className="w-full p-12  text-white">
        <h1 className="font-['Founders Grotesk'] text-[6vw] font-light tracking-tighter ">
            Featured Project 
        </h1>
        <div className="w-full flex gap-8 mt-8 border-t-[1px] p-5 border-zinc-600">
            <div className="w-1/2  h-[40vw]  ">
                <div className="w-full h-full overflow-hidden rounded-3xl ">
                    <img className='w-full h-full bg-cover  ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
            </div>
            <div className="w-1/2  h-[40vw]  ">
                <div className="w-full h-full rounded-3xl ">
                <img className='w-full h-full bg-cover  ' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature