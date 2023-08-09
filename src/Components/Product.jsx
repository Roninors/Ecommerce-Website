import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import ProductInfo from "./product components/ProductInfo";
import RelatedProducts from "./product components/RelatedProducts";

function Product() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState("");
  window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const fetchProduct = async () => {

      try {
        const response = await fetch(`https://ecommerce-website-backend-beta.vercel.app/products/${id}`);

        if (!response.ok) {
          throw new Error("failed to fetch specific product");
        }
        const json = await response.json();
        setProduct(json);
          
      } catch (error) {
        console.error("failed fetching data:", error);
      }
    };
    fetchProduct();
  }, [id]);

 

  return (
    <div className="relative flex  justify-center items-center flex-col  border-t border-b  ">

      <div className="w-full flex flex-col lg:flex-row">

      <div className="flex justify-center items-center w-full p-5 ">
        
        <img 
          src={new URL(product.productImgPath, import.meta.url)}
          alt=""
          className="w-[70%] h-full object-contain"
        />

      </div>

      <div className=" relative w-full flex flex-col justify-center items-center text-center p-10 gap-5">

        <ProductInfo product={product}/>
         
      </div>

      </div>
      
      

      <RelatedProducts prodCollection = {product.productCollection}/>

    </div>
  );
}

export default Product;
