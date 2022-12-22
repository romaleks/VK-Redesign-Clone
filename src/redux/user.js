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
    firstName: null,
    lastName: null,
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName(state, action) {
      console.log(action.payload)
      const { firstName, lastName } = action.payload
      state.userData.firstName = firstName
      state.userData.lastName = lastName
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signupUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false
        const { email, accessToken } = action.payload[0]
        const { firstName, lastName } = action.payload[1]
        state.userData = { email, accessToken, firstName, lastName }
        console.log(state.userData)
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const selectUser = state => state.user

export const { setUserName } = userSlice.actions

export default userSlice.reducer
