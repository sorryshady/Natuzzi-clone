import React, { useEffect, useState } from 'react'
import styles from './Loading.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { globalActions } from '../../store/global-slice'
import { motion, AnimatePresence } from 'framer-motion'
import InnerLoading from './InnerLoading/InnerLoading'
const Loading = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.global)
  const [inner, setInner] = useState(false)

  const mainVariants = {
    exit: {
      x: '100%',
      transition: { duration: 0.8 },
    },
  }
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setInner(true)
    }, 500)
    const timer2 = setTimeout(() => {
      dispatch(globalActions.setLoading(false))
    }, 4500)
    const timer3 = setTimeout(() => {
      setInner(false)
    }, 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className={styles['page-container']}
            variants={mainVariants}
            exit={'exit'}
          >
            <div
              className={`${styles.container} ${!inner ? styles.overflow : ''}`}
            >
              <AnimatePresence>{inner && <InnerLoading />}</AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Loading
