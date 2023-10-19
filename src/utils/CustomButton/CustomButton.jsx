import React from 'react'
import styles from './CustomButton.module.css'
const CustomButton = () => {
  return (
    <div className={styles.button}>
      <div className={styles.circle}></div>
      <div className={styles.arrow}></div>
    </div>
  )
}

export default CustomButton
