import React, { useEffect, useState } from 'react'
import styles from './Dashboard.module.css'
import CardLocation from '../../../../assets/Images/CardLocation.svg'
import CustomLink from '../../../../utils/CustomLink/CustomLink'
import RadioButtons from '../../../../utils/RadioButtons/RadioButtons'
const Dashboard = () => {
  const userName = localStorage.getItem('firstName')
  const [storeType, setStoreType] = useState({
    italia: true,
    editions: false,
  })
  const handleClick = (name) => {
    if (name === 'italia') {
      setStoreType({ italia: true, editions: false })
    } else if (name === 'editions') {
      setStoreType({ italia: false, editions: true })
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcome}>Welcome, {userName}</div>
        <div className={styles.profileContainer}>
          <div className={styles.header}>
            <div className={styles.heading}>Profile and preferences</div>
            <div className={styles.link}>
              <CustomLink dest={'/user/profile'}>View all</CustomLink>
            </div>
          </div>
          <div className={styles.profileSection}>
            <div className={`${styles.card} ${styles.profile}`}>
              <div className={styles.cardTitle}>User Name</div>
              <div className={styles.userInfo}>
                <span className={styles.field}>User </span>
                <span className={styles.email}>someone@gmail.com</span>
              </div>
            </div>
            <div className={`${styles.card} ${styles.italia}`}>
              <div className={styles.cardTitle}>Natuzzi Italia</div>
              <div className={styles.cardContent}>
                <img src={CardLocation} alt='location' />
                <span>No selected references shop</span>
              </div>
              <button className={styles.button}>Select</button>
            </div>
            <div className={`${styles.card} ${styles.editions}`}>
              <div className={styles.cardTitle}>Natuzzi Editions</div>
              <div className={styles.cardContent}>
                <img src={CardLocation} alt='location' />
                <span>No selected references shop</span>
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
          <div className={styles.helpSection}>
            <div className={styles.helpHeading}>Contact The Store</div>
            <div className={styles.options}>
              <RadioButtons
                text={'Natuzzi Italia'}
                selected={storeType.italia}
                onClick={() => handleClick('italia')}
              />
              <RadioButtons
                text={'Natuzzi Editions'}
                selected={storeType.editions}
                onClick={() => handleClick('editions')}
              />
            </div>
            <div className={styles.message}>
              <div className={styles.store}>No favorite store selected</div>
              <button className={styles.sendMessage}>Send message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
