import React from "react";
import { MdNavigateNext } from "react-icons/md";

function Cart() {
  return (
    <div className="w-full max-w-[1200px] mx-auto pt-16 h-screen">
      <div className="px-4 ">
        <h1 className="text-2xl font-semibold mb-4">Cart</h1>
        <div className="grid grid-cols-4 gap-5 mb-8 p-2 border border-b-2 border-r-0 border-l-0 border-t-0 w-full px-2">
          <h1 className=" col-span-2 font-semibold">Item</h1>
          <h1 className="font-semibold">Quantity</h1>
          <h1 className="font-semibold">Price</h1>
        </div>

        <div className="grid grid-cols-4 gap-5 w-full h-[80px] px-2">
          <div className=" col-span-2 font-light flex">
            <img
              className="object-contain w-[60px] md:w-[150px] mr-2"
              src="https://ee.co.uk/medias/iphone-15-pro-max-natural-titanium-desktop-detail-1-WebP-Format-488?context=bWFzdGVyfHJvb3R8Mjc4NTh8aW1hZ2Uvd2VicHxzeXMtbWFzdGVyL3Jvb3QvaDQ1L2gyYi8xMDA3MzgwNDcwMTcyNi9pcGhvbmUtMTUtcHJvLW1heC1uYXR1cmFsLXRpdGFuaXVtLWRlc2t0b3AtZGV0YWlsLTFfV2ViUC1Gb3JtYXQtNDg4fGFkN2Q0YWUwMDQ2NmIxYzg0ZGJjYTY2NTUwM2RjZWI4ZjUxYmJmOTM5NjI4OTEyNTVmY2ZiMDExYTE5NTFmYzg"
              alt=""
            />
            <div>
              <h1 className="font-light">iPhone 15 Pro</h1>
              <h2 className="font-light text-sm justify-center">£999.99</h2>
              <h2 className="text-red-500 text-sm">Remove</h2>
            </div>
          </div>
          <input
            type="number"
            min={0}
            max={99}
            className="font-light border text-center w-12 h-12 rounded-md"
          />
          <h1 className="font-light ">£999.99</h1>
        </div>
      </div>

      {/* <div className="hidden md:block border border-slate-700 rounded-xl p-4 hover:bg-gray-100 mt-5 mb-5 hover:cursor-pointer backdrop-blur-sm max-w-[250px]">
        <h1 className="hover:cursor-pointer text-center">
          Proceed to checkout
        </h1>
      </div> */}

      <div className="fixed md:hidden rounded-md h-[60px] w-full px-6 bottom-5 z-6">
        <div className="bg-gray-600/60 px-4 backdrop-blur-md rounded-xl h-full flex justify-between items-center ">
          <div>
            <h1 className="text-white font-semibold">Proceed to checkout</h1>
          </div>
          <h1 className="rounded-full bg-black/80 text-blue-500 px-4 p-1 font-semibold hover:bg-black/50 ">
            <MdNavigateNext className="text-blue-500  font-light text-2xl" />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
