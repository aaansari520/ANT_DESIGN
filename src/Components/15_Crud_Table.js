import { Button, Input, Modal, Table } from "antd";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Ant_Crud_Table = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStd, setEditingStd] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      id: 2,
      name: "John",
      age: 42,
      address: "20 Downing Street",
    },
    {
      id: 3,
      name: "John Doe",
      age: 40,
      address: "30 Downing Street",
    },
    {
      id: 4,
      name: "John",
      age: 62,
      address: "40 Downing Street",
    },
    {
      id: 5,
      name: "John Doe Jhon",
      age: 42,
      address: "50 Downing Street",
    },
  ]);

  const column = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              style={{ color: "green", marginLeft: 4 }}
              onClick={() => onEditStd(record)}
            />
            <DeleteOutlined
              onClick={() => onDeleteStd(record)}
              style={{ color: "red", marginLeft: 15 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStd = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "John " + randomNumber,
      age: randomNumber,
      address: "40 Downing Street " + randomNumber,
    };
    setDataSource((prev) => {
      return [...prev, newStudent];
    });
  };

  const onEditStd = (record) => {
    setIsEditing(true);
    setEditingStd({ ...record });
  };

  const onDeleteStd = (record) => {
    console.log("Delte", record);
    Modal.confirm({
      title: `Are you Sure? You want to delete ${record.name}'s record!`,
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => pre.filter((std) => std.id !== record.id));
      },
    });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStd(null);
  };

  return (
    <div>
      <Button type="primary" onClick={onAddStd} style={{ marginBottom: 10 }}>
        Add a New Student
      </Button>
      <Table dataSource={dataSource} columns={column}></Table>
      <Modal
        title="Edit Data"
        visible={isEditing}
        okText="Save"
        onCancel={() => setIsEditing(false)}
        onOk={() => {
          setDataSource((prev) => {
            console.log("Prev Matlab kya milraha hai", prev);
            return prev.map((std) => {
              if (std.id === editingStd.id) {
                return editingStd;
              } else {
                return std;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingStd?.name}
          onChange={(e) => {
            setEditingStd((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingStd?.age}
          onChange={(e) => {
            setEditingStd((prev) => {
              return { ...prev, age: e.target.value };
            });
          }}
        />
        <Input
          value={editingStd?.address}
          onChange={(e) => {
            setEditingStd((prev) => {
              return { ...prev, address: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};

export default Ant_Crud_Table;
