import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeRoot, { loader as mainLoader } from './pages/Home/HomeRoot'
import HomePage from './pages/Home/HomePage/HomePage'
import TradeContract from './pages/Home/TradeContract/TradeContract'
import Login from './pages/Home/Login/Login'
import ErrorPage from './pages/Home/ErrorPage/ErrorPage'
import Loader from './utils/Loader'
import Dashboard from './pages/Home/User/Dashboard/Dashboard'
export const config = {
  endpoint: 'https://natuzzi-backend.onrender.com/v1',
  // endpoint: 'http://192.168.1.38:8082/v1/',
  // endpoint: 'http://localhost:8082/v1/',
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
      {
        path: 'user',
        children: [{ path: 'dashboard', element: <Dashboard /> }],
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
