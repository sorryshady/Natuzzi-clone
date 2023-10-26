import React, { useEffect, useState } from 'react'
import styles from './NavMenu.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import MainNavList from './MainNavList/MainNavList'
import SubNavList from './SubNavList/SubNavList'
const NavMenu = ({ active, onClick }) => {
  const [hover, setHover] = useState(false)
  const [version, setVersion] = useState('')
  const handleMouseEnter = (version) => {
    if (version === 'italia' || version === 'editions') {
      setHover(true)
      setVersion(version)
    } else {
      setHover(false)
      setVersion(version)
    }
  }

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className={styles.container}
          initial={{ backdropFilter: 'blur(0px)' }}
          animate={{ backdropFilter: 'blur(6px)' }}
          exit={{ backdropFilter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={styles.mainNavList}
            key={'mainNavList'}
            initial={{ width: '0' }}
            animate={{ width: '42vw' }}
            exit={{ width: '0', transition: { duration: 0.3, delay: 0.22 } }}
            transition={{ duration: 0.2 }}
          >
            <MainNavList
              onClick={onClick}
              onMouseEnter={handleMouseEnter}
              version={version}
            />
          </motion.div>
          {hover && (
            <motion.div
              className={styles.subNavList}
              key={'subNavList'}
              initial={{ width: '0' }}
              animate={{ width: '58vw' }}
              exit={{ width: '0', transition: { duration: 0.2 } }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <SubNavList onClick={onClick} version={version} />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NavMenu
