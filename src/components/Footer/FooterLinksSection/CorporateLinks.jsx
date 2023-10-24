import React from 'react'
import styles from './FooterLinksSection.module.css'
import CustomLink from '../../../utils/CustomLink/CustomLink'
const CorporateLinks = () => {
  return (
    <>
      <div className={styles['column-heading']}>Corporate</div>
      <div className={`${styles['footer-links']} flex`}>
        <CustomLink dest={'/dealer-program'}>Dealer Program</CustomLink>
        <CustomLink dest={'/meet-natuzzi'}>Meet Natuzzi</CustomLink>
        <CustomLink dest={'/contact-us'}>Contact Us</CustomLink>
        <CustomLink
          dest={
            'https://www.linkedin.com/company/natuzzi/?originalSubdomain=it'
          }
          newTab={true}
        >
          Careers
        </CustomLink>
        <CustomLink dest={'/ir/corporate-governance'}>Governance</CustomLink>
        <CustomLink dest={'/ir/investors'}>Investors</CustomLink>
        <CustomLink dest={'/whistleblowing'}>Whistleblowing</CustomLink>
      </div>
    </>
  )
}

export default CorporateLinks
