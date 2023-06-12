//import styling and components
import './App.scss';

import React from 'react';
import { Route, Routes } from 'react-router-dom';


import PortfolioContainer from './components/PortfolioContainer';

const App = () => {
  return (
    <div className="App">
      <PortfolioContainer />
    </div>
  );
};

export default App;