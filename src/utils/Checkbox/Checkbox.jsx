import React, { useState } from 'react'
import styles from './Checkbox.module.css'
const Checkbox = ({ children, onClick, isChecked }) => {
  const [checked, setChecked] = useState(isChecked)

  const handleCheckboxClick = () => {
    setChecked(!checked)
    if (onClick) {
      onClick()
    }
  }
  return (
    <div className={styles['checkbox-container']} onClick={handleCheckboxClick}>
      {/* <div className={`checkbox ${isChecked ? '' : 'unchecked'}`}></div> */}
      <div
        className={`${styles.checkbox} ${isChecked ? styles.unchecked : ''}`}
      ></div>
      <span className={styles['checkbox-label']}>{children}</span>
    </div>
  )
}

export default Checkbox
