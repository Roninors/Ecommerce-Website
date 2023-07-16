import { useState } from "react";


function Hero(){

  const heroVid = "https://res.cloudinary.com/dfepnhz2s/video/upload/v1689498056/myfolder/ozv2dcke4nm3exx4z5ge.mp4";
    return(
        <div className="relative w-[100vw] h-[90vh] flex justify-center items-center  lg:justify-start" >
          <video src ={heroVid} autoPlay  loop muted   className="w-full  h-full  object-cover  flex items-center justify-center md:justify-start">
                  
          </video>
           
           
          <div className=" absolute  min-w-fit p-5 flex items-center justify-between flex-col gap-1 md:items-start lg:p-10">
                      <h3 className="font-pop text-sm font-thin">
                        Let fashion reign!
                      </h3>
                    <h1 className="font-pop text-3xl text-black md:text-4xl text-center">Inspire with your style</h1>
                      <button className="bg-black mt-5 text-white font-pop text-base p-[.5em] px-[2em] ">Shop Now</button>
                    </div>
        </div>
    )
}

export default Hero;