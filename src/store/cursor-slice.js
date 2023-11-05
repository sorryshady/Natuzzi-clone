import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
    setHoverState(state, action) {
      state.hovering = action.payload
    },
    setHoveredText(state, action) {
      state.hoveredText = action.payload
    },
    setLoadingState(state) {
      state.loading = !state.loading
    },
  },
})

export const cursorActions = cursorSlice.actions
export default cursorSlice
