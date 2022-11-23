import React from "react";
import { useLocation } from "react-router";
import img from "./img/404.png";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <div>
      <img className={s.img} src={img} alt="" />
      <p className={s.text}>
        Not match for <u>{location.pathname}</u>
      </p>
    </div>
  );
};

export default NotFoundPage;
