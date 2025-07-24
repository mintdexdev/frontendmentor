import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './dataSlice.js'
import screenSlice from './screenSlice.js'

export default configureStore({
  reducer: { dataSlice, screenSlice },
})