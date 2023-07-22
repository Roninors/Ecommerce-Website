function ProductCard({prodName, prodPrice,prodImgPath,prodId}){

  const handleToCart = (id)=>{
    console.log(id)
  }
    return(
        <div className=" flex justify-between items-center flex-col gap-5 ">
       
          <div className=" relative flex   h-[35vh] w-[35vh] lg:h-[70vh] lg:w-[70vh] group">
            <img src={new URL(prodImgPath, import.meta.url).href } alt="" className="h-full w-full object-cover  group-hover:rounded-xl duration-300 ease-in-out " />
            <div onClick={()=>handleToCart(prodId)} className="absolute cursor-pointer flex items-center justify-center flex-col rounded-xl h-full w-full group-hover:bg-black group-hover:bg-opacity-50 duration-500 ease-in-out">

            <h1 className=" hidden group-hover:block  font-pop text-white text-xl font-bold   ">VIEW ITEM</h1>
                <p className=" absolute bottom-0 left-0  p-[1.5em] hidden group-hover:block text-center font-pop text-sm hover:underline text-white">Add to cart</p>
            </div>
        </div>
        <div className="flex  items-center justify-center flex-col ">
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