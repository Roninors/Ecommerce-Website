
function FirstCol(){
    return(
        <div className="flex items-center justify-center flex-col ">
            <div>
            <h1 className="font-pop font-thin text-xl p-[1em] lg:text-3xl">·CLASSY FASHION·</h1>
            </div>
            
          <div className="w-full  flex justify-center items-center gap-5 flex-wrap">
            <div className=" flex justify-between items-center flex-col gap-1">
                <div className=" h-[25vh] w-[25vh] lg:h-[50vh] lg:w-[50vh]">
                    <img src={new URL('../../pictures/brown-bag.jpg', import.meta.url).href } alt="" className="h-full w-full object-cover" />
                </div>
                <h3 className="font-pop text-lg ">
                    Leather Bag
                </h3>

                <p className="font-pop text-sm text-slate-500 mb-3">
                    $99.00
                </p>
                <button className="bg-gray-600 text-white font-pop text-sm p-[.5em] ">
                    ADD TO CART
                </button>
            </div>

            <div className=" flex justify-between items-center flex-col gap-1">
                <div className=" h-[25vh] w-[25vh] lg:h-[50vh] lg:w-[50vh]">
                    <img src={new URL('../../pictures/brown-glasses.jpg', import.meta.url).href } alt="" className="h-full w-full object-cover" />
                </div>
                <h3 className="font-pop text-lg ">
                    Leather Bag
                </h3>

                <p className="font-pop text-sm text-slate-500 mb-3">
                    $99.00
                </p>
                <button className="bg-gray-600 text-white font-pop text-sm p-[.5em] ">
                    ADD TO CART
                </button>
            </div>


            <div className=" flex justify-between items-center flex-col gap-1">
                <div className=" h-[25vh] w-[25vh] lg:h-[50vh] lg:w-[50vh]">
                    <img src={new URL('../../pictures/watch.jpg', import.meta.url).href } alt="" className="h-full w-full object-cover" />
                </div>
                <h3 className="font-pop text-lg ">
                    Leather Bag
                </h3>

                <p className="font-pop text-sm text-slate-500 mb-3">
                    $99.00
                </p>
                <button className="bg-gray-600 text-white font-pop text-sm p-[.5em] ">
                    ADD TO CART
                </button>
            </div>

          
           
          </div>
                
            
        </div>
               
    )
}



export default FirstCol;