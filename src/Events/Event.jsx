import React from "react";

const Event = () => {
  const handleClick = () => {
    alert("hello");
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="btn btn-dark w-25 d-block mx-auto my-2"
      >
        Click me
      </button>
    </>
  );
};

export default Event;
