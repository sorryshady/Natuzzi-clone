import React, { useEffect } from 'react'
import styles from './UserRoot.module.css'
import { Outlet, useLocation, useNavigate } from 'react-router'
import SideNav from '../../../../utils/SideNav/SideNav'
import MobileSideNav from '../../../../utils/MobileSideNav/MobileSideNav'
import useViewportSize from '../../../../hooks/useViewportSize'
import Cookies from 'js-cookie'
const UserRoot = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { width } = useViewportSize()

  useEffect(() => {
    const userLoggedIn = Cookies.get('loggedIn')
    if (!userLoggedIn) {
      if (!location.pathname.includes('/login')) {
        navigate('/login')
        enqueueSnackbar('No user logged in.', { variant: 'warning' })
      }
    }
  }, [])
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
