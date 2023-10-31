import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  width: 0,
  count: 8,
}

const loadAnimSlice = createSlice({
  name: 'loadAnim',
  initialState,
  reducers: {
    setWidth(state, action) {
      state.width = action.payload
    },
    setCount(state, action) {
      state.count = action.payload
    },
  },
})

export const loadAnimActions = loadAnimSlice.actions
export default loadAnimSlice
