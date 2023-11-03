import React, { useEffect } from 'react'
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
import { globalActions } from '../../store/global-slice'
import Loading from '../Loading/Loading'
import store from '../../store'

const HomeRoot = () => {
  const { mousePosition } = useCursor()
  const { loading, navigating } = useSelector((state) => state.global)
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [loading])

  useScrollToTop()
  return (
    <>
      <Loading />
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

export async function loader() {
  store.dispatch(globalActions.setLoading(true))
  return null
}
