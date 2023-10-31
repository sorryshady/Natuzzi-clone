import React, { useEffect, useState } from 'react'
import styles from './Text.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import NLogo from '../../../assets/Images/NLogo.svg'
const Text = () => {
  const [showText, setShowText] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false)
    }, 1700)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const variants = {
    initial: {
      y: '200%',
    },
    visible: {
      y: '0%',
    },
    exit: {
      y: '-200%',
      opacity: 0,
      transition: { duration: 0.5 },
    },
  }
  return (
    <div className={styles.outer}>
      <div className={styles.layer}>
        <AnimatePresence>
          {showText && (
            <motion.span
              variants={variants}
              initial={'initial'}
              animate={'visible'}
              exit={'exit'}
              transition={{ duration: 1 }}
              className={`${styles.content}`}
            >
              <img src={NLogo} alt='logo' />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.layer}>
        <AnimatePresence>
          {showText && (
            <motion.span
              variants={variants}
              initial={'initial'}
              animate={'visible'}
              exit={'exit'}
              transition={{ duration: 1 }}
              className={`${styles.content} ${styles.text}`}
            >
              Get comfortable
              <br />
              here we come.
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Text
