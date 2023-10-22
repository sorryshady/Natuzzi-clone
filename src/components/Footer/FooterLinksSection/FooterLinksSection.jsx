import React from 'react'
import styles from './FooterLinksSection.module.css'
import CustomLink from '../../../utils/CustomLink/CustomLink'
const FooterLinksSection = () => {
  return (
    <>
      <div className={styles['grid-columns']}>
        <div className={styles['column-heading']}>Natuzzi Italia</div>
        <div className={`${styles['footer-links']} flex`}>
          <CustomLink dest={'/shop/natuzzi-italia/living-sofas-sectionals'}>
            Living
          </CustomLink>
          <CustomLink dest={'/shop/natuzzi-italia/dining-tables'}>
            Dining
          </CustomLink>
          <CustomLink dest={'/shop/natuzzi-italia/bedroom-accessories'}>
            Bedroom
          </CustomLink>
          <CustomLink dest={'/shop/natuzzi-italia/decor-lighting'}>
            Decor
          </CustomLink>
          <CustomLink dest={'/shop/natuzzi-italia/new-collection'}>
            New Collection
          </CustomLink>
          <CustomLink dest={'/'}>Sale</CustomLink>
          <CustomLink dest={'/'}>Quick Ship</CustomLink>
          <CustomLink dest={'/natuzzi-italia/about-natuzzi-italia'}>
            About Natuzzi Italia
          </CustomLink>
          <CustomLink dest={'/natuzzi-italia/warranty-natuzzi-italia'}>
            Warranty Natuzzi Italia
          </CustomLink>
          <CustomLink
            dest={
              'https://static.natuzzi.com/production/files/CARE_MAINTENANCE_NATUZZI_ITALIA.pdf'
            }
            newTab={true}
          >
            Care and Maintenance
          </CustomLink>
        </div>
      </div>
      <div className={styles['grid-columns']}>
        <div className={styles['column-heading']}>Natuzzi Editions</div>
        <div className={`${styles['footer-links']} flex`}>
          <CustomLink dest={'/shop/natuzzi-editions/living-sofas-sectionals'}>
            Living
          </CustomLink>
          <CustomLink dest={'/shop/natuzzi-editions/dining-tables'}>
            Dining
          </CustomLink>
          <CustomLink dest={'/shop/natuzzi-editions/bedroom-beds'}>
            Bedroom
          </CustomLink>
          <CustomLink dest={'/shop/natuzzi-editions/traveller-collection'}>
            Traveller Collection
          </CustomLink>
          <CustomLink dest={'/shop/natuzzi-editions/most-loved'}>
            Most Loved
          </CustomLink>
          <CustomLink dest={'/natuzzi-editions/about-natuzzi-editions'}>
            About Natuzzi Editions
          </CustomLink>
          <CustomLink dest={'/natuzzi-editions/warranty-natuzzi-editions'}>
            Warranty Natuzzi Editions
          </CustomLink>
          <CustomLink
            dest={
              'https://static.natuzzi.com/production/files/CARE_MAINTENANCE_NATUZZI_EDITIONS.pdf'
            }
            newTab={true}
          >
            Care and Maintenance Editions
          </CustomLink>
        </div>
      </div>
      <div className={styles['grid-columns']}>
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
      </div>
      <div className={styles['grid-columns']}>
        <div className={styles['column-heading']}>Service</div>
        <div className={`${styles['footer-links']} flex`}>
          <CustomLink dest={'/privacy-policy'}>Privacy Policy</CustomLink>
          <CustomLink dest={'/cookie-policy'}>Cookie Policy</CustomLink>
          <CustomLink dest={'/terms-and-conditions'}>
            Terms and Conditions
          </CustomLink>
        </div>
      </div>
    </>
  )
}

export default FooterLinksSection
