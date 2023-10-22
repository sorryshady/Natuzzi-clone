import React from 'react'
import styles from './Navbar.module.css'
import { animateScroll as scroll } from 'react-scroll'
import Logo from '../../assets/Images/Logo.svg'
import Menu from '../../assets/Images/Menu.svg'
import Account from '../../assets/Images/Account.svg'
import Location from '../../assets/Images/Location.svg'
import CustomLink from '../../utils/CustomLink/CustomLink'
import Underline from '../../utils/Underline/Underline'
import NavButtons from '../../utils/NavButtons/NavButtons'
import ScrollProgress from '../../utils/ScrollProgress/ScrollProgress'
import NavAnimation from '../../utils/NavAnimation/NavAnimation'
import MenuBtn from '../../utils/MenuBtn/MenuBtn'
import { useCursor } from '../../hooks/useCursor'
import Cursor from '../../utils/Cursor/Cursor'
const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  const {
    mousePosition,
    clicked,
    hoveredText,
    handleMouseClick,
    mobile,
    completeLoad,
  } = useCursor()
  return (
    <>
      <NavAnimation>
        <header className={`${styles.header} flex`} id='Header'>
          <nav className={`${styles.nav} flex`}>
            <div className={`${styles.navLeft} flex`}>
              <div className={styles.menuBtn}>
                <img
                  src={Menu}
                  alt='menu button'
                  className={styles.menuBtnImg}
                />
              </div>
              <div className={`${styles.editions} flex`}>
                <Underline
                  dest={'/natuzzi-italia'}
                  onClick={handleMouseClick}
                  onLoad={completeLoad}
                >
                  Natuzzi Italia
                </Underline>
                <Underline
                  dest={'/natuzzi-editions'}
                  onClick={handleMouseClick}
                  onLoad={completeLoad}
                >
                  Natuzzi Editions
                </Underline>
              </div>
            </div>
            <div className={styles.logo} onClick={scrollToTop}>
              <CustomLink dest={'/'} onLoad={completeLoad}>
                <img src={Logo} alt='company name' onClick={handleMouseClick} />
              </CustomLink>
            </div>
            <div className={`${styles.actions} flex`}>
              <NavButtons
                icon={Location}
                text={'STORES'}
                move={'60px'}
                dest={'/store-locator'}
                onClick={handleMouseClick}
                onLoad={completeLoad}
              />
              <NavButtons
                icon={Account}
                text={'ACCOUNT'}
                move={'70px'}
                dest={'/login'}
                onClick={handleMouseClick}
                onLoad={completeLoad}
              />
            </div>
          </nav>
        </header>
        <ScrollProgress />
      </NavAnimation>
      <Cursor
        mousePosition={mousePosition}
        text={hoveredText}
        clicked={clicked}
        mobile={mobile}
      />
      <MenuBtn />
    </>
  )
}

export default Navbar
