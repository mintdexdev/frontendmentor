import { createSlice } from "@reduxjs/toolkit"

export const screenSlice = createSlice({
  name: 'screenDetails',
  initialState: {
    viewportSize: 'small'
  },
  reducers: {
    setViewportSize: (state, action) => {
      state.viewportSize = action.payload
    }
  }
})

export const { setViewportSize } = screenSlice.actions

export default screenSlice.reducer