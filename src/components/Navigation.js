import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="w-[40%] mt-16 flex justify-around align-middle
    border-[1.5px] border-[#6b4de6] rounded-lg
    "
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
  ? "bg-[#6b4de6] text-white"
  : "bg-gray-200 text-gray-100 hover:text-white active:bg-[#6b4de6] active:text-white"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        Crypto
      </NavLink>

      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-[#6b4de6] text-white"
    : "bg-gray-200 text-gray-100 hover:text-white active:bg-[#6b4de6] active:text-white"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        trending
      </NavLink>

      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full text-base text-center font-nunito m-2.5

${
  isActive
    ? "bg-[#6b4de6] text-white"
    : "bg-gray-200 text-gray-100 hover:text-white active:bg-[#6b4de6] active:text-white"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        saved
      </NavLink>
    </nav>
  );
};

export default Navigation;
