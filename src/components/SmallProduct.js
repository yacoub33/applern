import React from "react";
import { Link } from "react-router-dom";

function SmallProduct({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="text-center align-middle m-5 w-[250px]">
        <div className="w-[250px] h-[250px]">
          <img
            className="w-full h-full rounded-lg object-scale-down"
            src={product.image}
            alt="/"
          />
        </div>
        <h1 className="mt-2 font-semibold">{product.name}</h1>
        <h1 className="font-semibold text-sm">£{product.price}</h1>
      </div>
    </Link>
  );
}

export default SmallProduct;
