import React from "react";
import { Select } from "antd";

const SelectOp = () => {
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  return (
    <div>
      <p>Which is your Favourite Fruit? This is for single selection</p>

      <Select placeholder="Select Fruit" style={{ width: "50%" }}>
        {fruits.map((fruit, index) => {
          return (
            <Select.Option value={fruit} key={index}>
              {fruit}
            </Select.Option>
          );
        })}
      </Select>

      <br />

      <p>Which is your Favourite Fruit? This is for Multiple selections</p>

      <Select
        mode="multiple"
        placeholder="Select Fruit"
        style={{ width: "50%" }}
      >
        {fruits.map((fruit, index) => {
          return (
            <Select.Option value={fruit} key={index}>
              {fruit}
            </Select.Option>
          );
        })}
      </Select>
      <br />

      <p>
        Which is your Favourite Fruit? This is for Multiple selections with
        MAX-TAG-COUT
      </p>

      <Select
        mode="multiple"
        maxTagCount={2}
        placeholder="Select Fruit"
        style={{ width: "50%" }}
      >
        {fruits.map((fruit, index) => {
          return (
            <Select.Option value={fruit} key={index}>
              {fruit}
            </Select.Option>
          );
        })}
      </Select>
      <br />

      <p>
        Which is your Favourite Fruit? This is for Multiple selections with
        MAX-TAG-COUT and CLEAR BUTTON
      </p>

      <Select
        mode="multiple"
        maxTagCount={2}
        allowClear
        placeholder="Select Fruit"
        style={{ width: "50%" }}
      >
        {fruits.map((fruit, index) => {
          return (
            <Select.Option value={fruit} key={index}>
              {fruit}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectOp;
