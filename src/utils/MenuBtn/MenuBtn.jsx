import React from 'react'
import styles from './MenuBtn.module.css'
import Menu from '../../assets/Images/Menu.svg'
const MenuBtn = () => {
  return (
    <div className={styles.container}>
      <div className={styles['menuBtn-mobile']}>
        <img src={Menu} alt='menu btn' />
      </div>
    </div>
  )
}

export default MenuBtn
