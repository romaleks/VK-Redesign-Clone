import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: false,
  posts: [],
}

const API_KEY = '0e232cb77ea54f3295e541bbe4f9965e'
const getNews = createAsyncThunk('news/getNews', async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&from=2023-01-09&sortBy=publishedAt&pageSize=5&apiKey=${API_KEY}`
  )
  const data = await response.json()
  return data
})

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload.articles
      })
  },
})

export const selectNews = state => state.news

export { getNews }

export default newsSlice.reducer
