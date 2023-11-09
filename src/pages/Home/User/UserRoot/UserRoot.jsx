import React from 'react'
import styles from './UserRoot.module.css'
import { Outlet } from 'react-router'
import SideNav from '../Dashboard/SideNav/SideNav'
const UserRoot = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.section}>
          <div className={styles.navMenu}>
            <SideNav />
          </div>
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserRoot
