import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { signupUser, signinUser } from '../pages/auth/userActions'
import { database } from '../firebase/firebase'
import { ref, get } from 'firebase/database'
import { createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: null,
  success: null,
  userData: {
    userId: null,
    email: null,
    firstName: null,
    lastName: null,
  },
}

const saveData = createAsyncThunk('saveData', async data => {
  const { email, uid } = data
  const snapshot = await get(ref(database, 'users/' + uid))
  const { firstName, lastName } = snapshot.val()
  return { email, firstName, lastName, userId: uid }
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(isAnyOf(signupUser.pending, signinUser.pending), state => {
        state.loading = true
        state.error = null
      })
      .addMatcher(
        isAnyOf(signupUser.fulfilled, signinUser.fulfilled),
        (state, action) => {
          state.loading = false
          state.userData.userId = action.payload.uid
        }
      )
      .addMatcher(
        isAnyOf(signupUser.rejected, signinUser.rejected),
        (state, action) => {
          state.loading = false
          state.error = action.error.message
        }
      )
      .addMatcher(saveData.fulfilled, (state, action) => {
        state.userData = action.payload
      })
  },
})

export const selectUser = state => state.user

export { saveData }

export default userSlice.reducer
