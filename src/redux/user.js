import { createSlice } from '@reduxjs/toolkit'
import { signupUser } from '../pages/auth/userActions'

const initialState = {
  loading: false,
  error: null,
  success: null,
  userData: {
    email: null,
    password: null,
    token: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signupUser.pending, (state, action) => {
        state.loading = true
        state.error = null
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false
        state.userData = action.payload
        console.log(state.userData)
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false
        console.log(1)
        state.error = action.error.message
      })
  },
})

export const selectUser = state => state.user

export default userSlice.reducer
