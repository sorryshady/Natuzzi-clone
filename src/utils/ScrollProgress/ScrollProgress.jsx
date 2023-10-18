import React from 'react'
import { useSpring, useScroll, motion } from 'framer-motion'
import styles from './ScrollProgress.module.css'
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <>
      <motion.div className={styles['progress-bar']} style={{ scaleX }} />
      {/* <div className={styles['progress-bar']}></div> */}
    </>
  )
}

export default ScrollProgress
