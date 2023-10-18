import React from 'react'
import styles from './NavBar.module.css'
import Logo from '../../assets/Images/Logo.svg'
import Menu from '../../assets/Images/Menu.svg'
import Account from '../../assets/Images/Account.svg'
import Location from '../../assets/Images/Location.svg'
import CustomLink from '../../utils/CustomLink/CustomLink'
import Underline from '../../utils/Underline/Underline'
import NavButtons from '../../utils/NavButtons/NavButtons'
import ScrollProgress from '../../utils/ScrollProgress/ScrollProgress'
import NavAnimation from '../../utils/NavAnimation/NavAnimation'
const Navbar = () => {
  return (
    <NavAnimation>
      <header className={`${styles.header} flex`}>
        <div className={styles.logo}>
          <CustomLink dest={'/'}>
            <img src={Logo} alt='company name' />
          </CustomLink>
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
            <NavButtons
              icon={Location}
              text={'STORES'}
              move={'60px'}
              dest={'/store-locator'}
            />
            <NavButtons
              icon={Account}
              text={'ACCOUNT'}
              move={'70px'}
              dest={'/login'}
            />
          </div>
        </nav>
      </header>
      <ScrollProgress />
    </NavAnimation>
  )
}

export default Navbar
