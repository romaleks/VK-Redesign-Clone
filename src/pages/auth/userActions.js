import { createUserWithEmailAndPassword } from 'firebase/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../../firebase/firebase'

export const signupUser = createAsyncThunk('user/signupUser', async data => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
    console.log(response)
    return response.user
  } catch (err) {
    return err.message
  }
})
