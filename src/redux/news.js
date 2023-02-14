import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { database } from '../firebase/firebase'
import { ref, set, get } from 'firebase/database'

const initialState = {
  loading: false,
  success: false,
  error: false,
  posts: [],
  numOfPosts: {},
}

const API_KEY = '0e232cb77ea54f3295e541bbe4f9965e'
const getNews = createAsyncThunk('news/getNews', async keyWord => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?q=${keyWord}&sortBy=publishedAt&pageSize=3&apiKey=${API_KEY}`
  )
  const data = await response.json()

  for (const article of data.articles) {
    article.keyWord = keyWord
    article.verified = true
  }

  const numOfPosts = data.articles.length
  data.keyWord = keyWord
  data.numOfPosts = numOfPosts
  return data
})

const loadUsersPosts = createAsyncThunk('news/loadUsersPosts', async () => {
  const snapshot = await get(ref(database, 'posts/'))
  return snapshot.val()
})

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    createPost(state, action) {
      const postId = nanoid()
      const { uid, title, description, source, image, logo, timeStamp } =
        action.payload

      set(ref(database, 'posts/' + postId), {
        uid,
        title,
        description,
        source: {
          name: source,
        },
        image,
        logo,
        timeStamp,
      })
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.success = false
        state.loading = true
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.posts.push(...action.payload.articles)
        state.numOfPosts[action.payload.keyWord] = action.payload.numOfPosts
      })
      .addCase(loadUsersPosts.pending, (state, action) => {
        state.loading = true
        state.success = false
      })
      .addCase(loadUsersPosts.fulfilled, (state, action) => {
        state.loading = false
        state.success = true

        for (const post in action.payload) {
          state.posts.push(action.payload[post])
        }
      })
  },
})

export const selectNews = state => state.news

export { getNews, loadUsersPosts }
export const { createPost } = newsSlice.actions

export default newsSlice.reducer
