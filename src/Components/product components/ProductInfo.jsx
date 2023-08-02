import { useContext, useRef } from "react";
import { useToCart } from "../../hooks/useToCart";
import { MainContext } from "../../context/mainContext";

function ProductInfo({ product }) {
  const {addToCart,error,isLoading} = useToCart();
  const {token} = useContext(MainContext);
  const quantity = useRef();

  const handleCart = async (email,productId,productName,productImgPath,productPrice,quantity)=>{

   try {
     await addToCart(
       email,
       productId,
       productName,
       productImgPath,
       productPrice,
       quantity
     );
   } catch (err) {
     console.error(error);
   }
   
     
  }

 

  return (
    <>
      <h1 className="font-pop text-5xl  text-black">{product.productName}</h1>

      <div className="flex items-center justify-center gap-1 flex-row">
        <p className="font-pop text-sm">Sizes:</p>
        {product &&
          product.sizes.map((size, i) => (
            <h2
              key={i}
              onClick={() => {
                console.log(size);
              }}
              className="font-pop text-black  text-sm "
            >
              {size}
            </h2>
          ))}
      </div>

      <h3 className="font-pop text-4xl  text-slate-800">
        ${product.productPrice}
      </h3>

      <div className="h-1 w-[50%] bg-black my-5"></div>

      <p className="font-pop text-base pt-[1em] text-gray-500">
        {product.productDescription}
      </p>

      <div className="flex justify-center items-center gap-2">
        <label className="font-pop text-base">Quantity</label>
        <input
          type="number"
          defaultValue={1}
          min={1}
              ref={quantity}
          className="font-pop border caret-black text-center border-black w-[20%] rounded-lg px-[.5em] outline-none text-black"
        />
      </div>

      <button onClick={()=>handleCart(token.email,product._id,product.productName, product.productImgPath, product.productPrice,Number(quantity.current.value))} disabled={isLoading} className="font-pop text-lg p-[.5em] rounded-xl hover:bg-gray-500 duration-300 bg-black text-white mb-20">
        ADD TO CART
      </button>
    </>
  );
}

export default ProductInfo;
