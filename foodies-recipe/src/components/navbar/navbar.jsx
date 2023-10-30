import React from "react";
import logo from "../../assets/icon/foodies-icon-new.svg";
import { Image, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { authServices } from "../../configs/auth";
import { auth } from "../../configs/firebase";

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
              <Link to="/add-recipes">
                <p className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-xs">Add Recipes</p>
              </Link>
              <Link to="/searched">
                <p className="lg:text-[18px] md:text-[16px] sm:text-[14px] text-xs">Cuisine</p>
              </Link>
            </div>
          </div>

          <div className="lg:w-[255px] sm:w-[150px] flex justify-between">
            {auth.currentUser && (
              <>
                <Image width={80} src={auth.currentUser.photoURL} />
                <span>{auth.currentUser.displayName}</span>
              </>
            )}

            {!authServices.isAuthorized() ? (
              <Link to="/login">
                <button className="bg-purple-600 hover:bg-[#B4310A] lg:px-[36px] lg:py-[10px] lg:rounded-[47px] sm:px-[20px] sm:py-[8px] sm:rounded-[20px]">
                  <p className="text-white lg:text-[18px] md:text-[14px] sm:text-[12px] text-xs font-medium">Login</p>
                </button>
              </Link>
            ) : (
              <button
                onClick={() => authServices.logOut()}
                className="bg-purple-600 hover:bg-[#B4310A] lg:px-[36px] lg:py-[10px] lg:rounded-[47px] sm:px-[20px] sm:py-[8px] sm:rounded-[20px]"
              >
                <p className="text-white lg:text-[18px] md:text-[14px] sm:text-[12px] text-xs font-medium">Logout</p>
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
