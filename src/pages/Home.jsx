import React from 'react'

import Tatoo from '../components/TatooProducts/Tatoo';
import Skeleton from '../components/TatooProducts/Skelton';
import Main from '../components/Main/Main';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import Pagination from '../components/Pagination';


const Home = ({ searchValue, setSearchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  // const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'цене',
    sortProperty: 'rating',
  });



  React.useEffect(() => {
    setLoading(true)
    const search = searchValue ? `search=${searchValue}` : '';
    fetch(`https://6533f3f2e1b6f4c590466b27.mockapi.io/tatto-items?${categoryId > 0 ? `category=${categoryId}` : ''
    }${search}&sortBy=${sortType.sortProperty}&order=desc`,
    )
    .then((res) => res.json()) 
    .then((array) => {
        setItems(array)
        setLoading(false)
      });
  }, [categoryId, sortType, searchValue])

  return (
    <div>
      <Main />
      <Sort value={sortType} onClickSort={(i) => setSortType(i)}/>
      <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className='wrapper-main'>
        <div className='wrapper-products'>
          {
            isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map((obj) => <Tatoo key={obj.id} {...obj} />)
          }
        </div>
      </div>
      <Pagination/>
    </div>
  )
}
export default Home;