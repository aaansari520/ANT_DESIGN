import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Inputs = () => {
  return (
    <div>
      <Input
        placeholder="This is the Input field"
        style={{ size: "small" }}
        prefix={<UserOutlined />}
        maxLength={10}
        allowClear
      ></Input>
      <Input.Search
        placeholder="This is the Search Input field"
        style={{ size: "small" }}
        prefix={<UserOutlined />}
        maxLength={10}
        allowClear
      ></Input.Search>
    </div>
  );
};

export default Inputs;
