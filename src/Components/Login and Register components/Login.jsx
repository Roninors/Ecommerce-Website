import { useContext } from "react";
import { MainContext } from "../../context/mainContext";

function Login(){
    const{setGoTo} = useContext(MainContext);
    return(
    
        <div className="w-[80vh] flex flex-col items-center justify-center gap-4 rounded-xl p-[10vh]  h-full overflow-hidden">
        <h1 className="font-pop text-2xl font-bold text-center mb-5">Shop now!</h1>
          <input type="text" name="" id="" className="font-pop text-sm   border-2 p-[1em] rounded-md border-black w-full  focus:bg-black focus:text-white" placeholder="Email" />
          <input type="text" name="" id="" className="font-pop text-sm border-2  p-[1em] rounded-md border-black w-full   focus:bg-black focus:text-white" placeholder="Password" />
          
          <div className="w-full">
          <p onClick={()=>setGoTo("register")} className="font-pop text-sm cursor-pointer hover:underline ">Don't have an account?</p>
          </div>
          <button className="bg-black text-white text-base font-pop p-[.5em] px-[2em] mt-5  rounded-md hover:bg-gray-400 duration-300">Sign In</button>
     
        </div>
    )
}

export default Login;