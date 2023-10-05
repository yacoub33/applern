import React from "react";
import Products from "../components/Products";
import Recommended from "../components/Recommended";

function Product({ products, addToCart }) {
  return (
    <div>
      <Products product={products} addToCart={addToCart} />
      <Recommended products={products} />
    </div>
  );
}

export default Product;
