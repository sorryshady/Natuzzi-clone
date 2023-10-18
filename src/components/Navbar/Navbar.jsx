import React from 'react'
import styles from './NavBar.module.css'
import Logo from '../../assets/Images/Logo.svg'
import Menu from '../../assets/Images/Menu.svg'
import Account from '../../assets/Images/Account.svg'
import Location from '../../assets/Images/Location.svg'
import CustomLink from '../../utils/CustomLink/CustomLink'
import Underline from '../../utils/Underline/Underline'
const Navbar = () => {
  return (
    <header className={`${styles.header} flex`}>
      <div className={styles.logo}>
        <img src={Logo} alt='company name' />
      </div>
      <div className={styles.menuBtn}>
        <img src={Menu} alt='menu button' className={styles.menuBtnImg} />
      </div>
      <nav className={`${styles.nav} flex`}>
        <div className={`${styles.editions} flex`}>
          <Underline dest={'/natuzzi-italia'}>Natuzzi Italia</Underline>
          <Underline dest={'/natuzzi-editions'}>Natuzzi Editions</Underline>
        </div>
        <div className={`${styles.actions} flex`}>
          <img src={Location} alt={'store locator'} />
          <img src={Account} alt={'account'} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
