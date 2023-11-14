import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './NavButtons.module.css'
import CustomLink from '../CustomLink/CustomLink'

const NavButtons = ({ icon, text, dest, loader = false }) => {
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
              initial={{ width: '0vw' }}
              animate={{ width: 'auto' }}
              exit={{ width: '0vw' }}
              transition={{ duration: 0.5 }}
              className={styles.text}
            >
              <div className={styles.textContainer}>{text}</div>
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
