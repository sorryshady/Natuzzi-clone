import React from 'react'
import styles from './Login.module.css'
import useDynamicTitle from '../../../hooks/useDynamicTitle.js'
const Login = () => {
  useDynamicTitle()
  return (
    <>
      <div className={styles.container}></div>
    </>
  )
}

export default Login
