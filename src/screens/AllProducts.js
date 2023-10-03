import React from "react";
import SmallProduct from "../components/SmallProduct";

function AllProducts({ products }) {
  return (
    <div className="w-full pt-10">
      <div className="max-w-[1200px] mx-auto items-center justify-center flex flex-wrap">
        {products.map((product) => (
          <SmallProduct product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
