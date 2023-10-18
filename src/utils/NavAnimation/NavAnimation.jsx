import React, { useState } from 'react'
import styles from './NavAnimation.module.css'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
const NavAnimation = ({ children }) => {
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    if (latest >= 150) {
      setActive(true)
    } else {
      setActive(false)
    }
  })

  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState(false)
  // const changeActive = () => {
  //   if(window.scrollY >= 150){
  //     setActive(true)
  //   }
  // }
  // window.addEventListener('scroll', changeActive)
  return (
    <>
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: '-97%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ type: 'spring', damping: 17, stiffness: 100 }}
        className={`${styles.container} ${active ? styles.active : ''}`}
      >
        {children}
      </motion.div>
    </>
  )
}

export default NavAnimation
