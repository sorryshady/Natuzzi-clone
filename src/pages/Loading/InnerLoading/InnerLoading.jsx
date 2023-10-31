import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './InnerLoading.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { loadAnimActions } from '../../../store/loadAnim-slice'
import Text from '../Text/Text'
const InnerLoading = () => {
  const { width } = useSelector((state) => state.loadAnim)
  const dispatch = useDispatch()
  useEffect(() => {
    const interval = setInterval(() => {
      if (width < 100) {
        if (width < 50) {
          dispatch(loadAnimActions.setWidth(width + 10))
        } else if (width > 50 && width <= 98) {
          dispatch(loadAnimActions.setWidth(width + 4))
        } else {
          dispatch(loadAnimActions.setWidth(width + 2))
        }
      }
      if (width === 100) {
        clearInterval(interval)
      }
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [width])

  const innerVariants = {
    initial: {
      width: '0%',
    },
    visible: {
      width: `${width}%`,
    },
    exit: {
      x: '100%',
      transition: { duration: 0.4 },
    },
  }
  return (
    <>
      <motion.div
        className={styles['inner-container']}
        variants={innerVariants}
        initial={'initial'}
        animate={'visible'}
        exit={'exit'}
        transition={{ duration: 1 }}
      >
        <div className={styles.percentage}></div>
      </motion.div>
      {width === 100 && <Text />}
    </>
  )
}

export default InnerLoading
