import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "./Axios/axios";

const AntPagination = () => {
  const [myData, setMyData] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  //   const getApiData = async () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => setMyData(response.data));
  //   };

  const getApiData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/todos");
      setMyData(response.data);
      setLoading(false);
    } catch (error) {
      setErr(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  console.log("myData", myData);
  const column = [
    {
      key: 1,
      dataIndex: "id",
      title: "ID",
    },
    {
      key: 2,
      dataIndex: "userId",
      title: "User Id",
    },
    {
      key: 3,
      dataIndex: "completed",
      title: "Status",
      render: (completed) => {
        return <p>{completed ? "complete" : "In Progress"}</p>;
      },
    },
  ];
  return (
    <div>
      <Table dataSource={myData} columns={column}></Table>
    </div>
  );
};

export default AntPagination;
// dataSource = { data };
