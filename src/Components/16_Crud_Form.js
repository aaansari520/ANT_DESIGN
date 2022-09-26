import { Button, Form, Input, Select, Space } from "antd";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";

const Ant_Crud_Form = () => {
  const onFinish = (values) => {
    console.log("values", values);
  };
  return (
    <div>
      <Form style={{ width: 500 }} onFinish={onFinish}>
        <Form.Item name={"teacher"} label="Teacher Name">
          <Input placeholder="Provide Your Name"></Input>
        </Form.Item>

        <Form.Item name={"class"} label="Class Name">
          <Input placeholder="Provide Your Class Name"></Input>
        </Form.Item>

        <Form.List name={"students"}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => {
                return (
                  <Space key={field.key} direction="horizontal" size={12}>
                    <Form.Item
                      name={[field.name, "first"]}
                      label={`${index + 1}=> Student`}
                      rules={[{ required: true, message: "Required!" }]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item name={[field.name, "last"]}>
                      <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item name={[field.name, "gender"]}>
                      <Select placeholder="Gender">
                        {["Male", "Female"].map((gender) => {
                          return (
                            <Select.Option value={gender} allowClear>
                              {gender}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => add()}
                  type="dashed"
                  block
                >
                  Add a student
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Ant_Crud_Form;
