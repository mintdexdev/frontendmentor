import { createSlice } from "@reduxjs/toolkit"

export const dataSlice = createSlice({
  name: 'spaceData',
  initialState: {
    spaceData: {},
  },
  reducers: {
    addSpaceData: (state, action) => {
      state.spaceData = action.payload
    }
  }
})

export const { addSpaceData } = dataSlice.actions

export default dataSlice.reducer