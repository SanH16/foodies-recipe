import React, { useEffect } from "react";

import imageVector from "../assets/img/foodies-vector.png";

const colors = {
  color: "#5c67e1",
};

function HomePages() {
  return (
    <>
      <main id="home" className="w-full grid justify-between">
        <div className="w-full lg:w-full md:w-3/6 sm:w-2/3 p-5">
          <h1 className="tripify lg:text-5xl md:text-3xl sm:text-2xl font-bold mb-4">
            Cooking recipe inspiration for everyone <span style={colors}>Foodies.</span>
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            Discover the world like never before with our innovative travel app.
          </p>
          <button
            id="scroll-down"
            type="button"
            className="bg-purple-400 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-[10px]"
          >
            Discover Now
          </button>
        </div>
        <div className="w-full lg:w-7/12">
          <img src={imageVector} alt="gambar" />
        </div>
      </main>
    </>
  );
}

export default HomePages;
