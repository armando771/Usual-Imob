import React from 'react';
import '../styles/HeaderStyle.css';
import Logo from '../images/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src={ Logo } alt='Logo Usual' id="Logo" />
      <div id="uls">
        <ul id='navBar' type='none'>
          <li className="lis"><Link className="LinkHeader" to="/">Home</Link></li>
          <li className="lis"><Link className="LinkHeader" to="/aluguel">Aluguel</Link></li>
          <li className="lis"><Link className="LinkHeader" to="/venda">Venda</Link></li>
          <li className="lis"><Link className="LinkHeader" to="/sobre">Sobre a Usual</Link></li>
          </ul>
        <ul id="contact" type='none'>
          <li className="lis">contato@usualimob.com</li>
          <li className="lis">31 99642-2245</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
