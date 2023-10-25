import React from 'react'

import Tatoo from '../components/TatooProducts/Tatoo';
import Skeleton from '../components/TatooProducts/Skelton';
import Main from '../components/Main/Main';


const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('https://6533f3f2e1b6f4c590466b27.mockapi.io/tatto-items').then((response) => {
      return response.json()
    })
      .then((array) => {
        setItems(array)
        setLoading(false)
      });
  }, [])

  return (
    <div>
      <Main />
      <div className='wrapper-products'>
        {/* {
          items.map((obj) => (isLoading ? <Skeleton/> :
            // <Tatoo title={obj.title} price={obj.price} image={obj.imageUrl} />
            <Tatoo {...obj} /> // similarly
          ))} */}
        {
          isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index} />) : items.map((obj) => <Tatoo key={obj.id} {...obj} />)
        }
      </div>
    </div>
  )
}
export default Home;