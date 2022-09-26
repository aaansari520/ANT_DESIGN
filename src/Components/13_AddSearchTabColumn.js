import { Button, Input, Table } from "antd";
import React from "react";
import { SearchOutlined, StarFilled, StarTwoTone } from "@ant-design/icons";

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
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              placeholder="Type Something to search"
              autoFocus
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => confirm()}
              onBlur={() => confirm()}
            ></Input>
            <Button type="primary">Search</Button>
            <Button type="danger" onClick={() => clearFilters()}>
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Search By Age"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => confirm()}
              onBlur={() => confirm()}
            ></Input>
            <Button type="primary">Search</Button>
            <Button type="danger" onClick={() => clearFilters()}>
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.age == value;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <Input
            autoFocus
            placeholder="search by Address"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : []);
              confirm({ closeDropdown: false });
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
              confirm();
            }}
          ></Input>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.address.toLowerCase().includes(value.toLowerCase());
      },
    },
  ];

  return (
    <div>
      <Table dataSource={data} columns={column}></Table>
    </div>
  );
};

export default AntAddSearchTabColumn;
