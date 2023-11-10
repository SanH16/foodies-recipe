import React from "react";
import { Space, FloatButton } from "antd";
import { CommentOutlined, UpCircleOutlined, SmileOutlined } from "@ant-design/icons";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ButtonFloat() {
  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 24 }}
        icon={<UpCircleOutlined />}
        tooltip={<div>Navigate</div>}
      >
        <Space wrap>
          <Link to="/ask-ai">
            <FloatButton icon={<CommentOutlined />} tooltip={<div>Ask AI</div>} />
          </Link>
          <Link to="/recipes">
            <FloatButton icon={<IoFastFoodOutline />} tooltip={<div>Recipes Pages</div>} />
          </Link>
        </Space>
      </FloatButton.Group>
    </>
  );
}
