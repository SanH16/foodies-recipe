import Paragraph from "antd/es/typography/Paragraph";
import loginVector from "../assets/img/login-vector.jpg";
import { useForm } from "antd/es/form/Form";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, message } from "antd";
import { auth } from "../configs/firebase";
import { APIauth } from "../apis/APIauth";

export const LoginPages = () => {
  const { form } = useForm();

  const navigate = useNavigate();
  console.log(auth?.currentUser?.email);
  const signIn = async ({ email, password }) => {
    try {
      await APIauth.signInWithCredentials({ email, password });
      message.success("success login");
      navigate("/");
    } catch (error) {
      message.error("login failed, your email or password is incorrect");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await APIauth.signInWithGoogleOAuth();

      message.success("success login");
      navigate("/");
    } catch (error) {
      message.error("login failed, google oauth is failed");
    }
  };
  return (
    <>
      <section className="h-screen">
        <div className="h-full">
          {/* Left */}
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img src={loginVector} className="w-full" alt="Sample image" />
            </div>

            {/* Right */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              {/* <!--Sign in section--> */}
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>
              </div>

              {/* <!-- Separator between social media sign in and email/password sign in --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>

              {/* <!-- Email input --> */}
              <Form form={form} onFinish={signIn}>
                <Row>
                  <Col span={24}>
                    <Form.Item
                      name="email"
                      label="Email"
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
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
                        prefix={<SmileOutlined style={{ fontSize: "20px" }} />}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                {/* <!--Password input--> */}
                <Row>
                  <Col span={24}>
                    <Form.Item
                      name="password"
                      label="Password"
                      labelCol={{ span: 24 }}
                      wrapperCol={{ span: 24 }}
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
                      />
                    </Form.Item>
                  </Col>
                </Row>

                {/* <!-- Login button --> */}
                <div className="text-center lg:text-left">
                  <Row>
                    <Col span={24}>
                      <Button
                        name="signIn"
                        htmlType="submit"
                        type="link"
                        className="inline-block rounded-3xl bg-primary me-5 font-medium bg-blue-300"
                      >
                        SignIn
                      </Button>
                      <Button icon={<GoogleOutlined />} onClick={signInWithGoogle}>
                        Signin with google
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Form>
              {/* <!-- Register link --> */}
              <Paragraph className="mt-2 pt-4 text-sm font-normal">
                Doesn't have an account?
                <Button className="ms-3">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
