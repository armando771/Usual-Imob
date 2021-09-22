import React from "react";
import placeholder from "../images/placeholder.png"
import home from "../images/home.png"
import car from "../images/car.png"
import dollar from "../images/dollar.png"
import "../styles/Card.css";

function Card(props) {
  const { imob } = props;
  const { name, type, address, price, details, images } = imob;
  const { endress, street, bairro, city } = address;
  const { rooms, garage } = details;

  return (
    <div className="card">
      <div className="imagem">
        <img
          src={images[0].foto1}
          className="casa"
          alt={ name }
        />
      </div>
      <div className="titulo">
        <h1>{ type }</h1>
      </div>
      <div className="info">
        <h2>Aluguel</h2>
        <div className="address">
          <img src={placeholder} alt="adress" /> 
          <p> { endress }</p>
        </div>
        <p>
          <img src={home} alt="home" /> { rooms }
        </p>
        <p><img src={car} alt="car" /> { garage }</p>
        <p><img src={dollar} alt="money" />   R$ { price }</p>
      </div>
    </div>
  );
}

export default Card;
