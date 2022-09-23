import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { uid } from "uid";

const AntFormValidation = () => {
  const [data, setData] = useState([]);
  console.log("whole data", data);
  //   console.log("DOB", JSON.stringify(data.dob));
  //   console.log(localStorage.setItem("data", JSON.stringify(data)));

  return (
    <div>
      <Form
        autoCapitalize="true"
        // autoComplete="off"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        onFinish={(values) => {
          const setYourData = [...data, { ...values, id: uid() }];
          setData(setYourData);
        }}
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            {
              required: true,
              message: "This Field is Required!",
            },
            {
              whitespace: true,
            },
            { min: 3, message: "Name must contain minimum 3 characters" },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your fullName"></Input>
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "This Field is Required!",
            },
            { whitespace: true },
            { type: "email", message: "Email is not valid" },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your email" type="email"></Input>
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "This Field is Required!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your password"></Input.Password>
        </Form.Item>

        <Form.Item
          name="confirmpassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "This Field is Required!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "Confirm Password is not matching with the Password!"
                );
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your Confirm password"></Input.Password>
        </Form.Item>

        <Form.Item name="gender" label="Gender" requiredMark="optional">
          <Select allowClear>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="dob"
          label="DOB"
          rules={[
            {
              required: true,
              message: "This Field is Required!",
            },
          ]}
          hasFeedback
        >
          <DatePicker picker="date" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="website"
          label="Website"
          rules={[
            {
              required: true,
              message: "This Field is Required!",
            },
            { type: "url", message: "Url is not valid" },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your website"></Input>
        </Form.Item>

        <Form.Item
          name="agreement"
          wrapperCol={{ span: 24 }}
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      "To proceed, you need to agree with our Terms & Conditions"
                    ),
            },
          ]}
        >
          <Checkbox>
            Agree to our <a href="#">Term's and Conditions</a>
          </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button block type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
      <br />
      <br />
      <br />
      {data.map((x) => {
        return <p key={x.id}>{x.website}</p>;
      })}
    </div>
  );
};

export default AntFormValidation;
