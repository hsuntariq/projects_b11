import React from "react";
import Chat from "./Chat";
import { data } from "./contacts";

const WhatApp = () => {
  return (
    <>
      <div className="container col-lg-3 mx-auto shadow lg card border-0 p-5">
        {data.map((item, index) => {
          return <Chat key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default WhatApp;
