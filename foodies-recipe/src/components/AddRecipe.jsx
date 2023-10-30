import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { APIrecipe } from "../apis/APIrecipe";
import { QuestionCircleOutlined, SlackOutlined } from "@ant-design/icons";

const tags = [
  "Breakfast",
  "Brunch",
  "Lunch",
  "Dinner",
  "Dessert",
  "Appetizer",
  "Snack",
  "Soup",
  "Salad",
  "Main Course",
];

function AddRecipe() {
  const [form] = Form.useForm();

  const options = [];

  for (let i = 0; i < tags.length; i++) {
    options.push({
      label: tags[i],
      value: tags[i],
    });
  }

  const onFinish = async (recipe) => {
    try {
      APIrecipe.addRecipe(recipe);
      message.success("add recipe added successful");
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error("something went wrong");
    }
  };
  return (
    <Form form={form} onFinish={onFinish} name="control-hooks" className="mt-[10%]" style={{ maxWidth: 600 }}>
      <Form.Item
        name="title"
        rules={[
          {
            required: true,
            message: "Please input recipes title",
          },
          { whitespace: true, message: "Recipe title must be contain." },
        ]}
      >
        <Input
          type="text"
          className="rounded-3xl py-2 mb-2"
          placeholder="title"
          prefix={<SlackOutlined style={{ fontSize: "20px" }} />}
        ></Input>
      </Form.Item>
      <Form.Item
        name="description"
        rules={[
          {
            required: true,
            message: "Please input description",
          },
          { whitespace: true, message: "Recipe description must be contain." },
        ]}
      >
        <Input
          type="text"
          className="rounded-3xl py-2 mb-2"
          placeholder="description"
          prefix={<SlackOutlined style={{ fontSize: "20px" }} />}
        ></Input>
      </Form.Item>
      <Form.Item name="instructions">
        <TextArea placeholder="instructions" prefix={<QuestionCircleOutlined style={{ fontSize: "20px" }} />} />
      </Form.Item>
      <Form.Item name="tags">
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select tags"
          options={options}
        />
      </Form.Item>
      {/* <Upload {...props}>
				<Button icon={<UploadOutlined />}>Select image</Button>
			</Upload> */}
      <Button htmlType="submit">Send</Button>
    </Form>
  );
}

export default AddRecipe;
