import {
  createAsyncThunk,
  createSlice,
  isAnyOf,
  nanoid,
} from '@reduxjs/toolkit'
import { database, storage } from '../firebase/firebase'
import { ref, set, get, child, update } from 'firebase/database'
import { getDownloadURL, ref as sRef, uploadBytes } from 'firebase/storage'

const initialState = {
  loading: false,
  success: false,
  error: false,
  posts: [],
  numOfPosts: {},
}

const API_KEY = 'ae2d77659ed463011c6d6d14066ec008'
const getNews = createAsyncThunk('news/getNews', async keyWords => {
  const response = await fetch(
    `https://gnews.io/api/v4/search?q=${keyWords.join(
      ' OR '
    )}&lang=en&country=us&max=10&apikey=${API_KEY}`
  )
  const data = await response.json()
  console.log(data)

  const numOfPosts = {}
  keyWords.forEach(keyWord => (numOfPosts[keyWord] = 0))

  for (const article of data.articles) {
    keyWords.forEach(keyWord => {
      if (
        article.title.includes(keyWord) ||
        article.description.includes(keyWord)
      ) {
        article.keyWord = keyWord
        numOfPosts[keyWord] += 1
      }
    })
    article.verified = true
  }

  data.numOfPosts = numOfPosts

  console.log(numOfPosts)
  return data
})

const loadUsersPosts = createAsyncThunk('news/loadUsersPosts', async () => {
  const snapshot = await get(ref(database, 'posts/'))
  return snapshot.val()
})

const createPost = createAsyncThunk('news/createPost', async postData => {
  const postId = nanoid()
  const { uid, title, description, source, imageRef, logo, publishedAt } =
    postData
  let image = null

  if (imageRef) {
    const storageRef = sRef(storage, 'postsImages/' + postId)
    const response = await uploadBytes(storageRef, imageRef)
    image = await getDownloadURL(response.ref)
  }

  set(ref(database, 'posts/' + postId), {
    postId,
    uid,
    title,
    description,
    logo,
    image,
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
    image,
    publishedAt,
    source: {
      name: source,
    },
    likeCount: 0,
  }
})

const likePost = createAsyncThunk('news/likePost', async data => {
  const { postId, uid } = data
  const snapshot = await get(ref(database, `posts/${postId}/likeCount`))

  update(ref(database, 'postsLikes/' + postId), { [uid]: true })
  set(child(ref(database, 'posts/' + postId), 'likeCount'), snapshot.val() + 1)
})

const dislikePost = createAsyncThunk('news/dislikePost', async data => {
  const { postId, uid } = data
  const snapshot = await get(ref(database, `posts/${postId}/likeCount`))

  update(ref(database, 'postsLikes/' + postId), { [uid]: false })
  set(child(ref(database, 'posts/' + postId), 'likeCount'), snapshot.val() - 1)
})

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload)
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.posts.push(...action.payload.articles)
        state.numOfPosts = action.payload.numOfPosts
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

export { getNews, loadUsersPosts, createPost, likePost, dislikePost }

export default newsSlice.reducer
