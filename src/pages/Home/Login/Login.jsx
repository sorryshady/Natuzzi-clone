import React, { useEffect } from 'react'
import styles from './Login.module.css'
import useDynamicTitle from '../../../hooks/useDynamicTitle.js'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import Cookies from 'js-cookie'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router'
const Login = () => {
  useDynamicTitle()
  const navigate = useNavigate()

  useEffect(() => {
    const userLoggedIn = Cookies.get('loggedIn')
    if (userLoggedIn) {
      if (!window.location.pathname.includes('/user/dashboard')) {
        navigate('/user/dashboard')
        enqueueSnackbar('User already logged in.', { variant: 'warning' })
      }
    }
  }, [enqueueSnackbar, navigate])
  // let errorMsg = 'No customer account found'
  // let errorMsg = 'The credentials provided are incorrect'
  // let errorMsg = ''

  return (
    <>
      <div className={styles.container}>
        <div className={styles['sign-in']}>
          <SignIn />
        </div>
        <div className={styles['sign-up']}>
          <SignUp />
        </div>
      </div>
    </>
  )
}

export default Login
