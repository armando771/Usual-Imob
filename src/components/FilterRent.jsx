import React from 'react';
import '../styles/RentPage.css';

function FilterRent() {
  return(
    <div id="Filter-Rent-Container">
        <p>Encontre o imovel que é a sua cara </p>
        <label htmlFor="Rent-filter-by-room">
          <select id="Rent-filter-by-room" className="form-select">
            <option>Quartos</option>
          </select>
        </label>
        <label htmlFor="Rent-filter-by-price">
          <select className="form-select">
            <option>Preço</option>
          </select>
        </label>
        <label htmlFor="Rent-filter-by-place">
          <select className="form-select">
            <option>Cidade</option>
          </select>
        </label>
        <button type="button" className="btn btn-secondary form-button">Filtrar</button>
      </div>
  )
}

export default FilterRent;