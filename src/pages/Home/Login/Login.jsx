import React, { useState } from 'react'
import styles from './Login.module.css'
import useDynamicTitle from '../../../hooks/useDynamicTitle.js'
import Checkbox from '../../../utils/Checkbox/Checkbox'
import CustomInput from '../../../utils/CustomInput/CustomInput'
const Login = () => {
  useDynamicTitle()
  let errorMsg = 'No customer account found'
  // let errorMsg = 'The credentials provided are incorrect'
  // let errorMsg = ''

  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })
  const handleChange = (e) => {
    const formType = e.target.getAttribute('data-text')
    if (formType === 'login') {
      setSignInData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }))
    }
  }
  const handleSignInCheckBox = () => {
    setSignInData((prevData) => ({
      ...prevData,
      rememberMe: !prevData.rememberMe,
    }))
  }
  const signInSubmit = (e) => {
    e.preventDefault()
    console.log(signInData)
    setSignInData({
      email: '',
      password: '',
      rememberMe: false,
    })
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles['sign-in']}>
          <div className={styles['section-heading']}>
            <div>Sign In</div>
          </div>
          <form className={styles['signIn-form']} onSubmit={signInSubmit}>
            <CustomInput
              type={'text'}
              onChange={handleChange}
              value={signInData.email}
              text={'email*'}
              name={'email'}
              form={'userForm'}
              formType={'login'}
            />
            <CustomInput
              type={'password'}
              onChange={handleChange}
              value={signInData.password}
              text={'Password*'}
              name={'password'}
              form={'userForm'}
              formType={'login'}
            />
            <div className={styles['forgot-password']}>
              Did you forget your password?
            </div>
            {errorMsg && <div className={styles['errorMsg']}>{errorMsg}</div>}
            <div className={styles['signIn-actions']}>
              <Checkbox
                form={'userForm'}
                isChecked={signInData.rememberMe}
                onClick={() => handleSignInCheckBox()}
              >
                Remember me
              </Checkbox>
              <button className={styles.button}>Access</button>
            </div>
          </form>
        </div>
        <div className={styles['sign-up']}>
          <div className={styles['section-heading']}>Create an Account</div>
        </div>
      </div>
    </>
  )
}

export default Login
