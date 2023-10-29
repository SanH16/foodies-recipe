import React from "react";
import logo from "../../assets/icon/foodies-icon-new.svg";
import { Tooltip } from "antd";

export default function Navbar() {
  return (
    <>
      <nav class=" flex justify-center h-[100px] ">
        <div class="w-[1240px] flex items-center justify-between">
          <div class="flex items-center w-[840px] justify-between ">
            <img src={logo} alt="" width="186" height="42"></img>
            <div class="flex w-[500px] justify-between">
              <p class="text-purple-700">Home</p>
              <p>Recipes</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
          <div class="w-[255px] flex justify-between">
            <button class="px-[36px] py-[10px] rounded-[47px]">
              <p class="text-purple-700">Sign in</p>
            </button>
            <button class="bg-purple-600 px-[36px] py-[10px] rounded-[47px]">
              <p class="text-white">Register</p>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
