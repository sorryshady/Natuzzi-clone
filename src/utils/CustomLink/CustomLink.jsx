import React from 'react'
import styles from './CustomLinks.module.css'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { cursorActions } from '../../store/cursor-slice'
// const CustomLink = ({dest, children, setExit}) => {
const CustomLink = ({ dest, children, newTab = false, styleClass }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleDelayedLinkClick = (to, delay) => (event) => {
    event.preventDefault()
    dispatch(cursorActions.setHoveredText('Loading...'))
    dispatch(cursorActions.setMouseClick())
    dispatch(cursorActions.setLoadingState())
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
