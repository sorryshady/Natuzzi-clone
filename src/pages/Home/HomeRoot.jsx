import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'
import FollowUs from '../../components/FollowUs/FollowUs'
import Cursor from '../../utils/Cursor/Cursor'
import { useCursor } from '../../hooks/useCursor'
import { AnimatePresence, motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import useScrollToTop from '../../hooks/useScrollToTop'

const HomeRoot = () => {
  const { mousePosition } = useCursor()
  const { navigating } = useSelector((state) => state.global)
  const variants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }
  useScrollToTop()
  return (
    <>
      <AnimatePresence>
        {!navigating && (
          <motion.div
            className='animation-container'
            variants={variants}
            initial={'initial'}
            animate={'visible'}
            exit={'exit'}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <Outlet />
            <FollowUs />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      <Cursor mousePosition={mousePosition} />
    </>
  )
}

export default HomeRoot
