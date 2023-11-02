import React, { useRef, useState } from 'react'
import styles from './Input.module.css'
import { emailValidate } from '../validationChecks/emailValidation'
import {
  passwordValidate,
  passwordEquality,
} from '../validationChecks/passwordValidation'
import { useDispatch } from 'react-redux'
import { registerActions } from '../../store/register-slice'
import { loginSubActions } from '../../store/loginSub-slice'

const Input = ({
  type,
  formType, //private, company, subscribe
  registerType = 'signup', // signup, login, subscribe
  name,
  placeholder,
  validityCheck = true,
  value = '',
  submit,
  className,
}) => {
  let debounce
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const [isTyping, setIsTyping] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [validity, setValidity] = useState(true)
  const [showPass, setShowPass] = useState(true)
  const [inputType, setInputType] = useState(type)

  const dispatchRegister = (receivedValue = '') => {
    if (receivedValue !== 'empty') {
      dispatch(
        registerActions.updateField({
          fieldPath: `${formType}.${name}`,
          value: inputRef.current.value,
        })
      )
    } else {
      dispatch(
        registerActions.updateField({
          fieldPath: `${formType}.${name}`,
          value: '',
        })
      )
    }
  }

  const dispatchLoginSub = (receivedValue = '') => {
    if (receivedValue !== 'empty') {
      dispatch(
        loginSubActions.updateField({
          fieldPath: `${formType}.${name}`,
          value: inputRef.current.value,
        })
      )
    } else {
      dispatch(
        loginSubActions.updateField({
          fieldPath: `${formType}.${name}`,
          value: '',
        })
      )
    }
  }

  const handleBlur = (e) => {
    if (e.target.value.trim() === '') {
      setErrorMsg('')
      setValidity(false)
    }
  }

  const handleChange = () => {
    clearTimeout(debounce)
    debounce = setTimeout(() => {
      // console.log('debouncing')
      handleDispatch()
    }, 1000)
    setIsTyping(true)
    setValidity(true)
  }

  const handleShowPass = () => {
    setShowPass(!showPass)
    showPass ? setInputType('text') : setInputType('password')
  }

  const handleDispatch = () => {
    if (
      isTyping &&
      (type === 'email' || type === 'password') &&
      validityCheck
    ) {
      // console.log('performing check')
      performValidityCheck(inputRef.current.value)
    }
    if (isTyping && (type === 'text' || !validityCheck)) {
      if (registerType === 'register') {
        dispatchRegister()
      } else {
        dispatchLoginSub()
      }
    }
  }

  const performValidityCheck = (checkValue) => {
    if (type === 'email') {
      const valid = emailValidate(checkValue)
      if (!valid) {
        setValidity(true)
        if (registerType === 'signup') {
          dispatchRegister()
        } else {
          dispatchLoginSub()
        }
        setErrorMsg('')
      } else {
        setValidity(false)
        if (registerType === 'signup') {
          dispatchRegister('empty')
        } else {
          dispatchLoginSub('empty')
        }
        setErrorMsg(valid)
      }
    }
    if (type === 'password') {
      let valid
      if (name === 'password') {
        valid = passwordValidate(checkValue)
      } else if (name === 'confirmPassword') {
        valid = passwordEquality(checkValue, value)
      }
      if (!valid) {
        setValidity(true)
        if (registerType === 'signup') {
          dispatchRegister()
        } else {
          dispatchLoginSub()
        }
        setErrorMsg('')
      } else {
        setValidity(false)
        if (registerType === 'signup') {
          dispatchRegister('empty')
        } else {
          dispatchLoginSub('empty')
        }
        setErrorMsg(valid)
      }
    }
  }

  if (submit) {
    inputRef.current.value = ''
    if (registerType === 'register') {
      dispatchRegister('empty')
    } else {
      dispatchLoginSub('empty')
    }
  }

  return (
    <>
      <div className={`${styles['main-container']} ${className}`}>
        <input
          type={inputType}
          className={`${styles.input} ${
            registerType !== 'subscribe' && styles.notSubscribeInput
          } ${
            validity ? '' : registerType !== 'subscribe' ? styles.invalid : ''
          }`}
          placeholder=' '
          ref={inputRef}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span
          className={`${styles.placeholder}  ${
            registerType !== 'subscribe' && styles.notSubscribe
          } ${
            validity ? '' : registerType != 'subscribe' ? styles.invalid : ''
          }`}
        >
          {placeholder}
        </span>
        <div className={styles.actions}>
          {registerType === 'login' && type === 'password' ? (
            <span className={styles.forgot}>Forgot password?</span>
          ) : (
            <span className={styles.errorMsg}>{errorMsg}</span>
          )}
          {type === 'password' && (
            <span
              className={`${styles.show} ${!showPass ? styles.active : ''}`}
              onClick={handleShowPass}
            >
              Show
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export default Input
