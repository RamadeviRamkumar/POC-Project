import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false
}

const clinicalSlice = createSlice({
  name: 'clinical',
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
} = clinicalSlice.actions

export default clinicalSlice.reducer
