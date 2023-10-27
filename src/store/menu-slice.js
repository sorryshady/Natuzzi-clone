import { createSlice } from '@reduxjs/toolkit'
import Menu from '../assets/Images/Menu.svg'
const initialState = {
  active: false,
  hovering: false,
  src: Menu,
  version: '',
  clicked: false,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActive(state) {
      state.active = !state.active
    },
    setHovering(state, action) {
      state.hovering = action.payload
    },
    setSrc(state, action) {
      state.src = action.payload
    },
    setVersion(state, action) {
      state.version = action.payload
    },
    setClicked(state) {
      state.clicked = !state.clicked
    },
  },
})

export const menuActions = menuSlice.actions
export default menuSlice
