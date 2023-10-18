import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router'
const HomeRoot = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default HomeRoot
