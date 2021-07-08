import React from "react";
import { Route } from "react-router-dom";
import Ticket from "../pages/Ticket";
import Abonament from "../pages/Abonament";
import Cash from "../pages/Cash";

const Consol = () => {
  return (
    <>
      <Route path="/" exact component={Ticket} />
      <Route path="/abonament" exact component={Abonament} />
      <Route path="/cash" exact component={Cash} />
    </>
  );
};

export default Consol;
