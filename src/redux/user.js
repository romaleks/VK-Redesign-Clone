import { createSlice } from '@reduxjs/toolkit'
import { signupUser } from '../pages/auth/userAcitons'

const initialState = {
  loading: false,
  userData: null,
  error: null,
  success: null,
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
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const selectUser = state => state.user

export default userSlice.reducer
