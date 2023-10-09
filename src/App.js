import './css/App.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Main from './components/Main/Main';
import Tatoo from './components/TatooProducts/Tatoo';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Main />
      <div className='wrapper-products'>
        <Tatoo title='Орёл' price={5000}/>
        <Tatoo title='Надписи' price={3000}/>
        <Tatoo title='Кийтайский дракон' price={15000}/>
        <Tatoo title='Волк' price={7000}/>
        <Tatoo title='Парные' price={6300}/>
      </div>
    </div>
  );
}
export default App;
