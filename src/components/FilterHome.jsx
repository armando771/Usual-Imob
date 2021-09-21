import React from 'react';
import '../styles/HomePage.css';

function FilterHome() {
  return (
    <nav id='FilterContainer' className="navbar">
      <div id="FilterContent" className='d-flex fw-bold'>
        <p className='text-uppercase' id='textFilter'>
          Encontre o imóvel <br /> que é a sua cara
        </p>
        <div id="inputsContainer">
          <label htmlFor='cidadeInput' className='inputsFilter'>
            <select id='cidadeInput' className='form-select'>
              <option>Cidade</option>
            </select>
          </label>
          <label htmlFor='quartosInput' className='inputsFilter'>
            <select id='quartosInput' className='form-select'>
              <option>Quartos</option>
            </select>
          </label>
          <label htmlFor='preçoInput' className='inputsFilter'>
            <select id='preçoInput' className='form-select'>
              <option>Preço</option>
            </select>
          </label>
        	<button type='button' className='btn btn-secondary btn-sm'>
          	BUSCAR
        	</button>
        </div>
      </div>
    </nav>
  );
}

export default FilterHome;
