
import { useContext } from "react";
import Login from "./Login and Register components/Login";
import Register from "./Login and Register components/Register";
import { MainContext } from "../context/mainContext";

function ValForm() {
const {goTo} = useContext(MainContext);
  return (
    <div className=" w-full  h-screen flex items-center  justify-center md:justify-start  md:flex-row border-b border-t">
      {goTo == "register"? <Register /> : <Login/>}
      <div className="md:w-full md:h-screen">
        <div className="hidden  bg-reg-banner hover:bg-trend-banner hover:bg-center duration-300 ease-in-out bg-cover bg- bg-top h-full w-full md:block  "></div>
      </div>
    </div>
  );
}

export default ValForm;
