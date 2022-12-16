import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'IDDna',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const selectUser = state => state.user

export default userSlice.reducer
