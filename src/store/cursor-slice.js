import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mousePosition: { x: 0, y: 0 },
  hovering: false,
  clicked: false,
  hoveredText: '',
  loading: false,
}

const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setMouseClick(state) {
      state.clicked = !state.clicked
    },
    setHoverState(state) {
      state.hovering = !state.hovering
    },
    setHoveredText(state, action) {
      state.hoveredText = action.payload
    },
    setMousePosition(state, action) {
      state.mousePosition.x = action.payload.x
      state.mousePosition.y = action.payload.y
    },
    setLoadingState(state) {
      state.loading = !state.loading
    },
  },
})

export const cursorActions = cursorSlice.actions
export default cursorSlice
