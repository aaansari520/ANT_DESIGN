import React from "react";
import { Space, Table, Tag } from "antd";

const AntTable = () => {
  const data = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "20 Downing Street",
    },
    {
      key: "3",
      name: "John Doe",
      age: 40,
      address: "30 Downing Street",
    },
    {
      key: "4",
      name: "John",
      age: 62,
      address: "40 Downing Street",
    },
    {
      key: "5",
      name: "John Doe Jhon",
      age: 42,
      address: "50 Downing Street",
    },
  ];

  const column = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name) => {
        return <a>{name}</a>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Graduated?",
      key: "key",
      render: (payload) => {
        return <p>{payload.age > 40 ? "True" : "False"}</p>;
      },
    },
  ];

  return (
    <div>
      <Table dataSource={data} columns={column}></Table>
    </div>
  );
};

export default AntTable;
