import React from 'react'
import styles from './Addresses.module.css'
import useDynamicTitle from '../../../../hooks/useDynamicTitle'
import { useRouteLoaderData } from 'react-router'
const Addresses = () => {
  const userData = useRouteLoaderData('userRoot')
  useDynamicTitle()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.addressHeading}>Addresses</div>
        <div className={styles.addressContainer}>
          <div className={styles.header}>View your saved addresses</div>
          <div className={styles.addressSection}>
            <div className={styles.addAddressCard}>
              <div className={styles.addContent}>
                <div className={` ${styles.plus}`}>+</div>
                <div className={` ${styles.subText}`}>Add an address</div>
              </div>
            </div>
            {/* {userData.address} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Addresses
