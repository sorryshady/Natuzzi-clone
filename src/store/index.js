import { configureStore } from '@reduxjs/toolkit'
import cursorSlice from './cursor-slice'
import menuSlice from './menu-slice'

const store = configureStore({
  reducer: {
    cursor: cursorSlice.reducer,
    menu: menuSlice.reducer,
  },
})

export default store
