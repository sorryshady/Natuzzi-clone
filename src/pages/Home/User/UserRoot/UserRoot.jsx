import React, { useEffect } from 'react'
import axios from 'axios'
import { config } from '../../../../App'
import { enqueueSnackbar } from 'notistack'
import styles from './UserRoot.module.css'
import { Outlet, useNavigate } from 'react-router'
import SideNav from '../../../../utils/SideNav/SideNav'
import useViewportSize from '../../../../hooks/useViewportSize'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { globalActions } from '../../../../store/global-slice'
import MobileNav from '../../../../utils/MobileNav/MobileNav'
const UserRoot = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { width } = useViewportSize()

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${config.endpoint}/auth/logout`, {
        withCredentials: true,
      })
      if (response.status === 200) {
        localStorage.removeItem('firstName')
        localStorage.removeItem('id')
        document.cookie =
          'loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
        enqueueSnackbar(response.data.message, { variant: 'success' })
        dispatch(globalActions.setNavigating(true))
        setTimeout(() => {
          navigate('/login')
          dispatch(globalActions.setNavigating(false))
        }, 1000)
      }
    } catch (error) {
      console.log(error)
      enqueueSnackbar('Something went wrong.', { variant: 'error' })
    }
  }

  useEffect(() => {
    const userLoggedIn = Cookies.get('loggedIn')
    // console.log(userLoggedIn)
    if (!userLoggedIn) {
      if (!window.location.pathname.includes('/login')) {
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
            {width > 1024 && <SideNav logout={handleLogout} />}
            {width <= 1024 && <MobileNav logout={handleLogout} />}
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
