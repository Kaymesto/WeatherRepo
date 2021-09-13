import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './Routing';
import { HeaderBar } from './components/header/HeaderBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderBar />

        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
