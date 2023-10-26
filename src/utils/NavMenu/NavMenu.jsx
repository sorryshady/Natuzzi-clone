import React, { useState } from 'react'
import styles from './NavMenu.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import MainNavList from './MainNavList/MainNavList'
const NavMenu = ({ active, onClick }) => {
  const [hover, setHover] = useState(false)

  return (
    <AnimatePresence mode={'wait'}>
      {active && (
        <motion.div
          className={styles.container}
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: 'blur(6px)' }}
          exit={{ backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          <motion.div
            className={styles.mainNavList}
            key={'mainNavList'}
            initial={{ width: '0' }}
            animate={{ width: '42vw' }}
            exit={{ width: '0', transition: { duration: 0.3, delay: 0.22 } }}
            transition={{ duration: 0.2 }}
          >
            <MainNavList onClick={onClick} />
          </motion.div>
          {!hover && (
            <motion.div
              className={styles.subNavList}
              key={'subNavList'}
              initial={{ width: '0' }}
              animate={{ width: '58vw' }}
              exit={{ width: '0', transition: { duration: 0.2 } }}
              transition={{ duration: 0.3, delay: 0.2 }}
            ></motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NavMenu
