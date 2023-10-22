import React from 'react'
import styles from './FooterLinksSection.module.css'
import CustomLink from '../../../utils/CustomLink/CustomLink'
const ItaliaLinks = ({ onClick, onLoad }) => {
  return (
    <>
      <div className={styles['column-heading']}>Natuzzi Italia</div>
      <div className={`${styles['footer-links']} flex`} onClick={onClick}>
        <CustomLink
          dest={'/shop/natuzzi-italia/living-sofas-sectionals'}
          onLoad={onLoad}
        >
          Living
        </CustomLink>
        <CustomLink dest={'/shop/natuzzi-italia/dining-tables'} onLoad={onLoad}>
          Dining
        </CustomLink>
        <CustomLink
          dest={'/shop/natuzzi-italia/bedroom-accessories'}
          onLoad={onLoad}
        >
          Bedroom
        </CustomLink>
        <CustomLink
          dest={'/shop/natuzzi-italia/decor-lighting'}
          onLoad={onLoad}
        >
          Decor
        </CustomLink>
        <CustomLink
          dest={'/shop/natuzzi-italia/new-collection'}
          onLoad={onLoad}
        >
          New Collection
        </CustomLink>
        <CustomLink dest={'/'} onLoad={onLoad}>
          Sale
        </CustomLink>
        <CustomLink dest={'/'} onLoad={onLoad}>
          Quick Ship
        </CustomLink>
        <CustomLink
          dest={'/natuzzi-italia/about-natuzzi-italia'}
          onLoad={onLoad}
        >
          About Natuzzi Italia
        </CustomLink>
        <CustomLink
          dest={'/natuzzi-italia/warranty-natuzzi-italia'}
          onLoad={onLoad}
        >
          Warranty Natuzzi Italia
        </CustomLink>
        <CustomLink
          dest={
            'https://static.natuzzi.com/production/files/CARE_MAINTENANCE_NATUZZI_ITALIA.pdf'
          }
          newTab={true}
          onLoad={onLoad}
        >
          Care and Maintenance
        </CustomLink>
      </div>
    </>
  )
}

export default ItaliaLinks
