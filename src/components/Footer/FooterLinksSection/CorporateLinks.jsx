import React from 'react'
import styles from './FooterLinksSection.module.css'
import CustomLink from '../../../utils/CustomLink/CustomLink'
const CorporateLinks = ({ onClick, onLoad }) => {
  return (
    <>
      <div className={styles['column-heading']}>Corporate</div>
      <div className={`${styles['footer-links']} flex`} onClick={onClick}>
        <CustomLink dest={'/dealer-program'} onLoad={onLoad}>
          Dealer Program
        </CustomLink>
        <CustomLink dest={'/meet-natuzzi'} onLoad={onLoad}>
          Meet Natuzzi
        </CustomLink>
        <CustomLink dest={'/contact-us'} onLoad={onLoad}>
          Contact Us
        </CustomLink>
        <CustomLink
          dest={
            'https://www.linkedin.com/company/natuzzi/?originalSubdomain=it'
          }
          newTab={true}
          onLoad={onLoad}
        >
          Careers
        </CustomLink>
        <CustomLink dest={'/ir/corporate-governance'} onLoad={onLoad}>
          Governance
        </CustomLink>
        <CustomLink dest={'/ir/investors'} onLoad={onLoad}>
          Investors
        </CustomLink>
        <CustomLink dest={'/whistleblowing'} onLoad={onLoad}>
          Whistleblowing
        </CustomLink>
      </div>
    </>
  )
}

export default CorporateLinks
