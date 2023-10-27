import React from 'react'
import styles from './Navbar.module.css'
import { animateScroll as scroll } from 'react-scroll'
import Logo from '../../assets/Images/Logo.svg'
import Account from '../../assets/Images/Account.svg'
import Location from '../../assets/Images/Location.svg'
import CustomLink from '../../utils/CustomLink/CustomLink'
import Underline from '../../utils/Underline/Underline'
import NavButtons from '../../utils/NavButtons/NavButtons'
import ScrollProgress from '../../utils/ScrollProgress/ScrollProgress'
import NavAnimation from '../../utils/NavAnimation/NavAnimation'
import MenuBtn from '../../utils/MenuBtn/MenuBtn'
import useViewportSize from '../../hooks/useViewPortSize'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  const { active } = useSelector((state) => state.menu)
  const { width } = useViewportSize()
  return (
    <>
      <NavAnimation>
        <header className={`${styles.header} flex`} id='Header'>
          <nav className={`${styles.nav} flex`}>
            <div className={`${styles.navLeft} flex`}>
              {width > 1024 && <MenuBtn />}
              {
                <div className={`${styles.editions} flex`}>
                  <Underline dest={'/natuzzi-italia'}>Natuzzi Italia</Underline>
                  <Underline dest={'/natuzzi-editions'}>
                    Natuzzi Editions
                  </Underline>
                </div>
              }
            </div>
            <div className={styles.logo} onClick={scrollToTop}>
              <CustomLink dest={'/'}>
                <img src={Logo} alt='company name' />
              </CustomLink>
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
      {width <= 1024 && <MenuBtn />}
    </>
  )
}

export default Navbar
