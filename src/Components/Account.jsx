import { useContext, useState,useEffect } from "react";
import { MainContext } from "../context/mainContext";
import { useNavigate } from "react-router-dom";

function Account(){
    const {token} = useContext(MainContext);
    const [user,setUser] = useState("");
    const navigate = useNavigate();
    useEffect(() => {   
        const fetchUser = async () => {
    
          try {
            const response = await fetch(`http://localhost:4000/user/${token.id}`,{
                headers: {"Authorization": `Bearer ${token.token}`}
            });
    
            if (!response.ok) {
              throw new Error("failed to fetch specific user");
            }
            const json = await response.json();
            setUser(json);
              
          } catch (error) {
            console.error("failed fetching data:", error);
          }
        };
        fetchUser();
      },[]);
    return(
        <div className="w-full flex justify-center items-center ">  
            <div className="p-5 flex items-center justify-center flex-col gap-2">
                    <img src={new URL("../pictures/profilepic.png", import.meta.url)} alt="profile-picture" className="w-[10vw]" />
          
                 <h3 className="font-pop mt-5">User: {user?.username}</h3>
                
                 <h3 className="font-pop">Cart Items: {user?.cart?.length} items</h3> 
                 <div className="flex justify-center items-center gap-2">
                 <button className="bg-black text-white font-pop p-[.4em] rounded-md hover:bg-gray-500 duration-300" onClick={()=>navigate("/cart")}>View cart</button>
                 
                 <button className=" bg-black text-white font-pop p-[.4em] rounded-md hover:bg-gray-500 duration-300">Logout</button>
                 </div>
                

                    
            </div>
        </div>
    )
}

export default Account;