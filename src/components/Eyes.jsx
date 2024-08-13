// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [Rotate, setRotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
                let movX = e.clientX
                let movY = e.clientY

                let deltaX = movX - window.innerWidth/2;
                let deltaY = movY - window.innerHeight/2;

                var result = Math.atan2(deltaY, deltaX) * (180/Math.PI)
                setRotate(result - 180)
                console.log(Rotate)
    })
    })
    
  return (
    <div className="h-screen w-full overflow-hidden">
    <div data-scroll data-scroll-speed="-.6" className=' relative  w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] '>
        <div className="absolute flex gap-11 h-[10vw]  top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
        <div className="circle flex items-center justify-center w-[13vw] h-[13vw] bg-white rounded-full ">
                <div className=" w-2/3 h-2/3 items-center justify-center flex bg-black rounded-full  ">
                <div style={{transform : ` rotate(${Rotate}deg)`}} className={`line   w-full h-10`}>
                    <div className="bg-white h-[2vw] w-[2vw] rounded-full  "></div>
                </div></div>
            </div> 

            <div className="circle flex items-center justify-center w-[13vw] h-[13vw] bg-white rounded-full ">
                <div className=" w-2/3 h-2/3 items-center justify-center flex bg-black rounded-full  ">
                <div style={{transform : ` rotate(${Rotate}deg)`}} className={`line  w-full h-10`}>
                    <div className="bg-white h-[2vw] w-[2vw] rounded-full  "></div>
                </div></div>
            </div> 
        </div>
    </div> 
    </div> )
}

export default Eyes