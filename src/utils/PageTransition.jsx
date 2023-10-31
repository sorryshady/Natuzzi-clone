import React from 'react'
import { motion } from 'framer-motion'
const PageTransition = ({ children }) => {
  const variants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }
  return (
    <motion.div
      className='animation-container'
      variants={variants}
      initial={'initial'}
      animate={'visible'}
      exit={'exit'}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
