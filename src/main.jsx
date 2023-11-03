import React from 'react'
import ReactDOM from 'react-dom/client'
import { SnackbarProvider } from 'notistack'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      maxSnack={2}
      autoHideDuration={2000}
      className='snackbar'
    >
      <Provider store={store}>
        <App />
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>
)
