function Register(){
    return(
    
        <div className=" w-full flex items-center justify-center   p-[5%]">
           
      <div className="w-full flex  md:flex-row gap-5 ">

      <div className="hidden bg-reg-banner bg-cover bg-no-repeat w-full  rounded-xl md:block md:h-auto ">
                    
                    </div>
                    <div className="w-full flex flex-col gap-4 rounded-xl  ">
                    <h1 className="font-pop text-2xl font-bold text-center mb-5">Sign Up</h1>
                      <input type="text" name="" id="" className="font-pop text-sm   border-2 p-[.5em] rounded-md border-black sm:text-lg  " placeholder="Username" />
                      <input type="text" name="" id="" className="font-pop text-sm border-2  p-[.5em] rounded-md border-black  sm:text-lg " placeholder="Email" />
                      <input type="text" name="" id="" className="font-pop text-sm border-2 p-[.5em]   rounded-md border-black  sm:text-lg" placeholder="Password" />
                      <input type="text" name="" id="" className="font-pop text-sm  border-2  p-[.5em] rounded-md border-black  sm:text-lg" placeholder="Confirm Password" />
                      <button className="bg-black text-white text-base font-pop p-[1em] mt-5  rounded-md hover:bg-gray-400 duration-300">Create Account</button>
                 
                    </div>
                 
                    
      </div>
                
               
        
        </div>
    )
}

export default Register;