import { useContext, useState } from "react";
import { MainContext } from "../context/mainContext";
import { useNavigate } from "react-router-dom";

export const useToCart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");  
  const {token} = useContext(MainContext);


 

  const addToCart = async (
    email,
    productId,
    productName,
    productImgPath,
    productPrice,
    quantity
  ) => {
    
    setIsLoading(true);

    const response = await fetch("https://ecommerce-website-backend-beta.vercel.app/user/toCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify({
        email,
        productId,
        productName,
        productImgPath,
        productPrice,
        quantity,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      setIsLoading(false);
    }
  };

  return { isLoading, addToCart, error };
};
