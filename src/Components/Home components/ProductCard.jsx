import { useNavigate } from "react-router-dom";
import { useToCart } from "../../hooks/useToCart";
import { useContext } from "react";
import { MainContext } from "../../context/mainContext";

function ProductCard({prodName, prodPrice,prodImgPath,prodId}){
  const navigate = useNavigate();
  const {token} = useContext(MainContext);
  const {addToCart,error,isLoading} = useToCart();

  const handleToCart = async(email,prodId,prodName,prodImgPath,prodPrice,quantity)=>{
    await addToCart(email,prodId,prodName,prodImgPath,prodPrice,quantity);
    if(error){
      console.error(error);
    }
  }
    return(
        <div className=" flex justify-between items-center flex-col gap-5  ">
       
          <div className=" relative flex   h-[35vh] w-[35vh]  group">
            <img src={new URL(prodImgPath, import.meta.url).href } alt="" className="h-full w-full object-cover object-center group-hover:rounded-xl duration-300 ease-in-out " />
          
            <p onClick={()=>{handleToCart(token.email,prodId,prodName,prodImgPath,prodPrice,1)}} aria-disabled={isLoading} className=" absolute bottom-0 left-0  p-[1em] rounded-full hidden lg:group-hover:block text-center font-pop text-sm hover:underline m-2  text-white cursor-pointer z-10">Add to cart</p>
            <div onClick={()=> {navigate(`/product/${prodId}`)}} className="absolute hidden cursor-pointer  items-center justify-center flex-col rounded-xl h-full w-full group-hover:bg-black group-hover:bg-opacity-50 duration-500 ease-in-out lg:flex">
          
            <h1    className=" hidden group-hover:block  font-pop text-white text-xl font-bold   ">VIEW ITEM</h1>
         
      
            </div>

        </div>
        
        <div className="flex  items-center justify-center flex-col ">
        <div className="flex justify-center items-center gap-2 ">
          <h1 onClick={()=>{handleToCart(token.email,prodId,prodName,prodImgPath,prodPrice,1)}} aria-disabled={isLoading} className="font-pop text-black text-sm p-[.5em] rounded-lg lg:hidden">ADD TO CART</h1>
          <p  onClick={()=> navigate(`/product/${prodId}`)} className="font-pop text-black text-sm  p-[.5em] rounded-lg lg:hidden" >VIEW ITEM</p>
        </div>
        <h3 className="font-pop text-lg ">
          {prodName}
        </h3>

        <p className="font-pop text-sm text-slate-500 mb-3">
          {`$ ${prodPrice}`}
        </p>

        
      
          </div>
         
    </div>
    )
}

export default ProductCard;