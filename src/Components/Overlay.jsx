import { useContext } from "react"
import { MainContext } from "../context/mainContext"

function Overlay(){

    const {setShowSearch,setShowMenu} =useContext(MainContext);
    return(
        <div onClick={()=>{
            setShowSearch(false);
            setShowMenu(false);
          }}className=" w-screen  h-screen bg-black z-50 fixed opacity-30 duration-500 cursor-pointer  " ></div>
    )
}

export default Overlay;