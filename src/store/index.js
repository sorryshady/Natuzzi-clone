import { configureStore } from '@reduxjs/toolkit'
import cursorSlice from './cursor-slice'

const store = configureStore({
  reducer: {
    cursor: cursorSlice.reducer,
  },
})

export default store
