import React from 'react'
import styles from './FooterLinksSection.module.css'
import CustomLink from '../../../utils/CustomLink/CustomLink'
const ServiceLinks = () => {
  return (
    <>
      <div className={styles['column-heading']}>Service</div>
      <div className={`${styles['footer-links']} flex`}>
        <CustomLink dest={'/privacy-policy'}>Privacy Policy</CustomLink>
        <CustomLink dest={'/cookie-policy'}>Cookie Policy</CustomLink>
        <CustomLink dest={'/terms-and-conditions'}>
          Terms and Conditions
        </CustomLink>
      </div>
    </>
  )
}

export default ServiceLinks
