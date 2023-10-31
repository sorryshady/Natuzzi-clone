import { configureStore } from '@reduxjs/toolkit'
import cursorSlice from './cursor-slice'
import menuSlice from './menu-slice'
import globalSlice from './global-slice'

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    cursor: cursorSlice.reducer,
    menu: menuSlice.reducer,
  },
})

export default store
