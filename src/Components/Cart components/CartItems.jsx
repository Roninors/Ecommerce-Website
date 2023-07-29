function CartItems ({userCart}){

    return (
        <div className="flex flex-col p-10 gap-5 w-full">
            {userCart && userCart.cart.map((cartItem,i)=>(
                <div className="flex justify-between items-center flex-col p-5  border-b  border-b-gray-300 lg:flex-row" key={i} >
                    <div className="w-[40vw] h-[40vh]">
                    <img  src={new URL(cartItem.productImgPath, import.meta.url)} alt=""  className=" w-full h-full object-contain object-center"/>
                    </div>
               

                <div className="flex w-full flex-col justify-between  text-center">
                <div className=" w-full flex flex-col justify-between items-center font-pop  lg:flex-row ">
                        <div className="flex flex-col justify-center items-start">
                            <h1 className="text-lg">{cartItem.productName}</h1>
                      
                            </div>

                            <div className="flex  items-center justify-center gap-2">
                                <h1 >Quantity</h1>
                                <div className=" p-[.4em] border">
                                    {cartItem.quantity}
                                </div>
                            </div>

                            <h1>$ {cartItem.productPrice}</h1>
                            
                    
                   </div>

                  
                        <div className="w-full flex justify-start items-start">
                        <p className="text-sm text-gray-400">SHIA</p>
                       
                        </div>
                        <div className="w-full flex items-center justify-center lg:justify-end lg:items-end lg:mt-20">
                        <img  src={new URL("../../pictures/close.png", import.meta.url)} alt="close"  className="w-5"/>
                       
                        </div>
                       
                </div>
           
                   
                   </div>
                
            ))}
            
        </div>
    )
}

export default CartItems;