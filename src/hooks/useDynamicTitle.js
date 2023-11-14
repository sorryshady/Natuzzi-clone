import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function useDynamicTitle() {
  const location = useLocation()

  useEffect(() => {
    let routeName = location.pathname
      .replace(/^\//, '')
      .replace(/[-/]/g, ' ')
      .split(' ')
      .pop()
    switch (routeName) {
      case '':
        routeName = 'Natuzzi Italia & Natuzzi Editions'
        break
      case 'login':
        routeName = 'Login'
        break
      case 'dashboard':
        routeName = 'Dashboard'
        break
      case 'orders':
        routeName = 'Your Orders'
        break
      case 'profile':
        routeName = 'Profile and preferences'
        break
      case 'address':
        routeName = 'Addresses'
        break
      case 'trade and contract':
        routeName = 'Trade and Contract'
        break
    }
    document.title = routeName
  }, [location])
}

export default useDynamicTitle
