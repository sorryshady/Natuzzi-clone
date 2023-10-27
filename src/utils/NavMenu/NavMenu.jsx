import React from 'react'
import styles from './NavMenu.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import MainNavList from './MainNavList/MainNavList'
import SubNavList from './SubNavList/SubNavList'
import { menuActions } from '../../store/menu-slice'
import { useSelector } from 'react-redux'
const NavMenu = ({ active, onClick, hovering, dispatch }) => {
  const { version } = useSelector((state) => state.menu)

  const handleMouseEnter = (version) => {
    if (version === 'italia' || version === 'editions') {
      dispatch(menuActions.setHovering(true))
      dispatch(menuActions.setVersion(version))
    } else {
      dispatch(menuActions.setHovering(false))
      dispatch(menuActions.setVersion(version))
    }
  }

  const variantsBlur = {
    initial: {
      backdropFilter: 'blur(0px)',
    },
    final: {
      backdropFilter: 'blur(6px)',
      transition: { duration: 0.5 },
    },
    exit: {
      backdropFilter: 'blur(0px)',
      transition: { duration: 0.4 },
    },
  }

  const variantMainNav = {
    initial: {
      width: '0',
    },
    final: {
      width: '100%',
      transition: { duration: 0.4 },
    },
    exit: {
      width: '0',
      transition: { duration: 0.2 },
    },
  }

  const variantSubNav = {
    initial: {
      width: '0',
    },
    final: {
      width: '100%',
      transition: { duration: 0.5 },
    },
    exit: {
      width: '0',
      transition: { duration: 0.3 },
    },
  }

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className={styles.container}
          variants={variantsBlur}
          initial={'initial'}
          animate={'final'}
          exit={'exit'}
        >
          <motion.div
            className={styles.mainNavList}
            key={'mainNavList'}
            variants={variantMainNav}
            initial={'initial'}
            animate={'final'}
            exit={'exit'}
          >
            <MainNavList
              onClick={onClick}
              onMouseEnter={handleMouseEnter}
              version={version}
            />
          </motion.div>
          <AnimatePresence>
            {hovering && (
              <motion.div
                className={styles.subNavList}
                key={'subNavList'}
                variants={variantSubNav}
                initial={'initial'}
                animate={'final'}
                exit={'exit'}
              >
                <SubNavList onClick={onClick} version={version} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NavMenu

// , transition: { duration: 0.3, delay: 0.2 }
