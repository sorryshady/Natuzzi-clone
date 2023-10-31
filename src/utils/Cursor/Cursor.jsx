import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './Cursor.module.css'
import { useSelector } from 'react-redux'
import useViewportSize from '../../hooks/useViewportSize'
const Cursor = ({ mousePosition }) => {
  const { hovering, clicked, hoveredText } = useSelector(
    (state) => state.cursor
  )
  const { width } = useViewportSize()
  const variants = {
    initial: {
      x: mousePosition.x,
      y: mousePosition.y,
      width: 0,
      height: 0,
    },
    visible: {
      x: mousePosition.x - 65,
      y: mousePosition.y - 65,
      width: '130px',
      height: '130px',
      color: 'black',
    },
    exit: {
      x: mousePosition.x,
      y: mousePosition.y,
      width: '0',
      height: '0',
      transition: { duration: 0.2 },
    },
  }
  const variants2 = {
    initial: {
      width: 0,
      height: 0,
    },
    visible: {
      width: '131px',
      height: '131px',
      transition: { duration: 0.3, delay: 0.2 },
    },
    exit: {
      width: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  }
  const textVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, delay: 0.4 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0 },
    },
  }
  return (
    <>
      {width > 768 && (
        <AnimatePresence>
          {(hovering || clicked) && (
            <motion.div
              className={styles.mouse}
              variants={variants}
              initial={'initial'}
              animate={'visible'}
              exit={'exit'}
            >
              <motion.div
                className={styles.content}
                variants={variants2}
                initial={'initial'}
                animate={'visible'}
                exit={'exit'}
              >
                <motion.div
                  className={styles.text}
                  variants={textVariants}
                  initial={'initial'}
                  animate={'visible'}
                  exit={'exit'}
                >
                  {hoveredText}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  )
}

export default Cursor
