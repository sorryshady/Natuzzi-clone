import React from 'react'
import styles from './UserRoot.module.css'
import { Outlet } from 'react-router'
import SideNav from '../SideNav/SideNav'
import useViewportSize from '../../../../hooks/useViewportSize'
import MobileSideNav from '../mobileSideNav/mobileSideNav'
const UserRoot = () => {
  const { width } = useViewportSize()
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.section}>
          <div className={styles.navMenu}>
            {width > 1024 && <SideNav />}
            {width <= 1024 && <MobileSideNav />}
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
