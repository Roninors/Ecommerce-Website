import { useContext } from "react";
import MobileMenuBtn from "./MobileMenuBtn";
import { MainContext } from "../../context/mainContext";

function MobileMenu(){
    const {showMenu} = useContext(MainContext);
    return(
        
        <div className={showMenu ? " w-full absolute z-50 min-h-fit bg-white border-t border-t-gray-400 ease-in-out duration-300 md:hidden" : " h-0 "} >
            <MobileMenuBtn/>
        </div>
    )
}

export default MobileMenu;