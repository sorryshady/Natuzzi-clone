import React from 'react'
import styles from './Socials.module.css'
import CustomLink from '../CustomLink/CustomLink'
const Socials = ({ src, name, dest }) => {
  return (
    <CustomLink dest={dest}>
      <div className={styles.logoContainer}>
        <img src={src} alt={name} className={styles.logo} />
      </div>
    </CustomLink>
  )
}

export default Socials
