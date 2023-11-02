import { configureStore } from '@reduxjs/toolkit'
import cursorSlice from './cursor-slice'
import menuSlice from './menu-slice'
import globalSlice from './global-slice'
import loadAnimSlice from './loadAnim-slice'
import registerSlice from './register-slice'
import loginSubSlice from './loginSub-slice'

const store = configureStore({
  reducer: {
    global: globalSlice.reducer,
    cursor: cursorSlice.reducer,
    menu: menuSlice.reducer,
    loadAnim: loadAnimSlice.reducer,
    register: registerSlice.reducer,
    loginSub: loginSubSlice.reducer,
  },
})

export default store
