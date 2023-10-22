import React from 'react'
import styles from './TradeContract.module.css'
import useDynamicTitle from '../../../hooks/useDynamicTitle'
const TradeContract = () => {
  useDynamicTitle()
  return (
    <>
      <div className={styles.container}></div>
    </>
  )
}

export default TradeContract
