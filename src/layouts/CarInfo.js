import React from "react";
import "../styles/carinfo.css";
const CarInfo = () => {
  return (
    <div className="info">
      <form className="car-info">
        <p> Wprowadź swoje auto:</p>
        <input type="text" placeholder="Model samochodu" />
        <input type="text" placeholder="Rejestracja" />
        <input type="submit" value="Zatwierdź" className="submit" />
      </form>
    </div>
  );
};

export default CarInfo;
