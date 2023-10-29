import React from "react";
import NotFound from "../components/NotFound";
import { Link } from "react-router-dom";

function NotFoundPages() {
  return (
    <>
      <div className="wrapper">
        <NotFound />
        <Link to={"/"}>
          <div className="text-notfound">
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl">
              404 | <span className="text-red-600">Not </span>Found
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default NotFoundPages;
