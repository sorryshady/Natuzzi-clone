import React from 'react'
import styles from './Dashboard.module.css'
import SideNav from './SideNav/SideNav'
const Dashboard = () => {
  return (
    <>
      <div className={styles['parent-container']}>
        <div className={styles.section}>
          <div className={styles.navMenu}>
            <SideNav />
          </div>
          <div className={styles.content}>Section 2</div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
