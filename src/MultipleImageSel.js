import React, { useState } from "react";

const MultipleImageSel = () => {
  const [uploadFiles, setUploadImages] = useState([]);

  console.log("uploadFileuploadFile+++333333333333", uploadFiles);

  const handleOnChange = (e) => {
    console.log("1111111111", e.target.files);
    const selectedIMg = Array.from(e.target.files);
    // const selectedIMg=Object.values(e.target.files);

    // setUploadImages([...uploadFiles , ...selectedIMg]);

    setUploadImages([...uploadFiles, ...e.target.files]);



  };

  function handleClose(e) {
    
    const s = uploadFiles.filter((item, index) => index !== e);
    console.log("ssssssss", s);
    setUploadImages(s);
    
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="file"
          multiple="multiple"
          name="images"
          onChange={(e) => handleOnChange(e)}
        />
        <br />
        <br />
        <br />
        <br />
        <div>
          {uploadFiles?.map((item, index) => {
            return (
              <>
                <div>
                  <button
                    onClick={() => handleClose(index)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <img src={URL.createObjectURL(item)} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MultipleImageSel;
