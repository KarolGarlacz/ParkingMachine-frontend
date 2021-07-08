import React from "react";

const Abonament = () => {
  return (
    <div className="abonament-wrap">
      <form className="abonament-info">
        <p> Wprowadź swoje auto:</p>
        <input type="text" placeholder="Model samochodu" />
        <input type="text" placeholder="Model samochodu" />
        <input type="text" placeholder="Rejestracja" />
        <input type="text" placeholder="Data rozpoczęcia" />
        <input type="text" placeholder="Data zakończenia" />
        <input type="submit" value="Płatność" className="submit" />
        <input type="submit" value="Anuluj" className="submit" />
      </form>
    </div>
  );
};
export default Abonament;
