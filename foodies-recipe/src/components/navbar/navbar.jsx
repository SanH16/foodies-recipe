import React from "react";
import logo from "../../assets/icon/foodies-icon-new.svg";
import { Tooltip } from "antd";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className=" flex justify-center h-[100px] ">
        <div className="lg:w-[1240px] md:w-[768px] sm:w-[640px] xs:w-[360px] flex items-center justify-between">
          <div className="flex items-center lg:w-[840px] sm:w-[460px] justify-between ">
            <Link to="/">
              <img src={logo} alt="logo" width="186px" height="42px" />
            </Link>
            <div className="flex lg:w-[500px] sm:w-[350px] justify-between">
              <Link to="/">
                <p className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-purple-700 text-xs">Home</p>
              </Link>
              <Link to="/recipes">
                <p className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-xs">Recipes</p>
              </Link>
              <p className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-xs">About</p>
              <p className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-xs">Contact</p>
            </div>
          </div>
          <div className="lg:w-[255px] sm:w-[150px] flex justify-between">
            {/* <button className="lg:px-[36px] lg:py-[10px] lg:rounded-[47px] sm:px-[16px] sm:py-[6px]">
              <p className="text-purple-700">Sign in</p>
            </button> */}
            <button className="bg-purple-600 hover:bg-[#B4310A] lg:px-[36px] lg:py-[10px] lg:rounded-[47px] sm:px-[20px] sm:py-[8px] sm:rounded-[20px]">
              <p className="text-white lg:text-[18px] md:text-[14px] sm:text-[12px] text-xs">Login</p>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
