import React from "react";
import clock from "../images/clock.png";
import adress from "../images/adress.png";
import facebook from '../images/faceatual.png';
import instagram from '../images/instaatual.png';
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer-Main-Container">
      <div className="Footer-Container">

        <section className="section-hour">
          <p><img className="footer-images" src={ clock } alt="clock-icon_icone-de-relogio" /> Horário de Funcionamento</p>
          <p id="hour-day-info">Segunda á Sexta 08h ás 18h </p> </section>

        <section className="section-adress">
          <p><img className="footer-images" id="adress-picture" src={adress} alt="adress-icon_icone-de-endereço"/>Endereço:</p>
          <p id="address-street"><span id="address-street1">Rua Extrema, 456,</span><span>Guanabara, Contagem-MG</span></p> </section>

        <section id="section-social">
          <a rel="noreferrer" href="https://www.facebook.com/usualempreendimentosimobiliarios" target="_blank"> <img className="social-images" src={ facebook } alt="facebook-logo"/> </a>
          <a href="https://www.instagram.com/usualimob/" rel="noreferrer" target="_blank"> <img className="social-images" src={ instagram } alt="instagam-logo"/> </a>
       </section>

      </div>
    </footer>
  );
}

export default Footer;
