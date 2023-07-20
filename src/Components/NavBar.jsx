import { useContext } from "react";
import NavButtons from "./Navbar components/NavButtons";
import { MainContext } from "../context/mainContext";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const {setShowMenu,showMenu,setShowSearch} = useContext(MainContext);
  const navigate = useNavigate();
  return (
    <div className=" w-full relative flex z-30 bg-white  items-center justify-between lg:flex-row  p-[1em] lg:px-[2.5em]">
      <div>
        <h1 onClick={()=>navigate("/")} className="font-sans  font-thin text-4xl cursor-pointer">SHIA</h1>
      </div>

      <NavButtons />

      <div className="flex items-center justify-center gap-4 ">

      <img
          src={new URL("../pictures/search.png", import.meta.url)}
          alt="search-logo"
          onClick={()=>{setShowSearch(true)}}
          className="w-5 hidden md:w-4 md:block cursor-pointer "
        />

        <img
          src={new URL("../pictures/bag.png", import.meta.url)}
          alt="bag-logo"
          className="w-5 hidden md:w-5 md:block cursor-pointer "
        />

        <img
        onClick={()=>navigate("/login")}
          src={new URL("../pictures/user.png", import.meta.url)}
          alt="user-logo"
          className="w-5 hidden md:w-5 md:block cursor-pointer"
        />
      
        <img
          src={new URL(`../pictures/${showMenu ? "close": "menu" }.png`, import.meta.url)}
          alt="menu-logo"
          className="ml-3 w-8 md:w-12 md:hidden cursor-pointer"
          onClick={()=>{
            setShowMenu(!showMenu);
          }}
        />
       
          
      </div>

    </div>
  );
}

export default NavBar;
