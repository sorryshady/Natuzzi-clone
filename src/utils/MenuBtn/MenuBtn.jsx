import React, { useEffect, useState } from 'react'
import styles from './MenuBtn.module.css'
import Menu from '../../assets/Images/Menu.svg'
import Close from '../../assets/Images/Close.svg'
import NavMenu from '../NavMenu/NavMenu'
import { menuActions } from '../../store/menu-slice'
import { useDispatch, useSelector } from 'react-redux'
const MenuBtn = () => {
  const dispatch = useDispatch()
  const { src, clicked, active, hovering } = useSelector((state) => state.menu)

  useEffect(() => {
    if (active) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [active])

  let timer1, timer2, timer3
  const handleClick = () => {
    dispatch(menuActions.setClicked())
    if (timer1) clearTimeout(timer1)

    if (timer2) clearTimeout(timer2)

    if (timer3) clearTimeout(timer3)

    timer1 = setTimeout(() => {
      dispatch(menuActions.setSrc(src === Menu ? Close : Menu))
      dispatch(menuActions.setClicked())
    }, 200)

    if (active) {
      timer2 = setTimeout(() => {
        dispatch(menuActions.setActive())
      }, 200)
    } else {
      dispatch(menuActions.setActive())
    }
    if (hovering) {
      dispatch(menuActions.setHovering(false))
      timer3 = setTimeout(() => {
        dispatch(menuActions.setHovering(true))
      }, 200)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles['menuBtn']}  ${
            active === true ? styles.menuCls : ''
          }`}
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
      {
        <NavMenu
          active={active}
          onClick={handleClick}
          hovering={hovering}
          dispatch={dispatch}
        />
      }
    </>
  )
}

export default MenuBtn
