import React from 'react'
import styles from './ErrorPage.module.css'
import Navbar from '../../../components/Navbar/Navbar'
import Cursor from '../../../utils/Cursor/Cursor'
import Footer from '../../../components/Footer/Footer'
import FollowUs from '../../../components/FollowUs/FollowUs'
import { useCursor } from '../../../hooks/useCursor.js'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import PageTransition from '../../../utils/PageTransition'
const ErrorPage = () => {
  const { mousePosition } = useCursor()
  const { navigating } = useSelector((state) => state.global)
  return (
    <>
      <AnimatePresence>
        {!navigating && (
          <PageTransition>
            <Navbar />
            <div className={styles.container}>Coming Soon</div>
            <FollowUs />
            <Footer />
          </PageTransition>
        )}
      </AnimatePresence>
      <Cursor mousePosition={mousePosition} />
    </>
  )
}

export default ErrorPage
