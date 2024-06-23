import React from "react";

const Chat = ({ name, image, number, chat, time }) => {
  return (
    <>
      <div className="card border-0 w-100 my-1">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center gap-2">
            <div className="image">
              <img
                width={70}
                height={70}
                className="rounded-circle border border-success p-3"
                src={image}
                alt=""
              />
            </div>
            <div className="info d-flex flex-column">
              <h6 className="p-0 m-0">{name}</h6>
              <p className="text-secondary p-0 m-0">{chat}</p>
            </div>
          </div>

          <div className="d-flex flex-column">
            <p className="text-success p-0 m-0">{time}</p>
            <div
              style={{
                clipPath: "circle()",
              }}
              className=" d-flex justify-content-center align-items-center bg-success text-white rounded-circle p-0 m-0"
            >
              {number}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
