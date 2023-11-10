import React, { useState } from 'react'
import styles from './RadioButtons.module.css'
const RadioButtons = ({ selected, text, onClick }) => {
  const [checked, setChecked] = useState(selected)
  const handleClick = () => {
    setChecked(!checked)
    if (onClick) {
      onClick()
    }
  }
  return (
    <>
      <div className={styles.radioContainer} onClick={handleClick}>
        <div
          className={`${styles.radioButton} ${selected ? styles.checked : ''}`}
        ></div>
        <div className={styles.text}>{text}</div>
      </div>
    </>
  )
}

export default RadioButtons
