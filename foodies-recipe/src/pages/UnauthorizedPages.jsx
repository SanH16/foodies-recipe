import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../components/NotFound";
import { Button } from "antd";

export default function UnauthorizedPages() {
  return (
    <>
      <div className="wrapper">
        <NotFound />
        <Link to="/login">
          <div className="text-notfound">
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl">
              401 | <span className="text-red-600">Unauthorized</span>|
            </h1>

            <Button type="link">Login</Button>
          </div>
        </Link>
      </div>
    </>
  );
}
