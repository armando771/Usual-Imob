import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';
import '../styles/HomePage.css';

function FilterHome() {
  const [rooms, setRooms] = useState(1);
  const [city, setCity] = useState('Contagem');
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('Apartamento');
  const { immobile, setFilterImmobiles } = useContext(MyContext);

  const onClick = () => {
    let newImmobiles = [];
    newImmobiles = immobile.filter((immobile) => immobile.address.city === city);
    if (Number(price) > 0) {
      newImmobiles = newImmobiles.filter((immobile) => immobile.price <= Number(price));
    }
    newImmobiles = newImmobiles.filter((immobile) => immobile.details.rooms >= Number(rooms));
    newImmobiles = newImmobiles.filter((immobile) => immobile.type === type)
    setFilterImmobiles(newImmobiles);
  };

  const handleChange = ({ target: { value } }, name) => {
    switch (name) {
      case 'city':
        setCity(value);
        break;
      case 'rooms':
        setRooms(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'type':
        setType(value);
        break;
      default:
        break;
    }
  };

  return (
    <nav id='FilterContainer' className='navbar'>
      <div id='FilterContent' className='d-flex fw-bold'>
        <p className='text-uppercase' id='textFilter'>
          Encontre o imóvel <br /> que é a sua cara
        </p>
        <div id='inputsContainer'>
          <label htmlFor="typeinput">
            Tipo de imóvel:
            <select
            id="typeinput"
            className='form-select'
            onChange={(e) => handleChange(e, 'type')} 
            >
               <option value="Apartamento">Apartamento</option>
               <option value="Casa">Casa</option>
               <option value="Comercial">Comercial</option>
            </select>
          </label>
          <label htmlFor='cidadeInput' className='inputsFilter'>
            Cidade:
            <select
              id='cidadeInput'
              className='form-select'
              onChange={(e) => handleChange(e, 'city')}
            >
              <option value='Contagem'>Contagem</option>
              <option value='Belo Horizonte'>Belo Horizonte</option>
              <option value='Betim'>Betim</option>
            </select>
          </label>
          <label htmlFor='quartosInput' className='inputsFilter'>
            Nº de Quartos:
            <select
              id='quartosInput'
              className='form-select'
              onChange={(e) => handleChange(e, 'rooms')}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
            </select>
          </label>
          <label htmlFor='preçoInput' className='inputsFilter'>
            <p className='valueTag'>Valor:</p>
            <input
              type='number'
              id='preçoInput'
              onChange={(e) => handleChange(e, 'price')}
            />
          </label>
          <button type='button' className='btn btn-secondary btn-sm' onClick={() => onClick() }>
            BUSCAR
          </button>
        </div>
      </div>
    </nav>
  );
}

export default FilterHome;
