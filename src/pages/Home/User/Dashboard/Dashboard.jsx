import React, { useState } from 'react'
import styles from './Dashboard.module.css'
import CardLocation from '../../../../assets/Images/CardLocation.svg'
import CustomLink from '../../../../utils/CustomLink/CustomLink'
import RadioButtons from '../../../../utils/RadioButtons/RadioButtons'
import { useRouteLoaderData } from 'react-router-dom'
import useDynamicTitle from '../../../../hooks/useDynamicTitle'
import HelpComponent from '../Help/HelpComponent/HelpComponent'
const Dashboard = () => {
  useDynamicTitle()
  const userData = useRouteLoaderData('userRoot')

  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcome}>Welcome, {userData.firstName}</div>
        <div className={styles.profileContainer}>
          <div className={styles.header}>
            <div className={styles.heading}>Profile and preferences</div>
            <div className={styles.link}>
              <CustomLink dest={'/user/profile'}>View all</CustomLink>
            </div>
          </div>
          <div className={styles.profileSection}>
            <div className={`${styles.card} ${styles.profile}`}>
              <div className={styles.cardTitle}>
                {userData.firstName} {userData.lastName}
              </div>
              <div className={styles.userInfo}>
                <span className={styles.field}>User </span>
                <span className={styles.email}>{userData.email}</span>
              </div>
            </div>
            <div className={`${styles.card} ${styles.italia}`}>
              <div className={styles.cardTitle}>Natuzzi Italia</div>
              <div className={styles.cardContent}>
                <img src={CardLocation} alt='location' />
                <span>
                  {!userData.storeOption.natuzziItalia
                    ? 'No selected reference shop'
                    : userData.storeOption.natuzziItalia}
                </span>
              </div>
              <button className={styles.button}>Select</button>
            </div>
            <div className={`${styles.card} ${styles.editions}`}>
              <div className={styles.cardTitle}>Natuzzi Editions</div>
              <div className={styles.cardContent}>
                <img src={CardLocation} alt='location' />
                <span>
                  {!userData.storeOption.natuzziEditions
                    ? 'No selected reference shop'
                    : userData.storeOption.natuzziEditions}
                </span>
              </div>
              <button className={styles.button}>Select</button>
            </div>
          </div>
        </div>
        <div className={styles.helpContainer}>
          <div className={styles.header}>
            <div className={styles.heading}>Help and contacts</div>
            <div className={styles.link}>
              <CustomLink dest={'/user/help'}>View all</CustomLink>
            </div>
          </div>
          <HelpComponent />
        </div>
      </div>
    </>
  )
}

export default Dashboard
