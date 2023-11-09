import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import styles from './Navbar.module.css'
import { animateScroll as scroll } from 'react-scroll'
import Logo from '../../assets/Images/Logo.svg'
import Account from '../../assets/Images/Account.svg'
import Menu from '../../assets/Images/Menu.svg'
import Location from '../../assets/Images/Location.svg'
import CustomLink from '../../utils/CustomLink/CustomLink'
import Underline from '../../utils/Underline/Underline'
import NavButtons from '../../utils/NavButtons/NavButtons'
import ScrollProgress from '../../utils/ScrollProgress/ScrollProgress'
import NavAnimation from '../../utils/NavAnimation/NavAnimation'
import MenuBtn from '../../utils/MenuBtn/MenuBtn'
import useViewportSize from '../../hooks/useViewportSize'
import { useDispatch, useSelector } from 'react-redux'
import { menuActions } from '../../store/menu-slice'

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  const [userName, setUserName] = useState('')
  const [loginCheck, setLoginCheck] = useState(false)
  const dispatch = useDispatch()
  const { active } = useSelector((state) => state.menu)
  const { width } = useViewportSize()
  const handleClick = () => {
    dispatch(menuActions.setActive(false))
    dispatch(menuActions.setSrc(Menu))
  }
  useEffect(() => {
    if (!loginCheck) {
      const loggedInState = Cookies.get('loggedIn')
      if (loggedInState) {
        const firstName = localStorage.getItem('firstName')
        if (firstName) {
          setUserName(firstName.toUpperCase())
        }
      } else {
        setUserName('')
        localStorage.removeItem('firstName')
        localStorage.removeItem('id')
      }
      setLoginCheck(true)
    }else{
      setLoginCheck(false)
    }
  }, [loginCheck])
  return (
    <>
      <NavAnimation>
        <header className={`${styles.header} flex`} id='Header'>
          <nav className={`${styles.nav} flex`}>
            <div className={`${styles.navLeft} flex`}>
              {width > 1024 && <MenuBtn />}
              {!active && (
                <div className={`${styles.editions} flex`}>
                  <Underline dest={'/natuzzi-italia'}>Natuzzi Italia</Underline>
                  <Underline dest={'/natuzzi-editions'}>
                    Natuzzi Editions
                  </Underline>
                </div>
              )}
            </div>
            <div className={styles.logo} onClick={scrollToTop}>
              <CustomLink dest={'/'}>
                <img src={Logo} alt='company name' onClick={handleClick} />
              </CustomLink>
            </div>
            <div className={`${styles.actions} flex`}>
              <NavButtons
                icon={Location}
                text={'STORES'}
                move={'60px'}
                dest={'/store-locator'}
                onClick={handleClick}
              />
              <NavButtons
                icon={Account}
                text={userName ? `${userName}` : 'ACCOUNT'}
                move={'70px'}
                dest={userName ? '/user/dashboard' : '/login'}
                onClick={handleClick}
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
