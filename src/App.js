import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './css/App.css';

import Header from './components/Header/Header';
import Cart from './pages/Cart';


import Home from './pages/Home';
import NotFound from './pages/NotFound';



function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='*' element={ <NotFound /> }/>
        <Route path='/backet' element={ <Cart />} />
      </Routes>
    </div>
  );
}
export default App;
