import React from 'react'
import styles from './FooterLinksSection.module.css'
import CustomLink from '../../../utils/CustomLink/CustomLink'
const ServiceLinks = ({ onClick, onLoad }) => {
  return (
    <>
      <div className={styles['column-heading']}>Service</div>
      <div className={`${styles['footer-links']} flex`} onClick={onClick}>
        <CustomLink dest={'/privacy-policy'} onLoad={onLoad}>
          Privacy Policy
        </CustomLink>
        <CustomLink dest={'/cookie-policy'} onLoad={onLoad}>
          Cookie Policy
        </CustomLink>
        <CustomLink dest={'/terms-and-conditions'} onLoad={onLoad}>
          Terms and Conditions
        </CustomLink>
      </div>
    </>
  )
}

export default ServiceLinks
