import React, { useState } from 'react';
import MyContext from '../context/MyContext';
import data from '../data/data';

function MyProvider({ children }) {
const [immobile, Setimmobile] = useState(data);
const [filterImmobiles, setFilterImmobiles] = useState(data);

const context = {
  immobile,
  Setimmobile,
  filterImmobiles,
  setFilterImmobiles
};

return (
  <MyContext.Provider value={ context }>
    {children}
  </MyContext.Provider>
)
};

export default MyProvider;
