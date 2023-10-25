import React, { useState } from 'react'
import styles from './Login.module.css'
import useDynamicTitle from '../../../hooks/useDynamicTitle.js'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
const Login = () => {
  useDynamicTitle()
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
