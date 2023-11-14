import React from 'react'
import styles from './DownloadComponent.module.css'
import CustomLink from '../../../../../utils/CustomLink/CustomLink'
const DownloadComponent = ({ version, link }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            Care and Maintenance Natuzzi {version}
          </div>
          <div className={styles.subTitle}>
            Click on the button to download the document
          </div>
        </div>
        <CustomLink dest={link} newTab={true}>
          <button className={styles.download}>Download PDF</button>
        </CustomLink>
      </div>
    </>
  )
}

export default DownloadComponent
