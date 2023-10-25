import React from 'react'

import styles from './index.module.css'


const NotFoundBlock = () => {
  return (
    <div>
        <h1 className={styles.root}>Ничего не найдено <span>😥</span></h1>
    </div>
  )
}
export default NotFoundBlock;