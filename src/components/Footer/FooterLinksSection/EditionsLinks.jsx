import React from 'react'
import styles from './FooterLinksSection.module.css'
import CustomLink from '../../../utils/CustomLink/CustomLink'
const EditionsLinks = () => {
  return (
    <>
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
    </>
  )
}
export default EditionsLinks
