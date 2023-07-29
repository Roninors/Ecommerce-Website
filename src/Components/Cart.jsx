import { useContext, useEffect } from "react";
import { MainContext } from "../context/mainContext";

function Cart(){

    const {token} = useContext(MainContext);

        useEffect(()=>{
            const fetchCart = async()=>{
                const response = await fetch(`http://localhost:4000/user/${token.id}`)
                 
             if (!response.ok) {
                 throw new Error("failed to fetch specific product");
               }
                  const json = await response.json();
                 console.log(json)
            }

            fetchCart();
        },[])

    return(
        <div className="w-full p-16 flex flex-col items-center justify-center border ">

                <div className="w-full flex justify-between flex-col  sm:flex-row   border-b border-b-gray-200">
                    <div className="flex items-center justify-center gap-2 py-5 ">

                    <h1 className="font-pop text-lg font-bold">Your Cart</h1>
                    <p className="font-pop text-sm">3 items</p>

                    </div>

                    <div className="flex items-center justify-center gap-2">
                 
                    <p className="font-pop text-sm">Total</p>
                    <h1 className="font-pop text-lg">$ <span className="font-bold">4,190</span></h1>
            
                    </div>
        
                </div>

               
        </div>
    )
}

export default Cart;