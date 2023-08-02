import { useContext } from "react";
import { MainContext } from "../context/mainContext";

function Search() {
  const { showSearch, setShowSearch } = useContext(MainContext);

  return (
    <div className={showSearch ?  "bg-white fixed flex  flex-col justify-center items-center  w-full top-0 z-50  duration-500 ease-in-out" : "bg-white fixed flex  flex-col justify-center items-center  top-[-100%] w-full  z-50  ease-in-out duration-500"}>
      <div   onClick={() => {
            setShowSearch(false);
          }}
          className="absolute top-0 right-0 p-5 cursor-pointer rounded-full">
        <img
          src={new URL("../pictures/close.png", import.meta.url)}
          alt="search-logo"
        
          className="w-5   cursor-pointer "
        />
      </div>
      <div>
        <input type="text" placeholder="SEARCH" className="font-pop caret-black outline-none border-b border-b-gray-400  pb-5 lg:text-4xl m-[3em]  " />
      </div>

      
    </div>
  );
}

export default Search;
