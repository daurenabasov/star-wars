import React from "react";
import { NavLink, Route } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.container}>
      <ul className={s.list__container}>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1" exact>
            People
          </NavLink>
        </li>
        <li>
          <NavLink to="/not-found" exact>
            Not found
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
