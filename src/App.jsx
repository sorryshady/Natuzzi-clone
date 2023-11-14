import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeRoot, { loader as mainLoader } from './pages/Home/HomeRoot'
import HomePage from './pages/Home/HomePage/HomePage'
import TradeContract from './pages/Home/TradeContract/TradeContract'
import Login from './pages/Home/Login/Login'
import ErrorPage from './pages/Home/ErrorPage/ErrorPage'
import Loader from './utils/Loader'
import Dashboard from './pages/Home/User/Dashboard/Dashboard'
import Profile from './pages/Home/User/Profile/Profile'
import Wishlist from './pages/Home/User/Wishlist/Wishlist'
import SavedProjects from './pages/Home/User/SavedProjects/SavedProjects'
import Help from './pages/Home/User/Help/Help'
import UserRoot, {
  loader as userLoader,
} from './pages/Home/User/UserRoot/UserRoot'
import Checkout from './pages/Home/Checkout/Checkout'
import Orders from './pages/Home/User/Orders/Orders'
import Addresses from './pages/Home/User/Addresses/Addresses'
export const config = {
  // endpoint: 'https://natuzzi-backend.onrender.com/v1',
  // endpoint: 'http://192.168.1.38:8082/v1/',
  endpoint: 'http://localhost:8082/v1/',
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoot />,
    loader: mainLoader,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'trade-and-contract', element: <TradeContract /> },
      { path: 'login', element: <Login /> },
      { path: 'checkout', element: <Checkout /> },
      {
        path: 'user',
        element: <UserRoot />,
        id: 'userRoot',
        loader: userLoader,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'orders', element: <Orders /> },
          { path: 'address', element: <Addresses /> },
          { path: 'profile', element: <Profile /> },
          { path: 'wishlist', element: <Wishlist /> },
          { path: 'projects', element: <SavedProjects /> },
          { path: 'help', element: <Help /> },
        ],
      },
      // { path: 'dealer-program', element: <TradeContract /> },
      // { path: 'contact-us', element: <TradeContract /> },
      // { path: 'trade-partnership', element: <TradeContract /> },
      // { path: 'meet-natuzzi', element: <TradeContract /> },
      // { path: 'store-locator', element: <TradeContract /> },
      // { path: 'privacy-policy', element: <TradeContract /> },
    ],
  },
])
function App() {
  return (
    <>
      <Loader>
        <RouterProvider router={router} />
      </Loader>
    </>
  )
}

export default App
