import React, { useEffect } from 'react'
import axios from 'axios'
import { config } from '../../../../App'
import { enqueueSnackbar } from 'notistack'
import styles from './UserRoot.module.css'
import { Outlet, useNavigate } from 'react-router'
import SideNav from '../../../../utils/SideNav/SideNav'
import useViewportSize from '../../../../hooks/useViewportSize'
import { useDispatch } from 'react-redux'
import { globalActions } from '../../../../store/global-slice'
import MobileNav from '../../../../utils/MobileNav/MobileNav'
const UserRoot = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { width } = useViewportSize()

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${config.endpoint}/auth/logout`)
      if (response.status === 200) {
        localStorage.getItem('jwt')
          ? localStorage.removeItem('jwt')
          : sessionStorage.removeItem('jwt')
        localStorage.getItem('firstName')
          ? localStorage.removeItem('firstName')
          : sessionStorage.removeItem('firstName')
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
    const jwt = sessionStorage.getItem('jwt')
      ? sessionStorage.getItem('jwt')
      : localStorage.getItem('jwt')
    if (!jwt) {
      if (!window.location.pathname.includes('/login')) {
        navigate('/login')
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

export async function loader() {
  const token = sessionStorage.getItem('jwt')
    ? sessionStorage.getItem('jwt')
    : localStorage.getItem('jwt')
  if (token) {
    const response = await axios.get(`${config.endpoint}/auth/user`, {
      headers: {
        Authorization: token,
      },
    })
    if (response.status === 200) {
      return response.data
    } else {
      enqueueSnackbar('Something went wrong', { variant: 'error' })
      throw new Error('Internal Server Error')
    }
  }

  return null
} 