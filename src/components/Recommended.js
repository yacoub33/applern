import React from "react";
import LargeHomeContainer from "./LargeHomeContainer";
import { useParams } from "react-router-dom";
import SmallProduct from "./SmallProduct";

function Recommended({ products }) {
  const { id } = useParams();
  const item = products.find((product) => id == product.id);
  const filteredProducts = products.filter((product) => id != product.id);

  return (
    <div className="w-full mt-8">
      <div className="mx-auto max-w-[1400px] pt-8 pb-8">
        <h1 className=" font-semibold text-3xl text-center">Recommended</h1>
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex">
            {filteredProducts.slice(0, 5).map((product) => (
              <div key={product.id} className="flex-shrink-0">
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
