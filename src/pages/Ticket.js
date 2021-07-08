import React from "react";
import { NavLink } from "react-router-dom";

const list = [{ name: "cash", path: "/cash" }];

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

const Ticket = () => {
  return (
    <div className="ticket-wrap">
      <form className="ticket-info">
        <p> Wprowadź swoje auto:</p>
        <input type="text" placeholder="Model samochodu" />
        <input type="text" placeholder="Rejestracja" />
        <input type="text" placeholder="Rejestracja" />
        <input type="submit" value="Taryfa 1" className="submit" />
        <input type="submit" value="Taryfa 2" className="submit" />
        <input type="submit" value="Taryfa 3" className="submit" />
        <input type="submit" value="Taryfa 4" className="submit" />
        <input type="submit" value="Płatność" className="submit" />
      </form>
    </div>
  );
};
export default Ticket;
