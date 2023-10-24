import React, { useState } from 'react'
import styles from './Login.module.css'
import useDynamicTitle from '../../../hooks/useDynamicTitle.js'
import Checkbox from '../../../utils/Checkbox/Checkbox'
import CustomInput from '../../../utils/CustomInput/CustomInput'
import { Oval } from 'react-loader-spinner'
const Login = () => {
  useDynamicTitle()
  // let errorMsg = 'No customer account found'
  // let errorMsg = 'The credentials provided are incorrect'
  // let errorMsg = ''
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })
  let signInValidity = false
  if (
    signInData.email.trim().length > 0 &&
    signInData.password.trim().length > 0
  ) {
    signInValidity = true
  }
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
    setLoading(true)
    // setTimeout(() => {
    //   console.log(signInData)
    //   setSignInData({
    //     email: '',
    //     password: '',
    //     rememberMe: false,
    //   })
    //   setLoading(false)
    // }, 2000)
    setTimeout(() => {
      console.log(signInData)
      setErrorMsg('No customer account found')
      setLoading(false)
    }, 2000)
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles['sign-in']}>
          <div className={styles['section-heading']}>
            <div>Sign In</div>
          </div>
          <form
            className={`${styles['signIn-form']} ${loading && styles.loading}`}
            onSubmit={signInSubmit}
          >
            <CustomInput
              type={'text'}
              onChange={handleChange}
              value={signInData.email}
              text={'email*'}
              name={'email'}
              form={'userForm'}
              formType={'login'}
              className={styles.first}
            />
            <CustomInput
              type={'password'}
              onChange={handleChange}
              value={signInData.password}
              text={'Password*'}
              name={'password'}
              form={'userForm'}
              formType={'login'}
              className={styles.second}
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
              <button
                disabled={!signInValidity}
                className={`${styles.button} ${
                  signInValidity ? styles.active : styles.invalid
                }`}
              >
                {loading ? (
                  <Oval
                    height={21}
                    width={21}
                    strokeWidth={5}
                    strokeWidthSecondary={5}
                    color='#000'
                    secondaryColor='#fff'
                  />
                ) : (
                  <span>Access</span>
                )}
              </button>
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
