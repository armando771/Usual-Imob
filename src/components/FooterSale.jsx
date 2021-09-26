import React from "react";
import clock from "../images/clock.png";
import adress from "../images/adress.png";
import facebook from '../images/faceatual.png';
import instagram from '../images/instaatual.png';
import "../styles/FooterSale.css";

function FooterSale() {
  return (
    <footer className="Footer-Main-Container-Sale">
      <div className="Footer-Container-Sale">

        <section className="section-hour-Sale">
          <p><img className="footer-images-Sale" src={ clock } alt="clock-icon_icone-de-relogio" /> Horário de Funcionamento</p>
          <p id="hour-day-info-Sale">Segunda á Sexta 08h ás 18h </p> </section>

        <section className="section-adress-Sale">
          <p><img className="footer-images-Sale" id="adress-picture-Sale" src={adress} alt="adress-icon_icone-de-endereço"/>Endereço:</p>
          <p id="address-street-Sale"><span id="address-street1-Sale">Rua Extrema, 456,</span><span>Guanabara, Contagem-MG</span></p> </section>

        <section id="section-social-Sale">
          <a rel="noreferrer" href="https://www.facebook.com/usualempreendimentosimobiliarios" target="_blank"> <img className="social-images-Sale" src={ facebook } alt="facebook-logo"/> </a>
          <a href="https://www.instagram.com/usualimob/" rel="noreferrer" target="_blank"> <img className="social-images-Sale" src={ instagram } alt="instagam-logo"/> </a>
       </section>

      </div>
    </footer>
  );
}

export default FooterSale;
