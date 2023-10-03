import React, { useState } from "react";
import { AiFillApple, AiOutlineClose } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setNav(!nav);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="hidden md:flex h-[40px] w-full fixed z-10 bg-[#1d1d1f]/70 items-center">
        <ul className="flex max-w-[1200px] mx-auto items-center">
          <Link to="/">
            <AiFillApple
              size={20}
              className="text-white/70 font-light mr-10 text-xs hover:cursor-pointer"
            />
          </Link>
          <li className="text-white/70 font-light mr-10 text-xs hover:cursor-not-allowed">
            Mac
          </li>

          <li className="text-white/70 font-light mr-10 text-xs hover:cursor-not-allowed">
            iPad
          </li>
          <li className="text-white/70 font-light mr-10 text-xs hover:cursor-not-allowed">
            iPhone
          </li>
          <li className="text-white/70 font-light mr-10 text-xs hover:cursor-not-allowed">
            Watch
          </li>
          <li className="text-white/70 font-light mr-10 text-xs hover:cursor-not-allowed">
            AirPods
          </li>
          <Link to="AllProducts">
            <li className="text-white/70 font-light mr-10 text-xs hover:cursor-pointer">
              All Products
            </li>
          </Link>
          <BsBag
            size={15}
            className="text-white/70 font-light mr-5 text-sm hover:cursor-pointer"
          />
        </ul>
      </div>

      <div className="h-[50px] w-full fixed z-10 bg-[#1d1d1f]/90 flex md:hidden justify-between items-center px-4">
        <Link to="/">
          <AiFillApple
            size={20}
            className="text-white/70 font-light text-xs hover:cursor-pointer"
          />
        </Link>
        <div className="flex">
          <BsBag
            size={15}
            className="text-white/70 font-light text-sm hover:cursor-pointer mr-5"
          />
          <div className="md:hidden">
            {!nav ? (
              <HiMenuAlt4
                onClick={handleClick}
                size={20}
                className="text-white/70 font-light text-sm hover:cursor-pointer"
              />
            ) : (
              <AiOutlineClose
                onClick={handleClose}
                size={20}
                className="text-white/70 font-light text-sm hover:cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "fixed top-[50px] left-0 right-0 bg-[#1d1d1f] w-full h-screen px-8 py-8 text-left z-10 "
        }
      >
        <Link to="/">
          <li
            onClick={handleClose}
            className="w-full mb-4 text-2xl font-semibold text-white"
          >
            Home
          </li>
        </Link>
        <li
          onClick={handleClose}
          className="w-full mb-4 text-2xl font-semibold text-white"
        >
          Mac
        </li>
        <li
          onClick={handleClose}
          className="w-full mb-4 text-2xl font-semibold text-white"
        >
          iPad
        </li>
        <li
          onClick={handleClose}
          className="w-full mb-4 text-2xl font-semibold text-white"
        >
          iPhone
        </li>
        <li
          onClick={handleClose}
          className="w-full mb-4 text-2xl font-semibold text-white"
        >
          Watch
        </li>
        <li
          onClick={handleClose}
          className="w-full mb-4 text-2xl font-semibold text-white"
        >
          AirPods
        </li>
        <Link to="AllProducts">
          <li
            onClick={handleClose}
            className="w-full mb-4 text-2xl font-semibold text-white"
          >
            All Products
          </li>
        </Link>
      </ul>
    </>
  );
}

export default Navbar;
