import React, { useEffect, useState } from "react";
import { BiChevronRight, BiChevronDown, BiMenu } from "react-icons/bi";
import { BsSearchHeartFill } from "react-icons/bs";

const NavSm = () => {
  return (
    <div className="text-white flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold">It All Starts Here!</h3>
        {/* Inline property -> span */}
        <span className="text-gray-400 text-sm flex items-center">
          Kolkata <BiChevronRight />
        </span>
      </div>
      <div className="text-white w-8 h-8">
        <BsSearchHeartFill className="w-full h-full" />
      </div>
    </div>
  );
};

const NavMd = () => {
  return (
    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
      <BsSearchHeartFill className="" />
      <input
        type="search"
        className="w-full focus:outline-none"
        placeholder="Search for movies, events, plays, sports and activities"
      />
    </div>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="container mx-auto px-3 py-2 flex items-center justify-between">
        <div className="flex items-center w-1/2">
          <div className="w-12 h-12 mx-5">
            <img
              src="data:image/png;base64,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"
              alt="Logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
            <BsSearchHeartFill className="" />
            <input
              type="search"
              className="w-full focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <span className="text-gray-400 text-sm flex items-center hover:text-white cursor-pointer">
              Kolkata <BiChevronDown />
            </span>
          </div>
          <div>
            <button className="bg-red-600 text-sm rounded px-2 py-1">
              Sign In
            </button>
          </div>
          <div className="w-8 h-8">
            <BiMenu className="w-full h-full text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-navCol-900 p-4">
      <div className="md:hidden">
        <NavSm /> {/* Mobile screen */}
      </div>
      <div className="hidden md:flex lg:hidden">
        <NavMd /> {/* Tablet screen */}
      </div>
      <div className="hidden lg:flex">
        <NavLg /> {/* Desktop screen */}
      </div>
    </nav>
  );
};

export default Navbar;
