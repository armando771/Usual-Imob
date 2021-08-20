import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Cards from '../components/Cards';

function HomePage() {
  return (
    <main>
      <Header />
      <h3>My HomePage</h3>
      <Cards />
      <Footer />
    </main>
  );
}

export default HomePage;
