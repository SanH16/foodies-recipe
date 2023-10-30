import React from "react";
import { Link } from "react-router-dom";
import { Button, Result } from "antd";

function LogoutSession() {
  return (
    <div className="pt-10">
      <Result
        status="404"
        title="440 | Login Time Out"
        subTitle="Sorry, the The clien's session has expired and must Login again."
        extra={
          <Link to="/login">
            <Button type="link">Login</Button>
          </Link>
        }
      />
    </div>
  );
}

export default LogoutSession;
