import './css/App.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Main from './components/Main/Main';
import Tatoo from './components/TatooProducts/Tatoo';
import tatooitems from './components/assets/tatoo.json'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Categories />
      <div className='wrapper-products'>
        {
          tatooitems.map(obj => 
          // <Tatoo title={obj.title} price={obj.price} image={obj.imageUrl} />
          <Tatoo {...obj}/> // similarly
          )
        }
      </div>
    </div>
  );
}
export default App;
