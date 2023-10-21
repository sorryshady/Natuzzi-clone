import React from 'react'
import { motion } from 'framer-motion'
import styles from './Cursor.module.css'
const Cursor = ({ mousePosition, hovering, text, mobile = false }) => {
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  }
  return (
    <motion.div
      className={`${styles.cursor} ${hovering ? styles.enter : ''} ${
        mobile ? styles.mobile : ''
      }`}
      variants={variants}
      animate='default'
    >
      <div className={styles.content}>{text}</div>
    </motion.div>
  )
}

export default Cursor
