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
const MainNavList = ({ onClick, onMouseEnter, version }) => {
  let timeout
  const handleClick = () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      onClick()
    }, 600)
  }
  //handle mouse entering two main links (italia and editions)
  const handleMouseEnter = (version) => {
    onMouseEnter(version)
  }

  return (
    <motion.div
      className={styles.mainContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.5, delay: 0.2 }}
      key={'navList'}
    >
      <CustomLink dest={'/'}>
        <div className={styles.homeBtn} onClick={handleClick}>
          <img src={Home} alt='home' />
        </div>
      </CustomLink>
      <div className={styles.mainLinks}>
        <Underline dest={''} active={version === 'italia' ? true : false}>
          <span
            className={`${styles.mainLink}`}
            onMouseEnter={() => handleMouseEnter('italia')}
          >
            natuzzi italia
          </span>
        </Underline>
        <Underline dest={''} active={version === 'editions' ? true : false}>
          <span
            className={styles.mainLink}
            onMouseEnter={() => handleMouseEnter('editions')}
          >
            natuzzi editions
          </span>
        </Underline>
        <Underline
          dest={'/meet-natuzzi'}
          active={version === 'meet' ? true : false}
        >
          <span
            className={styles.mainLink}
            onClick={handleClick}
            onMouseEnter={() => handleMouseEnter('meet')}
          >
            meet natuzzi
          </span>
        </Underline>
        <Underline
          dest={'store-locator'}
          active={version === 'store' ? true : false}
        >
          <span
            className={styles.mainLink}
            onClick={handleClick}
            onMouseEnter={() => handleMouseEnter('store')}
          >
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
