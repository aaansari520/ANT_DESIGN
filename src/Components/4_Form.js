import React, { useState } from "react";
import { Alert, Button, Checkbox, Form, Input, message } from "antd";

const AntForm = () => {
  const [showAlert, setShowAlert] = useState(false);

  const onFinish = (e) => {
    console.log(e);
    setTimeout(() => {
      setShowAlert(true);
      // message.error("Login Failed");
    }, 2000);
  };
  return (
    <div>
      {showAlert && (
        <Alert
          type="error"
          message="Error!"
          description="There was error while login..."
          closable
        />
      )}
      <Form onFinish={onFinish}>
        <Form.Item label="User Name" name="userName">
          <Input placeholder="User Name" required></Input>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password placeholder="Password" required></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AntForm;
