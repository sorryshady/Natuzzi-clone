import React from 'react'
import styles from './Counter.module.css'
import { AnimatePresence, motion } from 'framer-motion'
const Counter = ({ num }) => {
  return (
    <>
      <div className={styles['main-outer']}>
        <div className={styles['item-container']}>
          <AnimatePresence mode='popLayout'>
            <motion.span
              key={num}
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{ ease: 'easeIn', duration: 0.125 }}
              className={styles['content-holder']}
            >
              {num}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default Counter
