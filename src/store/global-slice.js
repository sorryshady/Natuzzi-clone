import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  navigating: false,
}
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload
    },
    setNavigating(state, action) {
      state.navigating = action.payload
    },
  },
})

export const globalActions = globalSlice.actions
export default globalSlice
