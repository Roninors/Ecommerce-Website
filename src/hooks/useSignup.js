import {  useState } from "react";



export const useSignup = ()=>{
        const [isLoading,setIsLoading] = useState(false);
        const [error,setError] = useState("");
        const signup = async(userDetails)=>{

            setIsLoading(true);

            const response = await fetch("http://localhost:4000/user/signup",{
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
                setIsLoading(false)
                console.log(json)
            }
        }

        return {isLoading,signup,error}
}