import { useState, useEffect, useContext } from "react";
import ProductCard from "./Home components/ProductCard";
import { MainContext } from "../context/mainContext";

function Shop() {
  const [allProd, setAllProd] = useState();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4000/products/");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const json = await response.json();
        setAllProd(json);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);

 
  return (
    <div className="relative w-full  flex flex-col justify-center items-center  ">
      <div className="bg-shop-banner flex justify-center items-center  p-[8rem] bg-cover   bg-no-repeat w-full  bg-center gap-3 lg:gap-5 ">
        <h1 className="font-pop text-2xl   hover:text-white cursor-default  duration-500 md:text-4xl lg:text-6xl">
          MINIMAL
        </h1>
        <h1 className="font-pop text-2xl  hover:text-white cursor-default   duration-500 md:text-4xl lg:text-6xl">
          BOLD
        </h1>
        <h1 className="font-pop text-2xl  hover:text-white cursor-default  duration-500 md:text-4xl lg:text-6xl">
          ELEGANT
        </h1>
      </div>
      <div className="flex  p-5 w-full justify-center items-center text-center gap-5">
        <h1 className="font-pop cursor-pointer hover:scale-[1.1] duration-200">
          All Products
        </h1>
        <h1 className="font-pop cursor-pointer  hover:scale-[1.1] duration-200">
          Men's apparel
        </h1>
        <h1 className="font-pop cursor-pointer  hover:scale-[1.1] duration-200">
          Women's apparel
        </h1>
      </div>
      <div className=" flex justify-center   items-center   flex-wrap  gap-20 p-[1em]  ">
        {allProd &&
          allProd.map((product, i) => (
            <ProductCard
              prodName={product.productName}
              prodPrice={product.productPrice}
              prodImgPath={product.productImgPath}
              prodId={product._id}
              key={i}
            />
            
         ))}
 
      </div>
    </div>
  );
}

export default Shop;
