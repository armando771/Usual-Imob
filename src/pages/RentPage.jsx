import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FilterRent from '../components/FilterRent';
import Cards from '../components/Cards';

function Rent() {
  return (
    <main>
      <Header />
      <FilterRent />
      <Cards />
      <Footer />
    </main>
  );
}

export default Rent;
