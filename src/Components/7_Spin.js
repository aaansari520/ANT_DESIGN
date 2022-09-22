import React, { useState } from "react";
import { Button, Spin } from "antd";

const AntSpin = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Spin spinning size="small"></Spin>
      <Spin spinning={loading} size="middle">
        We Are Fetching Data For You
      </Spin>
      <Button
        onClick={() => {
          setLoading((preValue) => !preValue);
        }}
      >
        ToggleSpin
      </Button>

      <Spin spinning={loading} size="large">
        <p>P 1</p>
        <p>P 2</p>
        <p>P 3</p>
        <p>P 4</p>
      </Spin>
    </div>
  );
};

export default AntSpin;
