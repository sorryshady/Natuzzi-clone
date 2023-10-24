import React from 'react'
import { motion } from 'framer-motion'
import styles from './Cursor.module.css'
import { useSelector } from 'react-redux'
const Cursor = ({ mousePosition }) => {
  const { hovering, clicked, hoveredText } = useSelector(
    (state) => state.cursor
  )
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  }
  return (
    <>
      {
        <motion.div
          className={`${styles.cursor} ${
            hovering || clicked ? styles.enter : ''
          } ${styles.desktop}`}
          variants={variants}
          animate='default'
        >
          <div className={styles.content}>{hoveredText}</div>
        </motion.div>
      }
    </>
  )
}

export default Cursor
