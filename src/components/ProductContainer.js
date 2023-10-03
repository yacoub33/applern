import React from "react";

function ProductContainer({ product }) {
  return (
    <div className="w-full h-[500px] md:rounded-lg">
      <img
        className="w-full h-full rounded-2xl object-scale-down"
        src={product.image}
        alt="/"
      />
    </div>
  );
}

export default ProductContainer;
