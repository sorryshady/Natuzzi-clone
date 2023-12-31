import React, { useEffect } from 'react'
import styles from './Login.module.css'
import useDynamicTitle from '../../../hooks/useDynamicTitle.js'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router'
const Login = () => {
  useDynamicTitle()
  const navigate = useNavigate()

  useEffect(() => {
    const jwt = sessionStorage.getItem('jwt')
      ? sessionStorage.getItem('jwt')
      : localStorage.getItem('jwt')
    if (jwt) {
      if (!window.location.pathname.includes('user')) {
        navigate('/user/dashboard')
      }
    }
  }, [])
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
