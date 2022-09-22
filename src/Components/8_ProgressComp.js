import React from "react";
import { Progress } from "antd";

const AntProgressComp = () => {
  return (
    <div>
      <Progress percent={30} />
      <br />
      <Progress
        percent={40}
        type="circle"
        strokeColor="blue"
        strokeWidth={20}
        status="exception"
      />
      <br />

      <Progress
        percent={60}
        type="dashboard"
        strokeColor="green"
        status="active"
      />
      <br />

      <Progress
        percent={80}
        type="line"
        strokeColor="red"
        strokeWidth={20}
        status="active"
      />
    </div>
  );
};

export default AntProgressComp;
