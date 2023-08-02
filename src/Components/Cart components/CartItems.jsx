import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../context/mainContext";

function CartItems({ userCart }) {
  const navigate = useNavigate();
  const { token, setCart } = useContext(MainContext);

  const handleDelete = async (productId, email) => {
    try {
      const response = await fetch("http://localhost:4000/user/deleteItem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, email }),
      });

      if (!response.ok) {
        throw new Error("failed to delete item cart");
      }
      const json = await response.json();
      setCart(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col p-10 gap-5 w-full">
      {userCart &&
        userCart?.cart?.map((cartItem, i) => (
          <div
            className="flex justify-between items-center flex-col p-5 gap-5  lg:flex-row"
            key={i}
          >
            <div className="relative  w-[40vh] h-[40vh] group ">
              <div
                onClick={() => navigate(`/product/${cartItem.productId}`)}
                className="group-hover:bg-black group-hover:bg-opacity-50 duration-500 ease-in-out  rounded-md  absolute flex justify-center items-center w-full h-full  cursor-pointer"
              >
                <h1 className="font-pop text-white hidden group-hover:block duration-500 ease-in-out  ">
                  View product
                </h1>
              </div>
              <img
                src={new URL(cartItem.productImgPath, import.meta.url)}
                alt=""
                className=" w-full h-full object-contain object-center  "
              />
            </div>

            <div className="flex w-full flex-col justify-between text-center border-b  border-b-gray-300">
              <div className=" w-full flex flex-col justify-between  items-center font-pop  lg:flex-row ">
                <div className=" flex flex-col justify-center items-start">
                  <h1 className="text-lg">{cartItem.productName}</h1>
                </div>

                <div className="flex  items-center justify-center my-2 gap-2">
                  <h1>Quantity</h1>
                  <div className="  px-[.5em] border border-gray-300">
                    {cartItem.quantity}
                  </div>
                </div>

                <h1>$ {cartItem.productPrice * cartItem.quantity}</h1>
              </div>

              <div className="w-full flex justify-center items-center my-2  lg:justify-start lg:items-start ">
                <p className="text-sm text-gray-500">SHIA</p>
              </div>
              <div className="w-full flex flex-col  items-center justify-center  lg:justify-between lg:flex-row lg:mt-20">
                <p className="font-pop  text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <img
                  src={new URL("../../pictures/close.png", import.meta.url)}
                  alt="close"
                  className="w-5 cursor-pointer my-5 "
                  onClick={() => handleDelete(cartItem.productId, token.email)}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CartItems;
