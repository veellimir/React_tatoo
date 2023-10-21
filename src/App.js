import React from 'react';

import './css/App.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Main from './components/Main/Main';
import Tatoo from './components/TatooProducts/Tatoo';


function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://6533f3f2e1b6f4c590466b27.mockapi.io/tatto-items').then((response) => {
      return response.json()
  })
  .then((array) => {
    setItems(array)
  });
  }, [])

  return (
    <div className="App">
      <Header />
      <Main />
      <Categories />
      <div className='wrapper-products'>
        {
          items.map(obj =>
            // <Tatoo title={obj.title} price={obj.price} image={obj.imageUrl} />
            <Tatoo {...obj} /> // similarly
          )
        }
      </div>
    </div>
  );
}
export default App;
