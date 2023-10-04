import React from "react";

function Button({ price, name }) {
  return (
    <div className="border border-slate-700 rounded-xl p-4 hover:bg-gray-100 mt-5 mb-5 hover:cursor-pointer backdrop-blur-sm">
      <div className="flex justify-between">
        <h1 className="hover:cursor-pointer">{name}</h1>
        <h1 className="hover:cursor-pointer text-sm">£{price}</h1>
      </div>
    </div>
  );
}

export default Button;
