import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Cards from '../components/Cards';
import FilterHome from '../components/FilterHome';

function HomePage() {
  return (
    <main>
      <Header />
      <FilterHome />
      <Cards />
      <Footer />
    </main>
  );
}

export default HomePage;
