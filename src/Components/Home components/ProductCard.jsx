function ProductCard({prodName, prodPrice,prodImgPath,prodId}){

  const handleToCart = (id)=>{
    console.log(id)
  }
    return(
        <div className=" flex justify-between items-start flex-col gap-1 ">
       
          <div className=" relative flex  h-[35vh] w-[35vh] lg:h-[70vh] lg:w-[70vh] group">
            <img src={new URL(prodImgPath, import.meta.url).href } alt="" className="h-full w-full object-cover  group-hover:rounded-xl duration-300 ease-in-out " />
            <div onClick={()=>handleToCart(prodId)} className="absolute cursor-pointer flex items-center justify-center rounded-xl h-full w-full group-hover:bg-black group-hover:bg-opacity-50 duration-500 ease-in-out">

            <h1 className=" hidden group-hover:block  font-pop text-white text-xl font-bold  ">ADD TO CART</h1>

            </div>
        </div>
        <div className="flex  items-start justify-start flex-col ">
        <h3 className="font-pop text-lg lg:text-2xl ">
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