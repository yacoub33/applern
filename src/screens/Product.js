import React from "react";
import Products from "../components/Products";
import Recommended from "../components/Recommended";

function Product({ products }) {
  return (
    <div>
      <Products product={products} />
      <Recommended products={products} />
    </div>
  );
}

export default Product;
