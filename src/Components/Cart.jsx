import { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/mainContext";
import CartItems from "./Cart components/CartItems";
import { useNavigate } from "react-router-dom";

function Cart(){

    const {token} = useContext(MainContext);
    const [userCart,setUserCart] = useState();
    const navigate  = useNavigate();
        useEffect(()=>{
            const fetchCart = async()=>{
                const response = await fetch(`http://localhost:4000/user/${token.id}`)
                 
             if (!response.ok) {
                 throw new Error("failed to fetch specific product");
               }
                  const json = await response.json();
                  setUserCart(json)
            }

            fetchCart();
        },[])

      
    return(
        <div className="w-full p-16 flex flex-col  items-center justify-center border-t border-b  ">

                <div className="w-full flex  justify-between flex-col  sm:flex-row     border-b border-b-gray-200">
                    <div className="flex items-center justify-center gap-2 py-5 ">

                    <h1 className="font-pop text-lg font-bold">Your Cart</h1>
                    <p className="font-pop text-sm">3 items</p>

                    </div>

                    <div className="flex items-center justify-center gap-2 mb-5">
                 
                    <p className="font-pop text-sm">Total</p>
                    <h1 className="font-pop text-lg">$ <span className="font-bold">4,190</span></h1>
            
                    </div>
        
                </div>
                
                <CartItems userCart ={userCart} />
               
            
                    <div className="w-full flex justify-between items-center flex-col-reverse gap-5 lg:flex-row">
                        <div onClick={()=>navigate("/shop")} className=" w-fit flex  justify-between gap-1 items-center flex-col cursor-pointer">
                        <h1 className="font-pop">Continue Shopping</h1>
                        <hr className="w-[80%] border-gray-900 "/>
                        </div>

                        <div ><button  className="bg-black text-base font-pop text-white p-[.5em]">Proceed to checkout</button></div>
                        
                    </div>
              
               
        </div>
    )
}

export default Cart;