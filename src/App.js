import React from 'react';

import './css/App.css';

import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Main from './components/Main/Main';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function App() {
  
  return (
    <div className="App">
      <Header />
      <Main />
      <Categories />
      {/* <Home /> */}
      <NotFound />

      
    </div>
  );
}
export default App;
