function Cart(){
    return(
        <div className="w-full p-5 flex flex-col items-center justify-center border ">

                <div className="w-full flex justify-between flex-col p-10 sm:flex-row">
                    <div className="flex items-center justify-center gap-2">

                    <h1 className="font-pop text-lg font-bold">Your Cart</h1>
                    <p className="font-pop text-sm">3 items</p>

                    </div>

                    <div className="flex items-center justify-center gap-2">
                 
                    <p className="font-pop text-sm">Total</p>
                    <h1 className="font-pop text-lg">$ <span className="font-bold">4,190</span></h1>
            
                    </div>
        
                </div>

                <div></div>
        </div>
    )
}

export default Cart;