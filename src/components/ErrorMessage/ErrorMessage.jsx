import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <>
      <h1 className={s.text}>
        The dark side of the force has won. <br /> We cannot display data.
        <br /> Come back when we fix everything
      </h1>
    </>
  );
};

export default ErrorMessage;
