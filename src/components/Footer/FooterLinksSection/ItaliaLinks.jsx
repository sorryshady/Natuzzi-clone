import React from 'react'
import styles from './FooterLinksSection.module.css'
import CustomLink from '../../../utils/CustomLink/CustomLink'
const ItaliaLinks = () => {
  return (
    <>
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
    </>
  )
}

export default ItaliaLinks
