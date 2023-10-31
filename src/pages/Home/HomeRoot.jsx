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
import PageTransition from '../../utils/PageTransition'
import axios from 'axios'
import { config } from '../../App'

const HomeRoot = () => {
  const { mousePosition } = useCursor()
  const { navigating } = useSelector((state) => state.global)

  useScrollToTop()
  return (
    <>
      <AnimatePresence>
        {!navigating && (
          <PageTransition>
            <Navbar />
            <Outlet />
            <FollowUs />
            <Footer />
          </PageTransition>
        )}
      </AnimatePresence>
      <Cursor mousePosition={mousePosition} />
    </>
  )
}

export default HomeRoot

// export async function loader() {
//   try {
//     const response = await axios.get(`${config.endpoint}/`)
//     console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
// }
