import React, { useState } from 'react'
import styles from './SignIn.module.css'
import commonStyles from '../Login.module.css'
import Input from '../../../../utils/Input/Input'
import Checkbox from '../../../../utils/Checkbox/Checkbox'
import { Oval } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { config } from '../../../../App'
import axios from 'axios'
import { enqueueSnackbar } from 'notistack'
import { useNavigate } from 'react-router'
import { globalActions } from '../../../../store/global-slice'
import { persistUserInfo } from '../../../../utils/persistUserInfo'

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [submit, setSubmit] = useState(false)
  const { email, password } = useSelector((state) => state.loginSub.login)
  const [errorMsg, setErrorMsg] = useState('')

  const [rememberMe, setRememberMe] = useState(false)
  let signInValidity = false
  if (email && password) {
    signInValidity = true
  }

  const handleSignInCheckBox = () => {
    setRememberMe((prevValue) => !prevValue)
  }

  const performAPICall = async (data) => {
    try {
      setLoading(true)
      const response = await axios.post(`${config.endpoint}/auth/login`, data, {
        withCredentials: true,
      })
      setLoading(false)
      dispatch(globalActions.setNavigating(true))
      return response
    } catch (error) {
      setLoading(false)
      setErrorMsg(error.response.data.message)
      enqueueSnackbar(error.response.data.message, { variant: 'error' })
    }
  }
  const signInSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      email,
      password,
      rememberMe,
    }
    const response = await performAPICall(formData)
    if (response) {
      setSubmit(true)
      enqueueSnackbar('login successfull', { variant: 'success' })
      setErrorMsg('')
      setRememberMe(false)
      // console.log(response)
      persistUserInfo(response.data.user)

      setTimeout(() => {
        navigate('/user/dashboard')
        setSubmit(false)
        dispatch(globalActions.setNavigating(false))
      }, 1000)
    }
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
        <Input
          type={'email'}
          formType={'login'}
          registerType='login'
          name={'email'}
          placeholder={'email*'}
          submit={submit}
          className={styles.first}
        />
        <Input
          type={'password'}
          formType={'login'}
          registerType='login'
          name={'password'}
          placeholder={'password*'}
          submit={submit}
          validityCheck={false}
          className={styles.second}
        />
        {errorMsg && <div className={styles['errorMsg']}>{errorMsg}</div>}
        <div className={styles['signIn-actions']}>
          <Checkbox
            form={'userForm'}
            isChecked={rememberMe}
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
