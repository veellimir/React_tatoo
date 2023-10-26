import React from 'react'

import styles from '../components/NotFoundBl/index.module.css'
import '../css/Cart/Cart.css'


const Cart = () => {
  return (
    <div>
      <h1 className={styles.root}>Ваша Корзина</h1>
      <div className='wrapper-cart'>
        <div className='cart-cart'>
          <div className='cart'>
              <img src="" alt="" />
          </div>
          <div className='cart'>
              <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart;