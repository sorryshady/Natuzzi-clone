import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeRoot from './pages/Home/HomeRoot'
import HomePage from './pages/Home/HomePage/HomePage'
import TradeContract from './pages/Home/TradeContract/TradeContract'
import Login from './pages/Home/Login/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoot />,
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
function App() {
  return <RouterProvider router={router} />
  // return <div>This is app</div>
}

export default App
