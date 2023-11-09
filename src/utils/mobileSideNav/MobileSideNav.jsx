import React from 'react'
import styles from './MobileSideNav.module.css'
import { useLocation } from 'react-router'
const MobileSideNav = () => {
  const location = useLocation()
  return (
    <>
      <div className={styles.navContainer}>
        <div
          className={`${styles.links} ${
            location.pathname.includes('dashboard') && styles.active
          }`}
        >
          Your Services
        </div>
        <div
          className={`${styles.links} ${
            location.pathname.includes('profile') && styles.active
          }`}
        >
          Profile and preferences
        </div>
        <div
          className={`${styles.links} ${
            location.pathname.includes('wishlist') && styles.active
          }`}
        >
          Wishlist
        </div>
        <div
          className={`${styles.links} ${
            location.pathname.includes('projects') && styles.active
          }`}
        >
          Saved Projects
        </div>
        <div
          className={`${styles.links} ${
            location.pathname.includes('help') && styles.active
          }`}
        >
          Help and contacts
        </div>
        <button className={styles.logout}>Logout</button>
      </div>
    </>
  )
}

export default MobileSideNav
