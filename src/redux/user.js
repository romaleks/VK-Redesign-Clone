import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { signupUser, signinUser } from '../pages/auth/userActions'

const initialState = {
  loading: false,
  error: null,
  success: null,
  userId: null,
  userData: {
    email: null,
    firstName: null,
    lastName: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveData(state, action) {
      state.userData = action.payload
    },
  },
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
          state.userId = action.payload.uid
        }
      )
      .addMatcher(
        isAnyOf(signupUser.rejected, signinUser.rejected),
        (state, action) => {
          state.loading = false
          state.error = action.error.message
        }
      )
  },
})

export const selectUser = state => state.user

export const { saveData } = userSlice.actions

export default userSlice.reducer
