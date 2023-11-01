import React, { useEffect, useState } from 'react'
import styles from './CustomInput.module.css'
const CustomInput = ({
  type,
  value,
  onChange,
  name,
  text,
  form,
  dataText,
  className,
  passwordData = '',
}) => {
  const [validity, setValidity] = useState(true)

  let spanStyle = form === 'userForm' ? styles.userSpan : ''

  const handleBlur = (e) => {
    if (form === 'userForm') {
      if (e.target.value.trim() === '') {
        setValidity(false)
      }
    }
  }
  const handleInput = (e) => {
    if (form === 'userForm') {
      if (e.target.value.trim().length > 0) {
        setValidity(true)
      } else {
        setValidity(false)
      }
    }
    /*EMAIL VALIDITY CHECK */
    const emailInputValue = e.target.name === 'email' ? e.target.value : ''
    const regex = /@.*\.[a-zA-Z]+/
    if (emailInputValue) {
      if (regex.test(emailInputValue)) {
        setValidity(true)
      } else {
        setValidity(false)
      }
    }
    /*PASSWORD CHECK */
    if (passwordData && e.target.name === 'confirmPassword') {
      if (passwordData === e.target.value) {
        setValidity(true)
      } else {
        setValidity(false)
      }
    }
  }

  let style = form === 'subForm' ? { fontWeight: '600' } : { fontWeight: '400' }
  return (
    <div className={`${styles['input-container']} ${className}`}>
      <input
        type={type}
        placeholder=' '
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        onInput={handleInput}
        name={name}
        style={style}
        className={`${form === 'subForm' ? '' : styles.userForm} ${
          validity ? '' : form === 'userForm' ? styles.invalid : ''
        }`}
        data-text={dataText}
      />
      <span
        className={`${form === 'subForm' ? '' : styles.userForm} ${
          validity ? '' : form === 'userForm' ? styles.invalid : ''
        } ${spanStyle}`}
      >
        {text}
      </span>
    </div>
  )
}

export default CustomInput
