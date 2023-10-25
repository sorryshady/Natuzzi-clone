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
  let boxStyle = form === 'userForm' ? styles.bigger : ''

  let labelStyle = form === 'userForm' ? styles.fontBig : ''
  return (
    <div className={styles['checkbox-container']} onClick={handleCheckboxClick}>
      {/* <div className={`checkbox ${isChecked ? '' : 'unchecked'}`}></div> */}
      <div
        className={`${styles.checkbox} ${
          isChecked ? styles.unchecked : ''
        } ${boxStyle}`}
      ></div>
      <span className={`${styles['checkbox-label']} ${labelStyle}`}>
        {children}
      </span>
    </div>
  )
}

export default Checkbox
