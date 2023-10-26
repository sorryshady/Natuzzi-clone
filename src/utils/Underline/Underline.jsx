import React from 'react'
import styles from './Underline.module.css'
import CustomLink from '../CustomLink/CustomLink'
const Underline = ({ children, dest, active }) => {
  return (
    <CustomLink dest={dest}>
      <div
        className={`${styles['content-container']} ${
          active ? styles.hover : ''
        }`}
      >
        {children}
      </div>
    </CustomLink>
  )
}

export default Underline
