import { Table, Tag } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AntTableExpand = () => {
  const [myData, setMyData] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [alreadySelectedKeys, setAlreadySelectedKeys] = useState(["1", "4"]);

  //   const getApiData = async () => {
  //     setLoading(true);
  //     try {
  //       //   const response = await axios.get("/todos");
  //       const response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setMyData(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setErr(error.message);
  //     }
  //   };
  //   useEffect(() => {
  //     getApiData();
  //   }, []);
  //   console.log("DAtat", myData);

  const data = [
    {
      key: "1",
      id: 1,
      name: "Std 1",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Std 2",
      grade: "B",
    },
    {
      key: "3",
      id: 3,
      name: "Std 3",
      grade: "C",
    },
    {
      key: "4",
      id: 4,
      name: "Std 4",
      grade: "A",
    },
    {
      key: "5",
      id: 5,
      name: "Std 5",
      grade: "B",
    },
    {
      key: "6",
      id: 6,
      name: "Std 6",
      grade: "A+",
    },
    {
      key: "7",
      id: 7,
      name: "Std 7",
      grade: "C",
    },
    {
      key: "8",
      id: 8,
      name: "Std 8",
      grade: "A",
    },
    {
      key: "9",
      id: 9,
      name: "Std 9",
      grade: "A+",
    },
    {
      key: "10",
      id: 10,
      name: "Std 10",
      grade: "B",
    },
  ];

  const column = [
    {
      dataIndex: "id",
      title: "ID",
    },
    {
      dataIndex: "name",
      title: "Name",
    },
    {
      dataIndex: "grade",
      title: "Grades",
      render: (tag) => {
        const color = tag.includes("A+")
          ? "Green"
          : tag.includes("A")
          ? "Green"
          : tag.includes("B")
          ? "Blue"
          : "Red";
        return <Tag color={color}>{tag}</Tag>;
      },
    },
  ];
  return (
    <div>
      <Table
        columns={column}
        dataSource={data}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            setPage(page);
            setPageSize(pageSize);
          },
        }}
        // rowSelection={true}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: alreadySelectedKeys,
          onChange: (key) => {
            setAlreadySelectedKeys(key);
          },
          onSelect: (record) => {
            console.log(record);
          },
          //   getCheckboxProps:()
        }}
      ></Table>
    </div>
  );
};

export default AntTableExpand;
