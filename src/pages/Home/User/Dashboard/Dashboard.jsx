import React, { useEffect } from 'react'
import styles from './Dashboard.module.css'
const Dashboard = () => {
  const userName = localStorage.getItem('firstName')
  return (
    <>
      <div className={styles.container}>
        <div></div>
      </div>
    </>
  )
}

export default Dashboard
