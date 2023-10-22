import React from 'react'
import styles from './Underline.module.css'
import CustomLink from '../CustomLink/CustomLink'
const Underline = ({ children, dest, onClick, onLoad }) => {
  return (
    <CustomLink dest={dest} onLoad={onLoad}>
      <div className={styles['content-container']} onClick={onClick}>
        {children}
      </div>
    </CustomLink>
  )
}

export default Underline
