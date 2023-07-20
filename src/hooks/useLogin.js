import { useState } from "react";

export const useLogin = ()=>{
    const [success,setSuccess] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState("");

    const login = async(userDetails)=>{

        setIsLoading(true);

        const response = await fetch("http://localhost:4000/user/login",{
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
            setIsLoading(false)
            console.log(json)
        }
    }

    return {isLoading,login,error}
}