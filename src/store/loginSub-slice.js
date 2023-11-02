import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: {
    email: '',
    password: '',
  },
  subscribe: {
    email: '',
  },
}

const loginSubSlice = createSlice({
  name: 'loginSub',
  initialState,
  reducers: {
    updateField(state, action) {
      const { fieldPath, value } = action.payload

      const [dataGroup, field] = fieldPath.split('.')

      if (dataGroup === 'login') {
        state.login[field] = value
      } else if (dataGroup === 'subscribe') {
        state.subscribe[field] = value
      }
    },
  },
})

export const loginSubActions = loginSubSlice.actions
export default loginSubSlice
