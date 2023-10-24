import React, { useState } from 'react'
import styles from './CustomInput.module.css'
const CustomInput = ({
  type,
  value,
  onChange,
  name,
  text,
  form,
  formType = 'subscribe',
  className,
}) => {
  const [validity, setValidity] = useState(true)
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
  }

  let dataText =
    formType === 'subscribe' ? '' : formType === 'login' ? 'login' : 'signUp'
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
          validity ? '' : styles.invalid
        }`}
        data-text={dataText}
      />
      <span
        className={`${form === 'subForm' ? '' : styles.userForm} ${
          validity ? '' : styles.invalid
        }`}
      >
        {text}
      </span>
    </div>
  )
}

export default CustomInput
