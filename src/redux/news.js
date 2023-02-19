import {
  createAsyncThunk,
  createSlice,
  isAnyOf,
  nanoid,
} from '@reduxjs/toolkit'
import { database, storage } from '../firebase/firebase'
import { ref, set, get } from 'firebase/database'
import { getDownloadURL, ref as sRef, uploadBytes } from 'firebase/storage'

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

const createPost = createAsyncThunk('news/createPost', async postData => {
  const postId = nanoid()
  const { uid, title, description, source, image, logo, publishedAt } = postData
  let urlToImage = null

  if (image) {
    const storageRef = sRef(storage, 'postsImages/' + postId)
    const response = await uploadBytes(storageRef, image)
    urlToImage = await getDownloadURL(response.ref)
  }

  set(ref(database, 'posts/' + postId), {
    postId,
    uid,
    title,
    description,
    logo,
    urlToImage,
    publishedAt,
    source: {
      name: source,
    },
    likeCount: 0,
  })

  return {
    postId,
    uid,
    title,
    description,
    logo,
    urlToImage,
    publishedAt,
    source: {
      name: source,
    },
    likeCount: 0,
  }
})

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    likePost(state, action) {
      const { postId, uid } = action.payload
      set(ref(database, 'postsLikes/' + postId), { [uid]: true })
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload)
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.posts.push(...action.payload.articles)
        state.numOfPosts[action.payload.keyWord] = action.payload.numOfPosts
      })
      .addCase(loadUsersPosts.fulfilled, (state, action) => {
        for (const post in action.payload) {
          state.posts.push(action.payload[post])
        }
      })
      .addMatcher(
        isAnyOf(getNews.pending, loadUsersPosts.pending, createPost.pending),
        (state, action) => {
          state.success = false
          state.loading = true
        }
      )
      .addMatcher(
        isAnyOf(
          getNews.fulfilled,
          loadUsersPosts.fulfilled,
          createPost.fulfilled
        ),
        (state, action) => {
          state.loading = false
          state.success = true
        }
      )
  },
})

export const selectNews = state => state.news

export { getNews, loadUsersPosts, createPost }

export const { likePost } = newsSlice.actions

export default newsSlice.reducer
