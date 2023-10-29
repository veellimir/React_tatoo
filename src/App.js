import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './css/App.css';

import Header from './components/Header/Header';
import Cart from './pages/Cart';


import Home from './pages/Home';
import NotFound from './pages/NotFound';


export const SearchContext = React.createContext();


function App() {
  const [searchValue, setSearchValue] = React.useState();

  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/backet' element={<Cart />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}
export default App;
