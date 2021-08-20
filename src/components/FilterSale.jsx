import React from 'react';
import '../styles/SalePage.css';

function FilterSale() {
  return(
    <div id="Filter-Sale-Container">
        <p>Encontre o imovel que é a sua cara </p>
        <label htmlFor="Sale-filter-by-room">
          <select id="Sale-filter-by-room" className="form-select">
            <option>Quartos</option>
          </select>
        </label>
        <label htmlFor="Sale-filter-by-price">
          <select className="form-select">
            <option>Preço</option>
          </select>
        </label>
        <label htmlFor="Sale-filter-by-place">
          <select className="form-select">
            <option>Cidade</option>
          </select>
        </label>
        <button type="button" className="btn btn-secondary form-button">Filtrar</button>
      </div>
  )
}

export default FilterSale;