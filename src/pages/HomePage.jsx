import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FilterHome from '../components/FilterHome';

function HomePage() {
  return (
    <main>
      <Header />
      <h3>My HomePage</h3>
      <FilterHome/>
      <Footer />
    </main>
  );
}

export default HomePage;
