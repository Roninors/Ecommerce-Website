import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const navigate = useNavigate();
  const { login, error, isLoading } = useLogin();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
        // install @hookform/resolvers
    resolver: yupResolver(schema),
  });

  const onSubmit = async (userDetails) => {
    await login(userDetails);
  };

  return (
    <div className=" w-full  flex items-center  justify-center md:justify-start  md:flex-row border-b border-t">
      <div className="w-[80vh] h-full p-[10vh] flex items-center justify-center overflow-hidden">
        <form
          className=" w-full  flex flex-col gap-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-pop text-2xl font-bold text-center mb-5">
            Shop now!
          </h1>

          <input
            type="email"
            name=""
            id=""
            className="font-pop text-sm   border-2 p-[1em] rounded-md border-black w-full  focus:bg-black focus:text-white"
            placeholder="Email"
            {...register("email")}
          />

          <p
            className={
              error === "Incorrect email" ? "font-pop text-xs" : "hidden"
            }
          >
            {error}
          </p>

          <input
            type="text"
            name=""
            id=""
            className="font-pop text-sm border-2  p-[1em] rounded-md border-black w-full   focus:bg-black focus:text-white"
            placeholder="Password"
            {...register("password")}
          />

          <p
            className={
              error === "Incorrect password" ? "font-pop text-xs" : "hidden"
            }
          >
            {error}
          </p>

          <div className="w-full">
            <p
              onClick={() => navigate("/register")}
              className="font-pop text-sm cursor-pointer hover:underline w-fit "
            >
              Don't have an account?
            </p>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-black text-white text-base font-pop p-[1em]  mt-5  rounded-md hover:bg-gray-400 duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="md:w-full md:h-screen">
        <div className="hidden  bg-reg-banner hover:bg-trend-banner hover:bg-center duration-300 ease-in-out bg-cover bg- bg-top h-full w-full md:block  "></div>
      </div>
    </div>
  );
}

export default Login;
