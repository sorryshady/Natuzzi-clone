import React, { useEffect, useState } from 'react'
import styles from './Loading.module.css'
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
const Loading = () => {
  const { loading } = useSelector((state) => state.global)
  const [inner, setInner] = useState(false)

  const mainVariants = {
    exit: {
      x: '100%',
      transition: { duration: 1 },
    },
  }
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setInner(true)
    }, 500)

    const timer2 = setTimeout(() => {
      setInner(false)
    }, 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
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
            <div className='container'>
              <AnimatePresence>{inner && <InnerLoading />}</AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Loading
