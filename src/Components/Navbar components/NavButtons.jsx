import { Link } from "react-router-dom";
import { Navtext } from "./Navtext";

function NavButtons() {
  return (
    <div className=" hidden md:flex items-center justify-center   gap-1 group ">
      {Navtext.map((navInfo,i) => (
        <Link to={navInfo.path} key={i} className=" font-pop cursor-pointer  p-[1em] hover:text-white duration-300 hover:bg-black ease-in-out ">
          {navInfo.link}
        </Link>
      ))}
    </div>
  );
}

export default NavButtons;
