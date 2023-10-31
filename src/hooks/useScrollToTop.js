import { useEffect } from 'react'
import { useLocation } from 'react-router'

function scrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
}

export default scrollToTop
