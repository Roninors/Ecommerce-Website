import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Product(){
    const params = useParams();
    const {id} = params;
    const [product,setProduct] = useState("");
    useEffect(()=>{
        const fetchProduct = async()=>{
           try {
            const response = await fetch(`http://localhost:4000/products/${id}`)

                if(!response.ok){
                    throw new Error("failed to fetch specific product");
                }
                const json = await response.json();
                setProduct(json);
           } catch (error) {
            console.error("failed fetching data:", error)
           }
        }
        fetchProduct();
    },[])


    return(
        <div className="flex  justify-center items-center flex-col lg:flex-row ">
                <div className="flex justify-center items-center w-full  ">
                    <img  src={new URL(product.productImgPath, import.meta.url)} alt="" className="w-[70%] h-full object-cover"/>
                </div>
                <div className="w-full flex flex-col justify-start items-center text-center p-10 gap-5">
                    <h1 className="font-pop text-5xl  text-black">{product.productName}</h1>
                    <h2 className="font-pop text-black  pt-[.5em] text-sm">BY SHIA</h2>
                    <h3 className="font-pop text-4xl pt-[.5em] text-slate-800">${product.productPrice}</h3>
                <div className="h-1 w-[50%] bg-black my-10"></div>
                    <p className="font-pop text-base pt-[1em] text-gray-500">{product.productDescription}</p>

                    <div className="flex justify-center items-center gap-2">
                        <label className="font-pop text-base">Quantity</label>
                        <input type="number" defaultValue={0}  className="border text-center border-black w-[20%] rounded-lg px-[.5em] outline-none text-black" />
                    </div>
                    
                    <button className="font-pop text-lg p-[.5em] rounded-xl hover:bg-gray-500 duration-300 bg-black text-white">ADD TO CART</button>
                </div>
              
        </div>
    )
}

export default Product;