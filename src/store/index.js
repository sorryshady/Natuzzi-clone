import { configureStore } from '@reduxjs/toolkit'
import cursorSlice from './cursor-slice'
import menuSlice from './menu-slice'
import globalSlice from './global-slice'
import loadAnimSlice from './loadAnim-slice'

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    cursor: cursorSlice.reducer,
    menu: menuSlice.reducer,
    loadAnim: loadAnimSlice.reducer,
  },
})

export default store
