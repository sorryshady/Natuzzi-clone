import React from 'react'
import styles from './ErrorPage.module.css'
import Navbar from '../../../components/Navbar/Navbar'
import Cursor from '../../../utils/Cursor/Cursor'
import Footer from '../../../components/Footer/Footer'
import FollowUs from '../../../components/FollowUs/FollowUs'
import { useCursor } from '../../../hooks/useCursor.js'
const ErrorPage = () => {
  const { mousePosition } = useCursor()
  return (
    <>
      <Navbar />
      <div className={styles.container}>Coming Soon</div>
      <FollowUs />
      <Cursor mousePosition={mousePosition} />
      <Footer />
    </>
  )
}

export default ErrorPage
