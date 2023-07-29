import { useState } from "react";


export const useToCart = ()=>{ 
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState("");
    
    const addToCart = async(email,productId,productName,productImgPath,productPrice,quantity)=>{
      
        setIsLoading(true);

        const response = await fetch("http://localhost:4000/user/toCart",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({email,productId,productName,productImgPath,productPrice,quantity})
        })
        
        const json = await response.json();

        if(!response.ok){
            setIsLoading(false)
          setError(json.error)
        }

        if(response.ok){
            setIsLoading(false)
        }
    }

    return {isLoading,addToCart,error}
}