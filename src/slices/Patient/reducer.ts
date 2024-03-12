import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false
}

const patientSlice = createSlice({
  name: 'patient',
  initialState,
  reducers: {
    isLoading (state) {
      state.loading = true
    },

    setIsLoadingFalse (state) {
        state.loading = false
    }
  }
})

export const {
  isLoading,
  setIsLoadingFalse
} = patientSlice.actions

export default patientSlice.reducer
