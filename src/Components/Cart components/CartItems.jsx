function CartItems ({userCart}){

        const handleDelete = (id)=>{
            console.log(id);
        }
    return (
        <div className="flex flex-col p-10 gap-5 w-full">
            {userCart && userCart.cart.map((cartItem,i)=>(
                <div className="flex justify-between items-center flex-col p-5 gap-5  lg:flex-row" key={i} >
                    <div className="w-[40vw] ">
                    <img  src={new URL(cartItem.productImgPath, import.meta.url)} alt=""  className=" w-full h-full object-contain object-center"/>
                    </div>
               

                <div className="flex w-full flex-col justify-between text-center border-b  border-b-gray-300">
                <div className=" w-full flex flex-col justify-between  items-center font-pop  lg:flex-row ">
                        <div className=" flex flex-col justify-center items-start">
                            <h1 className="text-lg">{cartItem.productName}</h1>
                      
                            </div>

                            <div className="flex  items-center justify-center my-2 gap-2">
                                <h1 >Quantity</h1>
                                <div className="  px-[.5em] border border-gray-300">
                                    {cartItem.quantity}
                                </div>
                            </div>

                            <h1>$ {cartItem.productPrice}</h1>
                            
                    
                   </div>

                  
                        <div className="w-full flex justify-center items-center my-2  lg:justify-start lg:items-start ">
                        <p className="text-sm text-gray-500">SHIA</p>
                       
                        </div>
                        <div className="w-full flex flex-col  items-center justify-center  lg:justify-between lg:flex-row lg:mt-20">
                            <p className="font-pop  text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <img  src={new URL("../../pictures/close.png", import.meta.url)} alt="close"  className="w-5 cursor-pointer my-5 " onClick={()=>handleDelete(cartItem.productId)}/>
                       
                        </div>
                       
                </div>
           
                   
                   </div>
                
            ))}
            
        </div>
    )
}

export default CartItems;