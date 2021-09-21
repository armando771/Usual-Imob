import React from "react";
import casa from "../images/casa.jpg";
import placeholder from "../images/placeholder.png"
import home from "../images/home.png"
import car from "../images/car.png"
import "../styles/Card.css";

function Cards() {
	return(
    <div className="cards">
      <div className="card">
        <div className="imagem">
          <img src="https://lh3.googleusercontent.com/MnGecOZujPq06x7s8VJB_gC2G9udfQI4D51aAKoLJZC3opaVueYweOWnXkWYzOB69xstzphNQmatLBWyCjCzuv94fM367rpY1n2KdKi9nUcUuuUwHtThxq_38RQk21aAZ2mU3QkcSaM_BStLdr1ir9EvXO6xI5Eirz4NEBeeNndfIaDWoMh7aTuGc1lnnNJcJ_PI0czmnoqi6NI2YCeQbiyJ2iH_KKw_Ic2VYaj0LscJLDWQKucXHTPk3vFuid8Fx71vyPDrf6Ab05N35iz9_i-aPRoTsLEHcD_NorYVdD6BtWxmvIAz6_MPcq_RZWk7BqMJIEsLMj-xNb_HyUqcg9L33sjiFdnm4f3plDn8apEkQQy6oOCe1yxG5rYf-r-6jnnMoB5J8ci8m4miM4-HdCgaPOi9GCO8nuyTGRpe5wDRvlY1yhEC_JYncyxMZZAcg2w_1pCmiN4_kp2WtxVrb7-IamChlMhR782FaOl4HJ-JfNS6giXb4toW2H8c5VbShfDgjmpQLyAm7URZhvIJFgl0YJNTCCfCkGPaKjF33-bZVlDPiUkSISobZBVbfPeRczlcVYir7_XI9zmzEe_XiddfTve3XIyZo-GtTnJ3aeYXLm5vLJvqAswQcJNdMON6wPYmSlURMNTjHc1WMUlX6nR6ynGobwr7h8nEStfN-_xBuZ0ekkmcHovyjnDDuHQFhWmMtAdo384QOZLsQNwhC_4=w700-h691-no?authuser=0" className="casa" alt="casa" />
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