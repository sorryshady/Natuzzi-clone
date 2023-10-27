import { createSlice } from '@reduxjs/toolkit'
import Menu from '../assets/Images/Menu.svg'
import Close from '../assets/Images/Close.svg'
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
    setActive(state, action) {
      state.active = action.payload
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
