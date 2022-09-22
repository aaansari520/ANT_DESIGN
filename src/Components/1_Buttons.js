import React, { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

const Buttons = () => {
  const [loading, setLoading] = useState(false);

  const onButton = () => {
    console.log("Yes Button is clicked");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Button type="primary">primary</Button>
      <Button
        type="primary"
        icon={<PoweroffOutlined />}
        style={{ backgroundColor: "orange", color: "darkgreen" }}
      >
        primary
      </Button>
      <Button type="danger">danger</Button>
      <Button type="ghost">ghost</Button>
      <Button type="disabled">disabled</Button>
      <Button type="loading" loading block>
        loading
      </Button>
      <Button type="loading" loading={loading} onClick={onButton}>
        loading
      </Button>
    </div>
  );
};

export default Buttons;
