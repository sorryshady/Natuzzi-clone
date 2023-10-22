import React from 'react'
import styles from './FooterLinksSection.module.css'
import CustomLink from '../../../utils/CustomLink/CustomLink'
const EditionsLinks = ({ onClick, onLoad }) => {
  return (
    <>
      <div className={styles['column-heading']}>Natuzzi Editions</div>
      <div className={`${styles['footer-links']} flex`} onClick={onClick}>
        <CustomLink
          dest={'/shop/natuzzi-editions/living-sofas-sectionals'}
          onLoad={onLoad}
        >
          Living
        </CustomLink>
        <CustomLink
          dest={'/shop/natuzzi-editions/dining-tables'}
          onLoad={onLoad}
        >
          Dining
        </CustomLink>
        <CustomLink
          dest={'/shop/natuzzi-editions/bedroom-beds'}
          onLoad={onLoad}
        >
          Bedroom
        </CustomLink>
        <CustomLink
          dest={'/shop/natuzzi-editions/traveller-collection'}
          onLoad={onLoad}
        >
          Traveller Collection
        </CustomLink>
        <CustomLink dest={'/shop/natuzzi-editions/most-loved'} onLoad={onLoad}>
          Most Loved
        </CustomLink>
        <CustomLink
          dest={'/natuzzi-editions/about-natuzzi-editions'}
          onLoad={onLoad}
        >
          About Natuzzi Editions
        </CustomLink>
        <CustomLink
          dest={'/natuzzi-editions/warranty-natuzzi-editions'}
          onLoad={onLoad}
        >
          Warranty Natuzzi Editions
        </CustomLink>
        <CustomLink
          dest={
            'https://static.natuzzi.com/production/files/CARE_MAINTENANCE_NATUZZI_EDITIONS.pdf'
          }
          newTab={true}
          onLoad={onLoad}
        >
          Care and Maintenance Editions
        </CustomLink>
      </div>
    </>
  )
}
export default EditionsLinks
