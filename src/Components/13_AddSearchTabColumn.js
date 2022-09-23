import { Input, Table } from "antd";
import React from "react";
import { StarOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";

const AntAddSearchTabColumn = () => {
  const data = [
    { name: "Jhon Cena", age: 50, address: "United State" },
    { name: "Jhon Doe", age: 40, address: "United State" },
    { name: "Bogimen", age: 60, address: "United Kingdom" },
    { name: "Kalu", age: 30, address: "Khadki" },
    { name: "Zimin", age: 32, address: "Latur" },
    { name: "Jaspal Sikka", age: 60, address: "Chandur" },
    { name: "Loki", age: 70, address: "Bhilwara" },
  ];
  const column = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: () => {
        return <Input autoFocus placeholder="Type Something to search"></Input>;
      },
      filterIcon: () => {
        return <StarOutlined />;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  return (
    <div>
      <Table dataSource={data} columns={column}></Table>
    </div>
  );
};

export default AntAddSearchTabColumn;
