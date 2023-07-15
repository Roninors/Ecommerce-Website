import { Navtext } from "./Navtext";

function NavButtons() {
  return (
    <div className=" hidden md:flex items-left justify-left flex-row gap-1 group ">
      {Navtext.map((navInfo,i) => (
        <li key={i} className="list-none font-pop cursor-pointer  p-[1em] hover:text-white duration-300 hover:bg-black ease-in-out ">
          {navInfo.link}
        </li>
      ))}
    </div>
  );
}

export default NavButtons;
