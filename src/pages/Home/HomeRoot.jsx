import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'
import FollowUs from '../../components/FollowUs/FollowUs'
const HomeRoot = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FollowUs />
      <Footer />
    </>
  )
}

export default HomeRoot
