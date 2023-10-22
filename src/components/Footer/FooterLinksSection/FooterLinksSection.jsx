import React from 'react'
import styles from './FooterLinksSection.module.css'
import ItaliaLinks from './ItaliaLinks'
import EditionsLinks from './EditionsLinks'
import CorporateLinks from './CorporateLinks'
import ServiceLinks from './ServiceLinks'
const FooterLinksSection = ({ onClick, onLoad }) => {
  return (
    <>
      <div className={styles['grid-columns']}>
        <ItaliaLinks onClick={onClick} onLoad={onLoad} />
      </div>
      <div className={styles['grid-columns']}>
        <EditionsLinks onClick={onClick} onLoad={onLoad} />
      </div>
      <div className={styles['grid-columns']}>
        <CorporateLinks onClick={onClick} onLoad={onLoad} />
      </div>
      <div className={styles['grid-columns']}>
        <ServiceLinks onClick={onClick} onLoad={onLoad} />
      </div>
    </>
  )
}

export default FooterLinksSection
