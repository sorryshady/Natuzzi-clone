import React, { useState } from 'react'
import styles from './Checkbox.module.css'
const Checkbox = ({ children, onClick, isChecked, form }) => {
  const [checked, setChecked] = useState(isChecked)

  const handleCheckboxClick = () => {
    setChecked(!checked)
    if (onClick) {
      onClick()
    }
  }
  let boxStyle =
    form === 'userForm'
      ? {
          minHeight: '25px',
          minWidth: '25px',
          borderWidth: '2px',
        }
      : { height: '20px', width: '20px' }

  let labelStyle =
    form === 'userForm' ? { fontSize: '1.5rem' } : { fontSize: '1.2rem' }
  return (
    <div className={styles['checkbox-container']} onClick={handleCheckboxClick}>
      {/* <div className={`checkbox ${isChecked ? '' : 'unchecked'}`}></div> */}
      <div
        className={`${styles.checkbox} ${isChecked ? styles.unchecked : ''}`}
        style={boxStyle}
      ></div>
      <span className={styles['checkbox-label']} style={labelStyle}>
        {children}
      </span>
    </div>
  )
}

export default Checkbox
