import { useContext } from "react";
import { MainContext } from "../../context/mainContext";

function Register(){
    const{setGoTo} = useContext(MainContext);
    return(
        
        <div className="w-[80vh] flex flex-col items-center justify-center gap-4 rounded-xl p-[10vh]  h-full overflow-hidden">
        <h1 className="font-pop text-2xl font-bold text-center mb-5">Sign Up</h1>
          <input type="text" name="" id="" className="font-pop text-sm   border-2 p-[1em] rounded-md border-black w-full  focus:bg-black focus:text-white" placeholder="Username" />
          <input type="text" name="" id="" className="font-pop text-sm border-2  p-[1em] rounded-md border-black w-full   focus:bg-black focus:text-white" placeholder="Email" />
          <input type="text" name="" id="" className="font-pop text-sm border-2 p-[1em]   rounded-md border-black  w-full   focus:bg-black focus:text-white" placeholder="Password" />
          <input type="text" name="" id="" className="font-pop text-sm  border-2  p-[1em] rounded-md border-black  w-full  focus:bg-black focus:text-white" placeholder="Confirm Password" />
          <div className="w-full">
          <p onClick={()=>setGoTo("login")} className="font-pop text-sm cursor-pointer hover:underline ">Already have an account?</p>
          </div>
          <button className="bg-black text-white text-base font-pop p-[1em] mt-5  rounded-md hover:bg-gray-400 duration-300">Create Account</button>
     
        </div>
    )
}

export default Register;