import React from 'react'
import styles from './CustomLinks.module.css'
import { useNavigate } from 'react-router'
// const CustomLink = ({dest, children, setExit}) => {
const CustomLink = ({ dest, children, newTab = false, styleClass, onLoad }) => {
  const navigate = useNavigate()
  const handleDelayedLinkClick = (to, delay) => (event) => {
    event.preventDefault()
    console.log(to)
    // setExit(true)
    if (newTab) {
      window.open(to, '_blank')
    } else {
      setTimeout(() => {
        navigate(to)
        onLoad()
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
