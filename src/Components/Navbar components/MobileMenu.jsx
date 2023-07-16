import { useContext } from "react";
import MobileMenuBtn from "./MobileMenuBtn";
import { MainContext } from "../../context/mainContext";
import { menuText } from "./Navtext";

function MobileMenu(){
    const {showMenu} = useContext(MainContext);
    console.log(showMenu)
    return(
        
        <div className={showMenu ? "absolute  z-50  w-full opacity-100 duration-300 ease-in-out bg-white  md:hidden" : "  absolute opacity-0 pointer-events-none z-50 w-full bg-white duration-300 ease-in-out"} >
       {menuText.map((navInfo) => (
        <li className="list-none font-pop text-base cursor-pointer border-t border-t-gray-200 p-[1em]  ">
          {navInfo.link}
        </li>
      ))}
        </div>
    )
}

export default MobileMenu;