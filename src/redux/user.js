import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { signupUser, signinUser } from '../pages/auth/userActions'
import { database } from '../firebase/firebase'
import { ref, get } from 'firebase/database'
import { createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: null,
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
      .addCase(saveData.fulfilled, (state, action) => {
        state.loading = false
        state.userData = action.payload
      })
      .addMatcher(
        isAnyOf(signupUser.pending, signinUser.pending, saveData.pending),
        state => {
          state.loading = true
          state.error = null
        }
      )
      .addMatcher(
        isAnyOf(signupUser.fulfilled, signinUser.fulfilled),
        (state, action) => {
          state.loading = false
          state.userData.userId = action.payload.uid
        }
      )
      .addMatcher(
        isAnyOf(signupUser.rejected, signinUser.rejected, saveData.rejected),
        (state, action) => {
          state.loading = false
          state.error = action.error.message
        }
      )
  },
})

export const selectUser = state => state.user

export { saveData }

export default userSlice.reducer
