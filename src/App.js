import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router';
import HomePage from './pages/HomePage';
import Rent from './pages/RentPage';
import Sale from './pages/SalePage';
import About from './pages/AboutUsual';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/aluguel" component={ Rent } />
        <Route exact path="/venda" component={ Sale } />
        <Route exact path="sobre" component={ About } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
