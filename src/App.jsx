import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeRoot from './pages/Home/HomeRoot'
import HomePage from './pages/Home/HomePage/HomePage'
import TradeContract from './pages/Home/TradeContract/TradeContract'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoot />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'trade-and-contract', element: <TradeContract /> },
      // { path: 'login', element: <TradeContract /> },
      // { path: 'dealer-program', element: <TradeContract /> },
      // { path: 'contact-us', element: <TradeContract /> },
      // { path: 'trade-partnership', element: <TradeContract /> },
      // { path: 'meet-natuzzi', element: <TradeContract /> },
      // { path: 'store-locator', element: <TradeContract /> },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
