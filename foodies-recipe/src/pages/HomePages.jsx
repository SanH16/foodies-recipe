import React from "react";

import imageVector from "../assets/img/foodies-vector.png";
import { Link } from "react-router-dom";
import ButtonFloat from "../components/ButtonFloat";

function HomePages() {
  return (
    <>
      <main id="home" className="w-full grid justify-between">
        <div className="w-full lg:w-full md:w-3/6 sm:w-2/3 p-5">
          <h1 className="container lg:text-5xl md:text-3xl sm:text-2xl font-bold mb-4 text-[#494949]">
            Cooking recipe inspiration for everyone <br /> <span className="text-[#5c67e1]">Foodies.</span>
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            This product was created with the aim of providing a place to find information and share food recipes for
            culinary lovers and people who want to learn to cook. The website can display Food Recipe information such
            as images, names and descriptions of Food Recipes and OpenAI to ask for Recipes name.
          </p>
          <Link to="/recipes">
            <button
              id="scroll-down"
              type="button"
              className="bg-purple-400 hover:bg-[#B4310A] text-white font-bold py-2 px-4 rounded-[10px]"
            >
              Get Recipes
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-7/12">
          <img src={imageVector} alt="gambar" />
        </div>
      </main>
      <ButtonFloat />
    </>
  );
}

export default HomePages;
