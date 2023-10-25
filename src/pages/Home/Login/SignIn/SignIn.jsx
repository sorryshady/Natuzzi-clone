import React, { useState } from 'react'
import styles from './SignIn.module.css'
import commonStyles from '../Login.module.css'
import CustomInput from '../../../../utils/CustomInput/CustomInput'
import Checkbox from '../../../../utils/Checkbox/Checkbox'
import { Oval } from 'react-loader-spinner'
const SignIn = () => {
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
    setSignInData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
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
    <div className={styles.signInContainer}>
      <div className={commonStyles['section-heading']}>
        <div>Sign In</div>
      </div>
      <form
        className={`${styles['signIn-form']} ${
          loading && commonStyles.loading
        }`}
        onSubmit={signInSubmit}
      >
        <CustomInput
          type={'text'}
          onChange={handleChange}
          value={signInData.email}
          text={'email*'}
          name={'email'}
          form={'userForm'}
          className={styles.first}
        />
        <CustomInput
          type={'password'}
          onChange={handleChange}
          value={signInData.password}
          text={'Password*'}
          name={'password'}
          form={'userForm'}
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
            className={`${commonStyles.button} ${
              signInValidity ? commonStyles.active : commonStyles.invalid
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
  )
}

export default SignIn
