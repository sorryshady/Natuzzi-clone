import React from 'react'
import Home from '../../../assets/Images/Home.svg'
import Facebook from '../../../assets/Images/Facebook.svg'
import Instagram from '../../../assets/Images/Instagram.svg'
import Youtube from '../../../assets/Images/Youtube.svg'
import Linkedin from '../../../assets/Images/Linkedin.svg'
import Pinterest from '../../../assets/Images/Pinterest.svg'
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
      <div className={styles.subLinks}>
        <CustomLink dest={'/trad-and-contract'}>
          <span className={styles.subLink} onClick={handleClick}>
            trade and contract
          </span>
        </CustomLink>
        <CustomLink dest={'/dealer-program'}>
          <span className={styles.subLink} onClick={handleClick}>
            dealer program
          </span>
        </CustomLink>
        <CustomLink dest={'contact-us'}>
          <span className={styles.subLink} onClick={handleClick}>
            contact us
          </span>
        </CustomLink>
        <CustomLink dest={'/trade'}>
          <span className={styles.subLink} onClick={handleClick}>
            trade
          </span>
        </CustomLink>
      </div>
      <div className={styles.socials}>
        <CustomLink newTab={true} dest={'https://www.facebook.com/Natuzzi'}>
          <img src={Facebook} alt='Facebook' />
        </CustomLink>
        <CustomLink newTab={true} dest={'https://www.instagram.com/natuzzi'}>
          <img src={Instagram} alt='Instagram' />
        </CustomLink>
        <CustomLink newTab={true} dest={'https://www.youtube.com/Natuzzi'}>
          <img src={Youtube} alt='Youtube' />
        </CustomLink>
        <CustomLink
          newTab={true}
          dest={'https://www.linkedin.com/company/natuzzi/?trk=top_nav_home'}
        >
          <img src={Linkedin} alt='Linkedin' />
        </CustomLink>
        <CustomLink newTab={true} dest={'https://www.pinterest.it/natuzzi'}>
          <img src={Pinterest} alt='Pinterest' />
        </CustomLink>
      </div>
    </motion.div>
  )
}

export default MainNavList
