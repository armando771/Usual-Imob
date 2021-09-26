import React from 'react';
import FooterSale from '../components/FooterSale';
import Header from '../components/Header';
import '../styles/SalePage.css';

function Sale() {
  return (
    <main>
      <Header />
      <h1 className="SalePage">EM BREVE</h1>
      <FooterSale />
    </main>
  );
}

export default Sale;
