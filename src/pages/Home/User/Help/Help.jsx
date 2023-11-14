import React from 'react'
import styles from './Help.module.css'
import useDynamicTitle from '../../../../hooks/useDynamicTitle'
import DownloadComponent from './DownloadComponent/DownloadComponent'
import HelpComponent from './HelpComponent/HelpComponent'
const Help = () => {
  useDynamicTitle()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.helpHeading}>Help and contacts</div>
        <div className={styles.downloadsContainer}>
          <div className={styles.header}>Care and Maintenance</div>
          <div className={styles.downloadsSection}>
            <DownloadComponent
              version={'Italia'}
              link={
                'https://static.natuzzi.com/production/files/CARE_MAINTENANCE_NATUZZI_ITALIA.pdf'
              }
            />
            <DownloadComponent
              version={'Editions'}
              link={
                'https://static.natuzzi.com/production/files/CARE_MAINTENANCE_NATUZZI_EDITIONS.pdf'
              }
            />
          </div>
        </div>
        <div className={styles.helpContainer}>
          <div className={styles.header}>
            Didn't find what you were looking for?
          </div>
          <HelpComponent />
        </div>
      </div>
    </>
  )
}

export default Help
