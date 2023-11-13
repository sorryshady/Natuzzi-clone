import React from 'react'
import styles from './Profile.module.css'
import useDynamicTitle from '../../../../hooks/useDynamicTitle'
import { useRouteLoaderData } from 'react-router'
import Account from '../../../../assets/Images/Account.svg'
import Key from '../../../../assets/Images/Key.svg'
import Location from '../../../../assets/Images/Location.svg'
const Profile = () => {
  useDynamicTitle()
  const userData = useRouteLoaderData('userRoot')
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>Profile and preferences</div>
        <div className={styles.profileContainer}>
          <div className={styles.header}>Your Profile</div>
          <div className={styles.profileSection}>
            <div className={`${styles.card}`}>
              <div className={styles.cardHead}>
                <img src={Account} alt='account' className={styles.titleImg} />
                <div className={styles.cardTitle}>Information</div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.userName}>
                  {userData.firstName} {userData.lastName}
                </div>
                <div className={styles.fields}>
                  <span className={styles.fieldName}>Birthday</span>
                  <span className={styles.fieldValue}>
                    {userData.birthday ? userData.birthday : 'Not specified'}
                  </span>
                </div>
                <div className={styles.fields}>
                  <span className={styles.fieldName}>Phone number</span>
                  <span className={styles.fieldValue}>
                    {userData.phoneNumber
                      ? userData.phoneNumber
                      : 'Not specified'}
                  </span>
                </div>
              </div>
              <div className={styles.actions}>
                {!userData.birthday && (
                  <button className={`${styles.button} ${styles.dark}`}>
                    Add birthday
                  </button>
                )}
                {!userData.phoneNumber && (
                  <button className={`${styles.button} ${styles.dark}`}>
                    Add phone number
                  </button>
                )}
              </div>
            </div>
            <div className={`${styles.card}`}>
              <div className={styles.cardHead}>
                <img src={Key} alt='key' className={styles.titleImg} />
                <div className={styles.cardTitle}>Account</div>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.fields}>
                  <span className={styles.fieldName}>User</span>
                  <span className={styles.fieldValue}>{userData.email}</span>
                </div>
                <div className={styles.fields}>
                  <span className={styles.fieldName}>Account</span>
                  <span className={styles.fieldValue}>
                    {userData.accountType}
                  </span>
                </div>
                <div className={styles.fields}>
                  <span className={styles.fieldName}>Notify offers</span>
                  <span className={styles.fieldValue}>
                    {userData.offers === true ? 'opted in' : 'opted out'}
                  </span>
                </div>
              </div>
              <div className={styles.actions}>
                <button className={`${styles.button} ${styles.light}`}>
                  Change offers
                </button>
                <button className={`${styles.button} ${styles.light}`}>
                  Change password
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.preferencesContainer}>
          <div className={styles.header}>Manage your preferences</div>
          <div className={styles.preferencesSection}>
            <div className={`${styles.storeCards} ${styles.italia}`}>
              <div className={styles.storeTitle}>Natuzzi Italia</div>
              <div className={styles.storeContent}>
                <img src={Location} alt='location' />
                <span>
                  {!userData.storeOption.natuzziItalia
                    ? 'No selected reference shop'
                    : userData.storeOption.natuzziItalia}
                </span>
              </div>
              <button className={styles.storeButton}>Select</button>
            </div>
            <div className={`${styles.storeCards} ${styles.editions}`}>
              <div className={styles.storeTitle}>Natuzzi Editions</div>
              <div className={styles.storeContent}>
                <img src={Location} alt='location' />
                <span>
                  {!userData.storeOption.natuzziEditions
                    ? 'No selected reference shop'
                    : userData.storeOption.natuzziEditions}
                </span>
              </div>
              <button className={styles.storeButton}>Select</button>
            </div>
          </div>
        </div>
        <div className={styles.cancel}>Cancel Account</div>
      </div>
    </>
  )
}

export default Profile
