import React from "react";
import { MdNavigateNext } from "react-icons/md";

function Cart({ cart, changeQuantity }) {
  return (
    <div className="w-full max-w-[1200px] mx-auto pt-16 h-screen">
      <div className="px-4 ">
        <h1 className="text-2xl font-semibold mb-4">Cart</h1>
        <div className="grid grid-cols-4 gap-4 mb-8 p-2 border border-b-2 border-r-0 border-l-0 border-t-0 w-full px-2">
          <h1 className=" col-span-2 font-semibold">Item</h1>
          <h1 className="font-semibold">Quantity</h1>
          <h1 className="font-semibold">Price</h1>
        </div>

        {cart.map((item) => {
          return (
            <div className="grid grid-cols-4 gap-4 w-full h-[80px] px-2 mb-16">
              <div className=" col-span-2 font-light flex">
                <img
                  className="object-contain w-[60px] md:w-[150px] mr-2"
                  src={item.image}
                  alt=""
                />
                <div>
                  <h1 className="font-light text-sm">{item.name}</h1>
                  <h2 className="font-light text-xs justify-center">
                    £{item.price}
                  </h2>
                  <h2
                    onClick={() => alert("Feature not added yet")}
                    className="text-red-500 text-xs hover:cursor-pointer"
                  >
                    Remove
                  </h2>
                </div>
              </div>
              <input
                type="number"
                min={0}
                max={99}
                value={item.quantity}
                className="font-light border text-center w-12 h-12 rounded-md"
                onChange={(event) => changeQuantity(item, event.target.value)}
              />
              <h1 className="font-light">£{item.price}</h1>
            </div>
          );
        })}
      </div>

      <div
        onClick={() => alert("Feature not added yet")}
        className="fixed md:hidden rounded-md h-[60px] w-full px-6 bottom-5 z-6"
      >
        <div className="bg-gray-600/60 px-4 backdrop-blur-md rounded-xl h-full flex justify-between items-center ">
          <div>
            <h1 className="text-white font-semibold">Proceed to checkout</h1>
          </div>
          <h1 className="rounded-full bg-black/80 text-blue-500 px-4 p-1 font-semibold hover:bg-black/50 ">
            <MdNavigateNext className="text-blue-500  font-light text-2xl" />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
