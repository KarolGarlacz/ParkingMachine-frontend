import React from "react";

const Ticket = () => {
  return (
    <div className="ticket-wrap">
      <form className="ticket-info">
        <p> Wprowadź swoje auto:</p>
        <input type="text" placeholder="Model samochodu" />
        <input type="text" placeholder="Rejestracja" />
        <input type="submit" value="Zatwierdź" className="submit" />
      </form>
    </div>
  );
};
export default Ticket;
