import React, { useContext } from "react";
import casa from "../images/casa.jpg";
import placeholder from "../images/placeholder.png"
import home from "../images/home.png"
import car from "../images/car.png"
import "../styles/Card.css";
import MyContext from '../context/MyContext';

function Cards() {
  const { immobile } = useContext(MyContext);
	return(
    <div className="cards">
      <div className="card">
        <div className="imagem">
          <img src={ casa } className="casa" alt="casa" />
        </div>
        <div className="titulo">
          <h1>APARTAMENTO - RESIDENCIAL</h1>
        </div>
        <div className="info">
          <h2>VENDA</h2>
          <p><img src={ placeholder } alt="adress"/>  Jaca - Rio de Janeiro/Rj</p>
          <p><img src={ home } alt="home"/>  2 Dormitórios l 42m²</p>
          <p><img src={ car } alt="car"/>  C/ Garagem</p>
        </div>
        <div className="button">
          <button class="btn btn-secondary btn-lg" >VER MAIS</button>
        </div>
      </div>
      <div className="card">
        <div className="imagem">
          <img src={ casa } className="casa" alt="casa" />
        </div>
        <div className="titulo">
          <h1>CASA - RESIDENCIAL</h1>
        </div>
        <div className="info">
          <h2>VENDA</h2>
          <p><img src={ placeholder } alt="adress"/>  Jaca - Rio de Janeiro/Rj</p>
          <p><img src={ home } alt="home"/>  2 Dormitórios l 42m²</p>
          <p><img src={ car } alt="car"/>  C/ Garagem</p>
        </div>
        <div className="button">
          <button class="btn btn-secondary btn-lg">VER MAIS</button>
        </div>
      </div>
      <div className="card">
        <div className="imagem">
          <img src={ casa } className="casa" alt="casa" />
        </div>
        <div className="titulo">
          <h1>CASA - RESIDENCIAL</h1>
        </div>
        <div className="info">
          <h2>VENDA</h2>
          <p><img src={ placeholder } alt="adress"/>  Jaca - Rio de Janeiro/Rj</p>
          <p><img src={ home } alt="home"/>  2 Dormitórios l 42m²</p>
          <p><img src={ car } alt="car"/>  C/ Garagem</p>
        </div>
        <div className="button">
          <button class="btn btn-secondary btn-lg">VER MAIS</button>
        </div>
      </div>
      <div className="card">
        <div className="imagem">
          <img src={ casa } className="casa" alt="casa" />
        </div>
        <div className="titulo">
          <h1>CASA - RESIDENCIAL</h1>
        </div>
        <div className="info">
          <h2>VENDA</h2>
          <p><img src={ placeholder } alt="adress"/>  Jaca - Rio de Janeiro/Rj</p>
          <p><img src={ home } alt="home"/>  2 Dormitórios l 42m²</p>
          <p><img src={ car } alt="car"/>  C/ Garagem</p>
        </div>
        <div className="button">
          <button class="btn btn-secondary btn-lg">VER MAIS</button>
        </div>
      </div>
      <div className="card">
        <div className="imagem">
          <img src={ casa } className="casa" alt="casa" />
        </div>
        <div className="titulo">
          <h1>CASA - RESIDENCIAL</h1>
        </div>
        <div className="info">
          <h2>VENDA</h2>
          <p><img src={ placeholder } alt="adress"/>  Jaca - Rio de Janeiro/Rj</p>
          <p><img src={ home } alt="home"/>  2 Dormitórios l 42m²</p>
          <p><img src={ car } alt="car"/>  C/ Garagem</p>
        </div>
        <div className="button">
          <button class="btn btn-secondary btn-lg">VER MAIS</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;