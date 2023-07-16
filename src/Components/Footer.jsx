function Footer(){
    return(
        <div className="relative w-full   mt-auto flex items-center justify-center flex-col   ">
            <div className="w-full flex justify-center items-center flex-col text-center p-[3em] gap-2">
              <h1 className="font-pop md:text-lg">Subscribe Us</h1> 
               <p className="font-pop text-xs md:text-sm">Join us on our adventure and be the first to get updates & specials</p>
               <div className="flex flex-row justify-between items-center gap-3 ">
               <input type="text" name="" id="" className="w-[50vw] lg:w-[30vw] border p-[.2em] border-gray-700 font-pop" />
               <button className="font-pop font-thin border p-[.2em] lg:px-[1em] border-gray-700">Subscribe</button>
               </div>
            
            </div>
            <div className="w-full flex  items-center justify-center p-[1.5em] flex-col gap-5 lg:flex-row  lg:items-start lg:justify-between">
                <div className="flex items-center justify-center gap-4" >
                <img  src={new URL("../pictures/instagram.png", import.meta.url).href } alt="" className="w-[5vw] md:[3.5vw] lg:w-[1.5vw]"/>
                        <img  src={new URL("../pictures/twitter.png", import.meta.url).href } alt="" className=" w-[5vw] md:[3.5vw] lg:w-[1.5vw]" />
                        <img  src={new URL("../pictures/facebook.png", import.meta.url).href } alt="" className=" w-[5vw] md:[3.5vw] lg:w-[1.5vw]" />

                </div>
                        

                    <div className="font-pop lg:text-xs text-center"> 
                        © 2023 Developed by devronin, All Rights Reserved
                    </div>
            </div>
        </div>
    )
}

export default Footer;