import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './NavButtons.module.css'
import CustomLink from '../CustomLink/CustomLink'

const NavButtons = ({ icon, text, move, dest, loader = false }) => {
  const [hover, setHover] = useState(false)

  return (
    <CustomLink dest={dest} loader={loader}>
      <div
        className={`${styles.link} flex`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {
          setHover(false)
        }}
      >
        <AnimatePresence>
          {hover && (
            <motion.div
              key={text}
              initial={{ width: '0vw', opacity: 0 }}
              animate={{ width: move, opacity: 1 }}
              exit={{ width: '0vw', opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.text}
            >
              {text}
            </motion.div>
          )}
        </AnimatePresence>
        <span className={styles.icon}>
          <img src={icon} className={styles.img} />
        </span>
      </div>
    </CustomLink>
  )
}

export default NavButtons
