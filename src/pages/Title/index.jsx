import React from "react";

const Title = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          background: "linear-gradient(blue,purple)",
          height: "300px",
        }}
      >
        <div className="text-center text-light ">
          <h1>Title</h1>
          <h1 className="h5 m-3">
           
            Metapercept Information Solutions & Consulting and Metapercept
            Technology Services. This message is intended for the individual or
            entity to whom it is addressed. If the reader of this message is not
            the inte{" "}
          </h1>
          <button className="btn btn-light mt-2">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Title;
