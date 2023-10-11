import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function LargeHomeContainer({ title, subtitle, image, textcolor, trueImage }) {
  const textStyle = {
    color: textcolor || "white",
  };

  return (
    <div className="w-full h-[550px] md:h-[700px] bg-black">
      <img className="w-full h-full object-cover" src={image} alt="/" />
      <h1
        style={textStyle}
        className="relative inset-0 translate-y-[-470px] md:translate-y-[-600px] flex items-center justify-center text-white text-3xl md:text-5xl font-semibold"
      >
        {title}
      </h1>

      <h2
        style={textStyle}
        className="relative inset-0 translate-y-[-460px] md:translate-y-[-590px] flex items-center justify-center text-white text-lg md:text-2xl font-light"
      >
        {subtitle}
      </h2>

      <div className="relative inset-0 translate-y-[-450px] md:translate-y-[-570px] flex items-center justify-center text-white text-md md:text-xl font-light">
        <Link to="allproducts">
          <h2 className="text-blue-500 hover:cursor-pointer flex items-center">
            All Products <AiOutlineRight className="ml-2" />
          </h2>
        </Link>
        {/* <h2 className="text-blue-500 mr-10 hover:cursor-pointer flex items-center">
          Buy <AiOutlineRight className="ml-2" />
        </h2> */}
      </div>
    </div>
  );
}

export default LargeHomeContainer;
