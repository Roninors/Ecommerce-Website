function ProductCard({prodName, prodPrice,prodImgPath}){
    return(
        <div className=" flex justify-between items-center flex-col gap-1">
        <div className=" h-[25vh] w-[25vh] lg:h-[35vh] lg:w-[35vh]">
            <img src={new URL(prodImgPath, import.meta.url).href } alt="" className="h-full w-full object-cover" />
        </div>
        <h3 className="font-pop text-lg ">
          {prodName}
        </h3>

        <p className="font-pop text-sm text-slate-500 mb-3">
          {`$ ${prodPrice}`}
        </p>
        <button className="bg-gray-600 hover:bg-black duration-300 text-white font-pop text-sm p-[.5em] ">
            ADD TO CART
        </button>
    </div>
    )
}

export default ProductCard;