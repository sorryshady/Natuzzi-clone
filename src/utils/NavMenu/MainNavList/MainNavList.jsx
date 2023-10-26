import React from 'react'
import Home from '../../../assets/Images/Home.svg'
import CustomLink from '../../CustomLink/CustomLink'
import Underline from '../../Underline/Underline'
import styles from './MainNavList.module.css'
import { motion } from 'framer-motion'
const MainNavList = ({ onClick }) => {
  const handleClick = () => {
    setTimeout(() => {
      onClick()
    }, 500)
  }
  return (
    <motion.div
      className={styles.mainContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.3, delay: 0.2 }}
      key={'navList'}
    >
      <CustomLink dest={'/'}>
        <div className={styles.homeBtn} onClick={handleClick}>
          <img src={Home} alt='home' />
        </div>
      </CustomLink>
      <div className={styles.mainLinks}>
        <Underline dest={''}>
          <span className={styles.mainLink}>natuzzi italia</span>
        </Underline>
        <Underline dest={''}>
          <span className={styles.mainLink}>natuzzi editions</span>
        </Underline>
        <Underline dest={'/meet-natuzzi'}>
          <span className={styles.mainLink} onClick={handleClick}>
            meet natuzzi
          </span>
        </Underline>
        <Underline dest={'store-locator'}>
          <span className={styles.mainLink} onClick={handleClick}>
            store locator
          </span>
        </Underline>
      </div>
    </motion.div>
  )
}

export default MainNavList
