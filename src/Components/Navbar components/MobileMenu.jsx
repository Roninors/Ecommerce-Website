import { useContext } from "react";
import { MainContext } from "../../context/mainContext";
import { menuText } from "./Navtext";
import { Link } from "react-router-dom";

function MobileMenu(){
    const {showMenu,setShowMenu} = useContext(MainContext);

    return(

        <div className={showMenu ? "fixed  h-screen  w-[43vh] z-50 right-0  opacity-100 duration-300 ease-in-out bg-white  md:hidden" : "  fixed  h-screen  w-0 z-50 right-0  opacity-100 duration-300 ease-in-out bg-white  md:hidden"} >
          <div className="flex items-end justify-end   p-5">
          <img
          src={new URL(`../../pictures/close.png`, import.meta.url)}
          alt="menu-logo"
          className="ml-3 w-8 md:w-12 md:hidden cursor-pointer"
          onClick={()=>{
            setShowMenu(!showMenu);
          }}
        />
          </div>
          <div className="flex flex-col p-5 ">
          {menuText.map((navInfo,i) => (
        <Link to={navInfo.path} key={i} onClick={()=>{
          setShowMenu(!showMenu);
        }} className="list-none font-pop text-base cursor-pointer p-[.8em]  hover:translate-x-2 duration-200  ">
          {navInfo.link}
        </Link>
      ))}
          </div>
      
        </div>
    )

   
}

export default MobileMenu;