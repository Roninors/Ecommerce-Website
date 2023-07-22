import { useState,useEffect } from "react";
import ShopProductCard from "./Shop components/ShopProductCard";


function Shop(){
    const [allProd,setAllProd] = useState();

    useEffect(()=>{
        const fetchProducts = async()=>{
            const response = await fetch("http://localhost:4000/products/")
            const json = await response.json();
         
            
            if( response){
               setAllProd(json);
            }
            
        }
        fetchProducts();
    },[])

    console.log(allProd)
    return(
        <div className="relative w-full  flex flex-col justify-center items-center  ">
            <div className="bg-shop-banner flex justify-center items-center  p-[8rem] bg-cover   bg-no-repeat w-full  bg-center gap-3 lg:gap-5 ">
                <h1 className="font-pop text-2xl   hover:text-white cursor-default  duration-500 md:text-4xl lg:text-6xl">MINIMAL</h1>
                <h1 className="font-pop text-2xl  hover:text-white cursor-default   duration-500 md:text-4xl lg:text-6xl">BOLD</h1>
                <h1 className="font-pop text-2xl  hover:text-white cursor-default  duration-500 md:text-4xl lg:text-6xl">ELEGANT</h1>
            </div>
                <div className="flex justify-evenly gap-2 py-5 text-base text-center">
                    <h1 className="font-pop cursor-pointer p-[.8em] hover:scale-[1.1] duration-200">All Products</h1>
                    <h1 className="font-pop cursor-pointer p-[.8em] hover:scale-[1.1] duration-200">Men's apparel</h1>
                    <h1 className="font-pop cursor-pointer p-[.8em] hover:scale-[1.1] duration-200">Women's apparel</h1>
                </div>
                <div className=" flex justify-center   items-center   flex-wrap  gap-20 p-[1em]">
                {allProd && allProd.map((product,i)=>(
               <ShopProductCard prodName={product.productName} prodPrice={product.productPrice} prodImgPath={product.productImgPath} prodId={product._id} key ={i}/>
            ))}
                </div>
         
        </div>
    )
}

export default Shop;