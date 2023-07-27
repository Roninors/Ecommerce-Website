function ProductInfo({ product }) {
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
          className="font-pop border text-center border-black w-[20%] rounded-lg px-[.5em] outline-none text-black"
        />
      </div>

      <button className="font-pop text-lg p-[.5em] rounded-xl hover:bg-gray-500 duration-300 bg-black text-white mb-20">
        ADD TO CART
      </button>
    </>
  );
}

export default ProductInfo;
