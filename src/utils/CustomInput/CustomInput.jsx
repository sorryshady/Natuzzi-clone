import React from 'react'
import styles from './CustomInput.module.css'
const CustomInput = ({
  type,
  value,
  onChange,
  name,
  text,
  form,
  formType = 'subscribe',
}) => {
  let validity = true
  if (form === 'userForm') {
    if (value.trim().length === 0) {
      validity = false
    }
  }

  let dataText =
    formType === 'subscribe' ? '' : formType === 'login' ? 'login' : 'signUp'
  let style = form === 'subForm' ? { fontWeight: '600' } : { fontWeight: '400' }
  return (
    <div className={styles['input-container']}>
      <input
        type={type}
        placeholder=' '
        value={value}
        onChange={onChange}
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
