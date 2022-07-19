import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/components/category/categoriesSlice'

export const store = configureStore({
  reducer: {
    categories:categoriesReducer,
  }
})