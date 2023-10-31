import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeRoot from './pages/Home/HomeRoot'
import HomePage from './pages/Home/HomePage/HomePage'
import TradeContract from './pages/Home/TradeContract/TradeContract'
import Login from './pages/Home/Login/Login'
import ErrorPage from './pages/Home/ErrorPage/ErrorPage'
import { useEffect } from 'react'
import axios from 'axios'
export const config = {
  endpoint: 'http://localhost:8082/v1',
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoot />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'trade-and-contract', element: <TradeContract /> },
      { path: 'login', element: <Login /> },
      // { path: 'dealer-program', element: <TradeContract /> },
      // { path: 'contact-us', element: <TradeContract /> },
      // { path: 'trade-partnership', element: <TradeContract /> },
      // { path: 'meet-natuzzi', element: <TradeContract /> },
      // { path: 'store-locator', element: <TradeContract /> },
      // { path: 'privacy-policy', element: <TradeContract /> },
    ],
  },
])
useEffect(() => {}, [])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )

  // return <div>This is app</div>
}

export default App
