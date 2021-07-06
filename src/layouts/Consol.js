import React from "react";
import { Route } from "react-router-dom";
import Ticket from "../pages/Ticket";
import Abonament from "../pages/Abonament";

const Consol = () => {
  return (
    <>
      <Route path="/" exact component={Ticket} />
      <Route path="/abonament" exact component={Abonament} />
    </>
  );
};

export default Consol;
