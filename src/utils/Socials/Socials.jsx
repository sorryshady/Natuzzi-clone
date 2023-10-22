import React from 'react'
import styles from './Socials.module.css'
import CustomLink from '../CustomLink/CustomLink'
const Socials = ({ src, name, dest, newTab }) => {
  return (
    <CustomLink dest={dest} newTab={newTab}>
      <div className={styles.logoContainer}>
        <img src={src} alt={name} className={styles.logo} />
      </div>
    </CustomLink>
  )
}

export default Socials
