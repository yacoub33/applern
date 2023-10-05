import React from "react";
import ProductContainer from "./ProductContainer";
import Button from "./Button";
import { useParams } from "react-router-dom";

function Products({ product }) {
  const { id } = useParams();
  const item = product.find((product) => id == product.id);

  console.log(item);

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
          <Button price={item.price} name={item.name} />
        </div>
      </div>
      <div className="fixed md:hidden rounded-md h-[60px] w-full px-6 bottom-5 z-6">
        <div className="bg-gray-600/60 px-4 backdrop-blur-md rounded-xl h-full flex justify-between items-center ">
          <div>
            <h1 className="text-white font-semibold">{item.name}</h1>
            <h1 className="text-white font-semibold text-xs">£{item.price}</h1>
          </div>
          <h1 className="rounded-full bg-black/80 text-blue-500 px-4 p-1 font-semibold hover:bg-black/50 ">
            BUY
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Products;
