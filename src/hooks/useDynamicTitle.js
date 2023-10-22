import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useDynamicTitle() {
  const location = useLocation()

  useEffect(() => {
    let routeName = location.pathname.replace(/^\//, '').replace(/[-/]/g, ' ')
    switch (routeName) {
      case '':
        routeName = 'Natuzzi Italia & Natuzzi Editions'
        break
      case 'login':
        routeName = 'Login'
        break
      case 'trade and contract':
        routeName = 'Trade and Contract'
        break
    }
    document.title = routeName
  }, [location])
}

export default useDynamicTitle
