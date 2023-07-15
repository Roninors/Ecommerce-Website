
import { menuText } from "./Navtext";

function MobileMenuBtn() {


  return (
    <div className="flex flex-col justify-start " >
      {menuText.map((navInfo) => (
        <li className="list-none font-pop text-base cursor-pointer border-t border-t-gray-200 p-[1em]  ">
          {navInfo.link}
        </li>
      ))}
    </div>
  );
}

export default MobileMenuBtn;