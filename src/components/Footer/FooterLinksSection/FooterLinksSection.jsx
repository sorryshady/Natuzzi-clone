import React from 'react'
import styles from './FooterLinksSection.module.css'
import ItaliaLinks from './ItaliaLinks'
import EditionsLinks from './EditionsLinks'
import CorporateLinks from './CorporateLinks'
import ServiceLinks from './ServiceLinks'
const FooterLinksSection = () => {
  return (
    <>
      <div className={styles['grid-columns']}>
        <ItaliaLinks />
      </div>
      <div className={styles['grid-columns']}>
        <EditionsLinks />
      </div>
      <div className={styles['grid-columns']}>
        <CorporateLinks />
      </div>
      <div className={styles['grid-columns']}>
        <ServiceLinks />
      </div>
    </>
  )
}

export default FooterLinksSection
