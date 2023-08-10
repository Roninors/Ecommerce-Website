import {  useState } from "react";
import { useNavigate } from "react-router-dom";



export const useSignup = ()=>{
        const [isLoading,setIsLoading] = useState(false);
        const [error,setError] = useState("");
        const navigate = useNavigate();
        const signup = async(userDetails)=>{

            setIsLoading(true);

            const response = await fetch("https://shia-backend.onrender.com/user/signup",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(userDetails)
            })
            
            const json = await response.json();

            if(!response.ok){
                setIsLoading(false)
              setError(json.error)
            }

            if(response.ok){
                localStorage.setItem("user", JSON.stringify(json))
                navigate("/")
                setIsLoading(false)
                console.log(json)
            }
        }

        return {isLoading,signup,error}
}
