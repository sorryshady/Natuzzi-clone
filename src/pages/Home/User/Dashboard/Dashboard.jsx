import React, { useEffect } from 'react'
import styles from './Dashboard.module.css'
import SideNav from './SideNav/SideNav'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router'
import { enqueueSnackbar } from 'notistack'
const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const userLoggedIn = Cookies.get('loggedIn')
    if (!userLoggedIn) {
      if (!window.location.pathname.includes('/login')) {
        navigate('/login')
        enqueueSnackbar('No user logged in.', { variant: 'warning' })
      }
    }
  }, [])
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
