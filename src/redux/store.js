import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import newsReducer from './news'

const store = configureStore({
  reducer: {
    user: userReducer,
    news: newsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
