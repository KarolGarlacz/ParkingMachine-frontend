import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navi.css";

const list = [
  { name: "ticket", path: "/", exact: true },
  { name: "abonament", path: "/abonament" },
];

const Button = () => {
  const navi = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return <div>{navi}</div>;
};

export default Button;
