import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative w-[100vw] h-[90vh] flex justify-center items-center  lg:justify-start">
      <img
        src={new URL("../../pictures/bg-man.jpg", import.meta.url)}
        className="w-full h-full  object-cover object-center  flex items-center justify-center md:justify-start"
      />

      <div className=" absolute  min-w-fit p-5 flex items-center justify-center  flex-col gap-1 lg:justify-start lg:items-start lg:p-10">
        <h3 className="font-pop text-lg font-thin">Let fashion reign!</h3>
        <h1 className="font-pop text-4xl text-black md:text-6xl text-center">
          Inspire with your style
        </h1>
        <button
          onClick={() => navigate("/shop")}
          className="bg-black mt-5 text-white font-pop text-base p-[.5em] px-[2em] "
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
