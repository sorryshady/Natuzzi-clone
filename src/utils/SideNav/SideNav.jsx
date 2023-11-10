import React from 'react'
import styles from './SideNav.module.css'
import Underline from '../Underline/Underline'
import CustomLink from '../CustomLink/CustomLink'
import { useLocation } from 'react-router'
const SideNav = ({ logout }) => {
  const location = useLocation()
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles['your-services']}>
          <Underline active={location.pathname.includes('dashboard')}>
            <CustomLink dest={'/user/dashboard'}>Your Services</CustomLink>
          </Underline>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>YOUR ACCOUNT</div>
          <div className={styles.link}>
            <Underline active={location.pathname.includes('orders')}>
              <CustomLink dest={'/user/orders'}>Your orders</CustomLink>
            </Underline>
          </div>
          <div className={styles.link}>
            <Underline active={location.pathname.includes('profile')}>
              <CustomLink dest={'/user/profile'}>
                Profile and preferences
              </CustomLink>
            </Underline>
          </div>
          <div className={styles.link}>
            <Underline active={location.pathname.includes('address')}>
              <CustomLink dest={'/user/address'}>Addresses</CustomLink>
            </Underline>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>YOUR PRODUCTS</div>
          <div className={styles.link}>
            <Underline active={location.pathname.includes('wishlist')}>
              <CustomLink dest={'/user/wishlist'}>Wishlist</CustomLink>
            </Underline>
          </div>
          <div className={styles.link}>
            <Underline active={location.pathname.includes('projects')}>
              <CustomLink dest={'/user/projects'}>Saved Projects</CustomLink>
            </Underline>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.heading}>NEED HELP</div>
          <div className={styles.link}>
            <Underline active={location.pathname.includes('help')}>
              <CustomLink dest={'/user/help'}>Help and Contacts</CustomLink>
            </Underline>
          </div>
        </div>
      </div>
      <button className={styles.logout} onClick={logout}>
        Logout
      </button>
    </>
  )
}

export default SideNav
