import { useContext } from "react";
import { MainContext } from "../context/mainContext";

function Search() {
  const { showSearch, setShowSearch } = useContext(MainContext);

  return (
    <div className={showSearch ? "bg-white fixed flex  flex-col justify-center items-center  w-full  z-50  duration-300" : "hidden"}>
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
        <input type="text" placeholder="SEARCH" className="font-pop outline-none border-b border-b-gray-400  pb-5 lg:text-4xl m-[3em]  " />
      </div>
    </div>
  );
}

export default Search;
