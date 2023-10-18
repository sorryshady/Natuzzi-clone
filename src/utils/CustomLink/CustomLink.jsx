import React from 'react'
import styles from './CustomLinks.module.css'
import { useNavigate } from 'react-router'
// const CustomLink = ({dest, children, setExit}) => {
const CustomLink = ({ dest, children }) => {
  const navigate = useNavigate()

  const handleDelayedLinkClick = (to, delay) => (event) => {
    event.preventDefault()
    console.log(to)
    // setExit(true)
    // setTimeout(() => {
    //   navigate(to)
    // }, delay)
  }
  return (
    <div className={styles.link} onClick={handleDelayedLinkClick(dest, 1000)}>
      {children}
    </div>
  )
}

export default CustomLink
