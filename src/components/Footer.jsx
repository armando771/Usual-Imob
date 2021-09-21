import React from "react";
import clock from "../images/clock.png";
import adress from "../images/adress.png";
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import "../styles/Footer.css";

function Footer() {
  return (
    <footer id="Footer-Main-Container">
      <div id="Footer-Container">
        <section id="section-hour">
          <p id="section-hour-p"><img className="footer-images" src={ clock } alt="clock-icon_icone-de-relogio" /> Horário de Funcionamento</p>
          <p id="section-hour-info">Segunda á Sexta 08h ás 18h </p>
        </section>
        <section id="section-adress">
        <p id="section-adress-p"><img className="footer-images" id="adress-picture" src={adress} alt="adress-icon_icone-de-endereço"/>Endereço:</p>
          <span id="section-adress-street">Rua Extrema, 456, Guanabara, Contagem-MG</span>
        </section>
        <section id="section-social">
          <a id="section-social-facebook" rel="noreferrer" href="https://www.facebook.com/usualempreendimentosimobiliarios" target="_blank"> <img className="footer-images" src={ facebook } alt="facebook-logo"/> </a>
          <a href="https://www.instagram.com/usualimob/" rel="noreferrer" target="_blank"> <img className="footer-images" src={ instagram } alt="instagam-logo"/> </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
