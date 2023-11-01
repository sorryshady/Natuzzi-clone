import React, { useState, useEffect } from 'react'
import styles from './NavAnimation.module.css'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useSelector } from 'react-redux'
const NavAnimation = ({ children }) => {
  const { scrollY } = useScroll()
  const { active: menuActive } = useSelector((state) => state.menu)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous) {
      setHidden(true)
      setTopState(false)
    } else {
      setHidden(false)
      setTopState(latest <= 150)
    }
    if (latest >= 50) {
      setActive(true)
    } else {
      setActive(false)
    }
  })

  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [topState, setTopState] = useState(true)

  useEffect(() => {
    let scrollTimeout
    function handleScroll() {
      setIsScrolling(true)
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 600)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const headerElement = document.getElementById('Header')
  let paddingBottom, paddingTop, shift
  if (headerElement) {
    const computedStyle = window.getComputedStyle(headerElement)
    paddingBottom = parseFloat(computedStyle.getPropertyValue('padding-bottom'))
    paddingTop = parseFloat(computedStyle.getPropertyValue('padding-top'))
    shift = paddingBottom - paddingTop + 4
  }

  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          scroll: { y: shift },
          hidden: { y: '-98%' },
        }}
        animate={
          hidden && isScrolling ? 'hidden' : topState ? 'visible' : 'scroll'
        }
        transition={{ type: 'spring', damping: 17, stiffness: 100 }}
        className={`${styles.container} ${
          active && !menuActive ? styles.active : ''
        }`}
      >
        {children}
      </motion.div>
    </>
  )
}

export default NavAnimation
