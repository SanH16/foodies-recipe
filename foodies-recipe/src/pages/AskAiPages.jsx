import React, { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import Markdown from "react-markdown";
import ButtonFloat from "../components/ButtonFloat";
import AOS from "aos";
import { useForm } from "antd/es/form/Form";
import { SearchOutlined, CheckOutlined, RobotOutlined } from "@ant-design/icons";
import { openai } from "../configs/openai";
import { Content } from "antd/es/layout/layout";
import { Button, Card, Form, Layout, Space, Spin, message } from "antd";
import "aos/dist/aos.css";

const layout = {
  background: "white",
  width: 800,
  margin: "auto",
};

const content = {
  display: "flex",
  textAlign: "center",
  minHeight: 120,
  paddingTop: 40,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "24px",
};

const cardStyle = {
  background: "#C0E8F9",
  width: 800,
  textAlign: "start",
  borderRadius: "16px",
  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
};

function AskAiPages() {
  const [form] = useForm();
  const [responseAI, setResponseAI] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    AOS.init();
  }, []);

  function onFinish(values) {
    console.log(values);
    if (!values.query) {
      messageApi.open({
        type: "error",
        content: "Please input your question",
      });
      return;
    }
    setIsLoading(true);

    openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: values.query }],
        temperature: 1,
      })
      .then((response) => {
        if (response) {
          setResponseAI(response.choices[0].message.content);
          messageApi.open({
            type: "success",
            content: "I have answered your question 🚀",
          });
        } else {
          messageApi.open({
            type: "error",
            content: "Couldn't find an answer to your question. Please try again later.",
          });
        }
        setIsLoading(false);
      });
  }

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      query: "provide recommendations for names of Indonesian recipes",
    });
  };
  return (
    <>
      <Layout style={layout}>
        <Content style={content}>
          <h3>Ask for Recipe Name🚀</h3>
          <RobotOutlined data-aos="zoom-in" data-aos-duration="1000" style={{ fontSize: 80 }} />
          <Form className="form-ai" onFinish={onFinish} form={form}>
            <Form.Item name="query" data-aos="fade-right" data-aos-duration="1000">
              <TextArea type="text" placeholder="provide recommendations for names of Indonesian recipes.." />
            </Form.Item>
            {contextHolder}
            <Space wrap>
              <Button
                className="bg-blue-500 text-white hover:bg-white"
                htmlType="submit"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                disabled={isLoading}
              >
                <SearchOutlined />
                {isLoading ? "Loading..." : "Ask Me"}
              </Button>
              <Button
                type="default"
                htmlType="button"
                shape="round"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
                onClick={onReset}
              >
                Reset
              </Button>
              <Button
                type="link"
                htmlType="button"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="600"
                onClick={onFill}
              >
                Fill form
              </Button>
            </Space>
          </Form>
          <Card
            title="Result"
            bordered={false}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            style={cardStyle}
          >
            {responseAI && !isLoading && (
              <div className="result">
                <CheckOutlined />
                <Markdown>{responseAI}</Markdown>
              </div>
            )}
            {isLoading && (
              <Space size="middle">
                <Spin size="large" />
              </Space>
            )}
          </Card>
          <ButtonFloat />
        </Content>
      </Layout>
    </>
  );
}

export default AskAiPages;
