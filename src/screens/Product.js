import React from "react";
import Products from "../components/Products";
import Recommended from "../components/Recommended";

function Product({ products }) {
  return (
    <div>
      <Products product={products} />
      <div className=" absolute md:hidden rounded-md h-[60px] w-full bg-gray-600/70 backdrop-blur-sm bottom-5"></div>
      <Recommended />
    </div>
  );
}

export default Product;
