import { Button, Col, Form, Input, Row, message } from "antd";
import { auth } from "../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";
import signupVector from "../assets/img/signup-vector.jpg";

export const SignUpPages = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);
  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      message.success("successfully created account🚀");
    } catch (err) {
      message.error("error creating account");
      console.error(err);
    }
  };
  return (
    <div className="mx-auto w-[640px] mt-20">
      <div className="ms-[150px] md:w-9/12 lg:w-6/12 xl:w-6/12">
        <img src={signupVector} className="w-full rounded-3xl" alt="Sample image" />
      </div>
      <Form>
        <Row>
          <Col span={24}>
            <Form.Item
              name="email"
              label="Email"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 18 }}
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please input valid email address | @gmail.com",
                },
                { whitespace: true, message: "Email must be contain." },
              ]}
            >
              <Input
                className="rounded-3xl py-2 mb-2"
                placeholder="Email.."
                onChange={(e) => setEmail(e.target.value)}
                prefix={<SmileOutlined style={{ fontSize: "20px" }} />}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* <Input placeholder="Email.."  /> */}
        <Row>
          <Col span={24}>
            <Form.Item
              name="password"
              label="Password"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 18 }}
              rules={[
                {
                  required: true,
                  message: "Input your password",
                },
                { whitespace: true, message: "Password must be contain." },
              ]}
            >
              <Input
                className="rounded-3xl py-2"
                prefix={<SmileOutlined style={{ fontSize: "20px" }} />}
                type="password"
                placeholder="Password.."
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Link to="/login">
          <Button onClick={createAccount} className="rounded-2xl">
            SignUp
          </Button>
        </Link>
        <Link to="/login">
          <Button className="ms-8 rounded-2xl">Back</Button>
        </Link>
      </Form>
    </div>
  );
};
