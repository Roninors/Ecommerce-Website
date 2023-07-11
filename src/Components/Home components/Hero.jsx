

function Hero(){
    return(
        <div className=" w-[100vw] h-[90vh]  " >
          <div className="w-full h-full bg-top bg-cover bg-hero-image  flex items-center justify-center sm:justify-start">
                    <div className=" min-w-fit p-5 flex items-center justify-between flex-col gap-1 md:items-start lg:p-10">
                      <h3 className="font-pop text-sm font-thin">
                        Let fashion reign!
                      </h3>
                    <h1 className="font-pop text-3xl text-black lg:text-4xl text-center">Inspire with your style</h1>
                      <button className="bg-black mt-5 text-white font-pop text-base p-[.5em] px-[2em] ">Shop Now</button>
                    </div>
          </div>
        </div>
    )
}

export default Hero;