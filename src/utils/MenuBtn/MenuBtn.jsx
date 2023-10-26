import React, { useState } from 'react'
import styles from './MenuBtn.module.css'
import Menu from '../../assets/Images/Menu.svg'
import Close from '../../assets/Images/Close.svg'
import NavMenu from '../NavMenu/NavMenu'
const MenuBtn = ({ display }) => {
  const [active, setActive] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [src, setSrc] = useState(Menu)
  const handleClick = () => {
    setClicked(true)
    setTimeout(() => {
      setSrc(src === Menu ? Close : Menu)
      setClicked(false)
    }, 200)

    setActive(!active)
  }

  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles['menuBtn']} ${
            display === 'desktop' ? styles.desktop : styles.mobile
          } ${active === true ? styles.menuCls : ''}`}
          onClick={handleClick}
        >
          <img
            src={src}
            alt='menu btn'
            className={`${styles.menuBtnImg} ${
              src === Close ? styles.close : ''
            }  ${clicked ? styles['fade-in'] : ''}`}
          />
        </div>
      </div>
      {active && <NavMenu />}
    </>
  )
}

export default MenuBtn
