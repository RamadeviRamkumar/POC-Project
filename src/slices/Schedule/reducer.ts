import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false
}

const scheduleSlice = createSlice({
  name: 'schedule',
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
} = scheduleSlice.actions

export default scheduleSlice.reducer
