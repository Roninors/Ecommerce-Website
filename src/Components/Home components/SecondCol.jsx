import ProductCard from "./ProductCard";


function SecondCol(){
    return(
        <div className="flex items-center justify-start flex-col p-[1em] lg:p-[3em]">
        <div>
        <h1 className="font-sans font-thin text-xl lg:text-3xl">· BREATHABLE WARDROBE ·</h1>
        </div>
        
      <div className="w-full  flex justify-center items-center gap-14 p-[1em] lg:p-[3em] flex-wrap">
            <ProductCard prodName={"Denim Cap"} prodPrice={"99.00"} prodImgPath={'../../pictures/denim-cap.jpg'}/>
            <ProductCard prodName={"Cool Blue T-Shirt"} prodPrice={"99.00"} prodImgPath={'../../pictures/blue-t-shirt.jpg'}/>
            <ProductCard prodName={"Isolated Sweatshirt"} prodPrice={"99.00"} prodImgPath={'../../pictures/sweater-isolated.jpg'}/>
            <ProductCard prodName={"Denim Jacket"} prodPrice={"99.00"} prodImgPath={'../../pictures/jeans-shirt.jpg'}/>
      </div>
            
        
    </div>
               
    )
}



export default SecondCol;