import React from 'react'
import styles from './MobileSideNav.module.css'
import { useLocation } from 'react-router'
import CustomLink from '../CustomLink/CustomLink'
const MobileSideNav = ({ logout }) => {
  const location = useLocation()
  return (
    <>
      <div className={styles.navContainer}>
        <div
          className={`${styles.links} ${
            location.pathname.includes('dashboard') && styles.active
          }`}
        >
          <CustomLink dest={'/user/dashboard'}>Your Services</CustomLink>
        </div>
        <div
          className={`${styles.links} ${
            location.pathname.includes('profile') && styles.active
          }`}
        >
          <CustomLink dest={'/user/profile'}>
            Profile and preferences
          </CustomLink>
        </div>
        <div
          className={`${styles.links} ${
            location.pathname.includes('wishlist') && styles.active
          }`}
        >
          <CustomLink dest={'/user/wishlist'}>Wishlist</CustomLink>
        </div>
        <div
          className={`${styles.links} ${
            location.pathname.includes('projects') && styles.active
          }`}
        >
          <CustomLink dest={'/user/projects'}>Saved Projects</CustomLink>
        </div>
        <div
          className={`${styles.links} ${
            location.pathname.includes('help') && styles.active
          }`}
        >
          <CustomLink dest={'/user/help'}>Help and Contacts</CustomLink>
        </div>
        <button className={styles.logout} onClick={logout}>
          Logout
        </button>
      </div>
    </>
  )
}

export default MobileSideNav
