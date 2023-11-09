import React, { useEffect } from 'react'
import styles from './Dashboard.module.css'
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
      <div className={styles.content}>Section 2</div>
    </>
  )
}

export default Dashboard
