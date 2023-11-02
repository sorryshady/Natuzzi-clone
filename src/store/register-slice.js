import { createSlice } from '@reduxjs/toolkit'

const initialPrivateData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const initialCompanyData = {
  company: '',
  vat: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
const initialState = {
  privateData: { ...initialPrivateData },
  companyData: { ...initialCompanyData },
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    updateField(state, action) {
      const { fieldPath, value } = action.payload

      const [dataGroup, field] = fieldPath.split('.')

      if (dataGroup === 'private') {
        state.privateData[field] = value
      } else if (dataGroup === 'company') {
        state.companyData[field] = value
      }
    },
  },
})

export const registerActions = registerSlice.actions
export default registerSlice
