import { useEffect } from 'react'
import { useLocation } from 'react-router'

function scrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  // useEffect(() => {
  //   console.log('calling scroll to top')
  //   window.scrollTo(0, 0)
  // }, [])
}

export default scrollToTop
