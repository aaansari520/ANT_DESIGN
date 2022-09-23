import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AntFetchPaginatedData = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const getApiData = async (page) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
      );
      setData(res.data.data);
      setTotalPages(res.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData(1);
  }, []);
  console.log("DataSource", data);
  console.log("totalPages", totalPages);
  const columns = [
    { title: "ID", dataIndex: "_id" },
    { title: "Name", dataIndex: "name" },
    { title: "Trips", dataIndex: "trips" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table
        loading={loading}
        dataSource={data}
        columns={columns}
        pagination={{
          pageSize: 10,
          total: totalPages,
          onChange: (page) => {
            getApiData(page);
          },
        }}
      ></Table>
    </div>
  );
};

export default AntFetchPaginatedData;
