import React, { useState } from "react";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";

function Products({ product, addToCart, cart }) {
  const { id } = useParams();
  const item = product.find((product) => +id === product.id);

  const [added, setAdded] = useState(false);

  function addItemToCart(item) {
    setAdded(true);
    addToCart(item);
  }

  return (
    <div className="w-full pt-16  ">
      <h1 className="px-6 font-semibold text-4xl mx-auto max-w-[1400px] mb-8">
        Buy {item.name}
      </h1>
      <div className="px-6 mx-auto max-w-[1400px] grid md:grid-cols-3 gap-5 items-center">
        <div className="md:col-span-2">
          <div className="w-full h-[500px] md:rounded-lg">
            <img
              className="w-full h-full rounded-2xl object-scale-down"
              src={item.image}
              alt="/"
            />
          </div>
        </div>
        <div className="mx-auto">
          <h1 className="font-semibold text-4xl">{item.name}</h1>
          <p className=" font-medium mt-2 text-gray-700 text-1xl">
            {item.description}
          </p>
          {added ? (
            <Link to={"/cart"}>
              <h1 className="hidden md:block rounded-md hover:cursor-pointer bg-black/50 text-blue-100 px-4 p-4 mt-4 font-semibold hover:bg-black/50 border border-gray-950">
                CHECKOUT
              </h1>
            </Link>
          ) : (
            <div
              onClick={() => addItemToCart(item)}
              className="hidden md:block  rounded-md hover:cursor-pointer bg-black/80 text-blue-500 px-4 p-4 mt-4 font-semibold hover:bg-black/10 border border-gray-950 "
            >
              <h1>ADD TO CART</h1>
              <h1 className="text-sm">£{item.price}</h1>
            </div>
          )}
        </div>
      </div>

      <div className="fixed md:hidden rounded-md h-[60px] w-full px-6 bottom-5 z-6">
        <div className="bg-gray-600/60 px-4 backdrop-blur-md rounded-xl h-full flex justify-between items-center ">
          <div>
            <h1 className="text-white font-semibold">{item.name}</h1>
            <h1 className="text-white font-semibold text-xs">£{item.price}</h1>
          </div>
          {added ? (
            <Link to={"/cart"}>
              <h1 className="rounded-full bg-black/50 text-blue-100 px-4 p-1 font-semibold hover:bg-black/50 border border-white">
                CHECKOUT
              </h1>
            </Link>
          ) : (
            <h1
              onClick={() => addItemToCart(item)}
              className="rounded-full bg-black/80 text-blue-500 px-4 p-1 font-semibold hover:bg-black/50 "
            >
              ADD TO CART
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
