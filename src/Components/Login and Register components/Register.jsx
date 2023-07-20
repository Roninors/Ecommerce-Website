import { useForm } from "react-hook-form";
import { useSignup } from "../../hooks/useSignup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
function Register() {
  
  const schema = yup.object().shape({
    username: yup.string().required("Required field"),
    email: yup.string().email().required("Required field"),
    password: yup
      .string()
      .min(8)
      .max(64)
      .matches(
        /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
        "Password must contain at least one capital letter and one special character"
      )
      .required("Required field"),
    confirmPass: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password don't match")
      .required("Required field"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    //need to install @hookform/resolvers
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const { signup, isLoading, error } = useSignup();

  const onSubmit = async (userDetails) => {
    await signup(userDetails);
  };

  return (
    <div className=" w-full  flex items-center  justify-center md:justify-start  md:flex-row border-b border-t">
      <div className="w-[80vh]  p-[10vh] flex items-center justify-center">
        <form
          className=" w-full  flex flex-col gap-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="font-pop text-2xl font-bold text-center mb-5">
            Sign Up
          </h1>

          <input
            type="text"
            className="font-pop text-sm   border-2 p-[1em] rounded-md border-black w-full  focus:bg-black focus:text-white"
            placeholder="Username"
            {...register("username")}
          />
          <p
            className={errors.username?.message ? "font-pop text-xs" : "hidden"}
          >
            {errors.username?.message}
          </p>

          <input
            type="email"
            className="font-pop text-sm border-2  p-[1em] rounded-md border-black w-full   focus:bg-black focus:text-white"
            placeholder="Email"
            {...register("email")}
          />
          <p className={errors.email?.message ? "font-pop text-xs" : "hidden"}>
            {errors.email?.message}
          </p>
          <p className={error ? "font-pop text-xs" : "hidden"}>{error}</p>

          <input
            type="text"
            className="font-pop text-sm border-2 p-[1em]   rounded-md border-black  w-full   focus:bg-black focus:text-white"
            placeholder="Password"
            {...register("password")}
          />
          <p
            className={errors.password?.message ? "font-pop text-xs" : "hidden"}
          >
            {errors.password?.message}
          </p>

          <input
            type="text"
            className="font-pop text-sm  border-2  p-[1em] rounded-md border-black  w-full  focus:bg-black focus:text-white"
            placeholder="Confirm Password"
            {...register("confirmPass")}
          />
          <p
            className={
              errors.confirmPass?.message ? "font-pop text-xs" : "hidden"
            }
          >
            {errors.confirmPass?.message}
          </p>

          <div className="w-full">
            <p
              onClick={() => navigate("/login")}
              className="font-pop text-sm cursor-pointer underline w-fit "
            >
              Already have an account?
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-black text-white text-base font-pop p-[1em] mt-5  rounded-md hover:bg-gray-400 duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
      <div className="md:w-full md:h-screen">
        <div className="hidden  bg-reg-banner hover:bg-trend-banner hover:bg-center duration-300 ease-in-out bg-cover bg- bg-top h-full w-full md:block  "></div>
      </div>
    </div>
  );
}

export default Register;
