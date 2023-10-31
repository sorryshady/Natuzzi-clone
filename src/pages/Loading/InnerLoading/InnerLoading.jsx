import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './InnerLoading.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { loadAnimActions } from '../../../store/loadAnim-slice'
import Text from '../Text/Text'
import Counter from '../Counter/Counter'
const InnerLoading = () => {
  const { width, count } = useSelector((state) => state.loadAnim)
  const dispatch = useDispatch()
  useEffect(() => {
    const interval = setInterval(() => {
      if (width < 50) {
        dispatch(loadAnimActions.setWidth(width + 10))
      } else if (width < 98) {
        dispatch(loadAnimActions.setWidth(width + 4))
      } else if (width === 98) {
        dispatch(loadAnimActions.setWidth(width + 2))
      }
      if (width > 50) {
        if (count < 96) {
          dispatch(loadAnimActions.setCount(count + 8))
        } else if (count === 96) {
          dispatch(loadAnimActions.setCount(count + 4))
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
      transition: { duration: 0.2 },
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
      >
        {width > 50 && <Counter num={count} />}
      </motion.div>
      {count === 100 && <Text />}
    </>
  )
}

export default InnerLoading
