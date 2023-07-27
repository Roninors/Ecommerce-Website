import { useNavigate } from "react-router-dom";

function ProductCard({prodName, prodPrice,prodImgPath,prodId}){
  const navigate = useNavigate();
 

  const handleToCart = (id)=>{
    console.log(id)
  }
    return(
        <div className=" flex justify-between items-center flex-col gap-5  ">
       
          <div className=" relative flex   h-[35vh] w-[35vh]  group">
            <img src={new URL(prodImgPath, import.meta.url).href } alt="" className="h-full w-full object-cover object-center group-hover:rounded-xl duration-300 ease-in-out " />
            
            <div onClick={()=> {navigate(`/product/${prodId}`)}} className="absolute hidden cursor-pointer  items-center justify-center flex-col rounded-xl h-full w-full group-hover:bg-black group-hover:bg-opacity-50 duration-500 ease-in-out lg:flex">

            <h1    className=" hidden group-hover:block  font-pop text-white text-xl font-bold   ">VIEW ITEM</h1>
            <p className=" absolute bottom-0 left-0  p-[1em] rounded-full hidden group-hover:block text-center font-pop text-sm hover:underline m-2 text-white">Add to cart</p>
      
            </div>

        </div>
        
        <div className="flex  items-center justify-center flex-col ">
        <div className="flex justify-center items-center gap-2 ">
          <h1 className="font-pop text-black text-sm p-[.5em] rounded-lg lg:hidden">ADD TO CART</h1>
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