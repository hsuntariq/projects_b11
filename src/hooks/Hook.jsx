import React, { useState } from "react";

const Hook = () => {
  const [myTitle, setMyTitle] = useState("This is the title");
  const changeTitle = () => {
    if (myTitle === "This is the title") {
      setMyTitle("This is the changed title");
    } else {
      setMyTitle("This is the title");
    }
  };
  return (
    <>
      <div className="container text-center">
        <h1 className="display-1">{myTitle}</h1>
        <button onClick={changeTitle} className="btn btn-dark">
          Change title
        </button>
      </div>
    </>
  );
};

export default Hook;
