import React from "react";

function Button({ price }) {
  return (
    <div className="border border-slate-700 rounded-lg p-8 hover:bg-gray-100 mt-5 mb-5 hover:cursor-pointer">
      <h1 className="hover:cursor-pointer">Add to cart.</h1>
      <h1 className="hover:cursor-pointer text-sm">{price}</h1>
    </div>
  );
}

export default Button;
