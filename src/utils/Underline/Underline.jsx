import React from 'react'
import styles from './Underline.module.css'
import CustomLink from '../CustomLink/CustomLink'
const Underline = ({ children, dest }) => {
  return (
    <CustomLink dest={dest}>
      <div className={styles['content-container']}>{children}</div>
    </CustomLink>
  )
}

export default Underline
