import { Button, Spin, Upload } from "antd";
import React from "react";

const Ant_File_Upload_Com = () => {
  return (
    <>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Upload action={"http://localhost:3000/"}>
          <Button>Upload</Button>
        </Upload>
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Upload.Dragger
          // disabled
          multiple={true}
          listType="picture"
          action={"http://localhost:3000/"}
          //   showUploadList={{ showRemoveIcon: false }}
          accept=".png,.jpeg,.jpg,.doc"
          beforeUpload={(file) => {
            console.log(file);
            return false;
          }}
          defaultFileList={[
            {
              uid: "abc",
              name: "existing_file.png",
              status: "uploading",
              percent: 50,
              url: "http://www.google.com/",
            },
          ]}
          iconRender={() => {
            return <Spin></Spin>;
          }}
          progress={{
            strokeWidth: 3,
            strokeColor: {
              "0%": "#f0f",
              "100%": "#ff0",
            },
            style: { top: 12 },
          }}
        >
          Drag Your Files Or
          <br />
          <br />
          <Button>Click to Upload</Button>
        </Upload.Dragger>
      </div>
    </>
  );
};

export default Ant_File_Upload_Com;
