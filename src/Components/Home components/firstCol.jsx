import { useContext } from "react";
import ProductCard from "./ProductCard";
import { MainContext } from "../../context/mainContext";

function FirstCol() {
  const { classyProd } = useContext(MainContext);
  return (
    <div className="flex items-center justify-start flex-col p-[1em] lg:p-[3em]">
      <div>
        <h1 className="font-sans font-thin text-xl lg:text-4xl">
          · CLASSY FASHION ·
        </h1>
      </div>

      <div className="w-full  flex justify-center items-center gap-14 p-[1em] lg:p-[3em] flex-wrap">
        {classyProd &&
          classyProd.map((prodInfo) => (
            <ProductCard key={prodInfo._id}
              prodName={prodInfo.productName}
              prodPrice={prodInfo.productPrice}
              prodImgPath={prodInfo.productImgPath}
              prodId = {prodInfo._id}
            />
          ))}
      </div>
    </div>
  );
}

export default FirstCol;
