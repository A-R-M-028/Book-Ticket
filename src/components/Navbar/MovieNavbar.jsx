import React from "react";
import {
  BiChevronRight,
  BiChevronLeft,
  BiChevronDown,
  BiMenu,
  BiShareAlt,
} from "react-icons/bi";
import { BsSearchHeartFill } from "react-icons/bs";

const NavAll = () => {
  return (
    <div className="text-white flex items-center justify-between">
      <div>
        <h3 className="text-xl font-bold">It All Starts Here!</h3>
      </div>
      <div className="text-white w-8 h-8">
        <BiShareAlt className="w-full h-full" />
      </div>
    </div>
  );
};


const MovieNavbar = () => {
  return (
    <nav className="bg-navCol-900  p-4">
      <div className="md:hidden">
        <NavAll /> {/* Mobile screen */}
      </div>
      <div className="hidden md:block lg:hidden">
        <NavAll /> {/* Tablet screen */}
      </div>
      <div className="hidden lg:block">
        <NavAll /> {/* Desktop screen */}
      </div>
    </nav>
  );
};

export default MovieNavbar;
