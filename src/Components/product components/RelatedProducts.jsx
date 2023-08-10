import { useEffect, useState } from "react";
import ProductCard from "../Home components/ProductCard";
import { useParams } from "react-router-dom";


function RelatedProducts({prodCollection}){
    const [related,setRelated] = useState();
    const params = useParams();
    const {id} = params;
    useEffect(() => {
        const fetchProduct = async () => {
          try {
            const response = await fetch(`https://shia-backend.onrender.com/products/collections`,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "productCollection": prodCollection })
              });
    
            if (!response.ok) {
              throw new Error("failed to fetch specific product");
            }
            const json = await response.json();
            setRelated(json);
            
          } catch (error) {
            console.error("failed fetching data:", error);
          }
        };
        fetchProduct();
     
      }, [prodCollection]);


    return(
        <div className="relative w-full flex justify-center items-center flex-col ">
            <div className="w-full flex items-center justify-center">
            <h1 className="font-pop text-4xl">Related Products</h1>
        
            </div>
    
            <div className="flex justify-center items-center my-10 gap-16 flex-wrap">
     
            {related && related.map((products,i)=>(
              products._id === id ? "" 
              :
            <ProductCard key={i}  prodName={products.productName} prodPrice={products.productPrice} prodImgPath={products.productImgPath} prodId={products._id}/>
            ))}
            </div>

        </div>
    )
}

export default RelatedProducts;
