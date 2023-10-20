import React, { useState, useEffect } from 'react'
import styles from './NavAnimation.module.css'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
const NavAnimation = ({ children }) => {
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
      setTopState(false)
    } else {
      setHidden(false)
      setTopState(latest <= 150)
    }
    if (latest >= 150) {
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
          hidden: { y: '-97%' },
        }}
        animate={
          hidden && isScrolling ? 'hidden' : topState ? 'visible' : 'scroll'
        }
        transition={{ type: 'spring', damping: 17, stiffness: 100 }}
        className={`${styles.container} ${active ? styles.active : ''}`}
      >
        {children}
      </motion.div>
    </>
  )
}

export default NavAnimation
