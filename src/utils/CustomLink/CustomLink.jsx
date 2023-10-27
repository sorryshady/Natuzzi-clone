import React from 'react'
import styles from './CustomLinks.module.css'
import Menu from '../../assets/Images/Menu.svg'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { cursorActions } from '../../store/cursor-slice'
import { menuActions } from '../../store/menu-slice'
// const CustomLink = ({dest, children, setExit}) => {
const CustomLink = ({ dest, children, newTab = false, styleClass }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleDelayedLinkClick = (to, delay) => (event) => {
    event.preventDefault()
    if (!to) {
      return
    }
    if (!newTab) {
      dispatch(cursorActions.setHoveredText('Loading...'))
      dispatch(cursorActions.setMouseClick())
      dispatch(cursorActions.setLoadingState())
      dispatch(menuActions.setActive(false))
      dispatch(menuActions.setSrc(Menu))
    }

    // setExit(true)
    if (newTab) {
      window.open(to, '_blank')
    } else {
      setTimeout(() => {
        navigate(to)
        dispatch(cursorActions.setHoveredText(''))
        dispatch(cursorActions.setMouseClick())
        dispatch(cursorActions.setLoadingState())
      }, delay)
    }
  }
  return (
    <span
      className={`${styles.link} ${styleClass ? styles[styleClass] : ''}`}
      onClick={handleDelayedLinkClick(dest, 1000)}
    >
      {children}
    </span>
  )
}

export default CustomLink
