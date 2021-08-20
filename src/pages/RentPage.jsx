import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import '../styles/RentPage.css';

function Rent() {
  return (
    <main>
      <Header />
      <div id="Filter-Rent-Container">
        <p>Encontre o imovel que a sua cara </p>
        <label htmlFor="rent-filter-by-room">
          <select id="rent-filter-by-room" className="form-select">
            <option>Quartos</option>
          </select>
        </label>
        <label htmlFor="rent-filter-by-price">
          <select className="form-select">
            <option>Preço</option>
          </select>
        </label>
        <label htmlFor="rent-filter-by-place">
          <select className="form-select">
            <option>Cidade</option>
          </select>
        </label>
        <button type="button" className="btn btn-secondary form-button">Filtrar</button>
      </div>
      <Footer />
    </main>
  );
}

export default Rent;
