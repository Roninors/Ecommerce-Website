import ProductCard from "./ProductCard";


function FirstCol(){
    return(
        <div className="flex items-center justify-start flex-col p-[1em] lg:p-[3em]">
            <div>
            <h1 className="font-sans font-thin text-xl lg:text-3xl">· CLASSY FASHION ·</h1>
            </div>
            
          <div className="w-full  flex justify-center items-center gap-14 p-[1em] lg:p-[3em] flex-wrap">
                <ProductCard prodName={"Leather Bag"} prodPrice={"99.00"} prodImgPath={'../../pictures/brown-bag.jpg'}/>
                <ProductCard prodName={"Aviator Sunglass"} prodPrice={"99.00"} prodImgPath={'../../pictures/brown-glasses.jpg'}/>
                <ProductCard prodName={"Leather Belt"} prodPrice={"99.00"} prodImgPath={'../../pictures/leather-belt.jpg'}/>
                <ProductCard prodName={"Leather Watch"} prodPrice={"99.00"} prodImgPath={'../../pictures/watch.jpg'}/>
          </div>
                
            
        </div>
               
    )
}



export default FirstCol;