import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FilterSale from '../components/FilterSale';
import Cards from '../components/Cards';

function Sale() {
  return (
    <main>
      <Header />
      <FilterSale />
      <Cards />
      <Footer />
    </main>
  );
}

export default Sale;
