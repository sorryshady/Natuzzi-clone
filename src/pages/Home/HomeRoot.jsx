import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'
import FollowUs from '../../components/FollowUs/FollowUs'
import Cursor from '../../utils/Cursor/Cursor'
import { useCursor } from '../../hooks/useCursor'

const HomeRoot = () => {
  useCursor()
  return (
    <>
      <Navbar />
      <Outlet />
      <FollowUs />
      <Cursor />
      <Footer />
    </>
  )
}

export default HomeRoot
