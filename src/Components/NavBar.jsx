import NavButtons from "./Navbar components/NavButtons";

function NavBar() {
  return (
    <div className=" w-full relative flex items-center justify-between lg:flex-row  p-[1em] lg:px-[2.5em]">
      <div>
        <h1 className="font-sans  font-thin text-4xl ">SHIA</h1>
      </div>

      <NavButtons />

      <div className="flex items-center justify-center gap-4 ">
        <img
          src={new URL("../pictures/bag.png", import.meta.url)}
          alt="bag-logo"
          className="w-5 hidden md:w-6 md:block "
        />
        <img
          src={new URL("../pictures/user.png", import.meta.url)}
          alt="user-logo"
          className="w-5 hidden md:w-6 md:block"
        />
        <img
          src={new URL("../pictures/menu.png", import.meta.url)}
          alt="menu-logo"
          className="ml-3 w-8 md:w-12 md:hidden"
        />
      </div>
    </div>
  );
}

export default NavBar;
