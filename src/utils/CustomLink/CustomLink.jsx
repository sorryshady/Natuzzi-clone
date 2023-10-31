import React from 'react'
import styles from './CustomLinks.module.css'
import Menu from '../../assets/Images/Menu.svg'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { cursorActions } from '../../store/cursor-slice'
import { menuActions } from '../../store/menu-slice'
import { globalActions } from '../../store/global-slice'
// const CustomLink = ({dest, children, setExit}) => {
const CustomLink = ({ dest, children, newTab = false, styleClass }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { active } = useSelector((state) => state.menu)
  let timeout, animationTimer
  const handleDelayedLinkClick = (to, delay) => (event) => {
    event.preventDefault()
    if (!to) {
      return
    }
    if (!newTab) {
      dispatch(cursorActions.setHoveredText('Loading...'))
      dispatch(cursorActions.setMouseClick())
      dispatch(cursorActions.setLoadingState())
      if (animationTimer) {
        clearTimeout(animationTimer)
      }
      animationTimer = setTimeout(() => {
        dispatch(globalActions.setNavigating(true))
      }, 1000)
      if (active) {
        dispatch(menuActions.setActive(false))
        dispatch(menuActions.setSrc(Menu))
      }
    }

    // setExit(true)
    if (newTab) {
      window.open(to, '_blank')
    } else {
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        navigate(to)
        dispatch(cursorActions.setHoveredText(''))
        dispatch(cursorActions.setMouseClick())
        dispatch(cursorActions.setLoadingState())
        dispatch(globalActions.setNavigating(false))
      }, delay)
    }
  }
  return (
    <span
      className={`${styles.link} ${styleClass ? styles[styleClass] : ''}`}
      onClick={handleDelayedLinkClick(dest, 2000)}
    >
      {children}
    </span>
  )
}

export default CustomLink
