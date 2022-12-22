import { createUserWithEmailAndPassword } from 'firebase/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth } from '../../firebase/firebase'

export const signupUser = createAsyncThunk('user/signupUser', async data => {
  const { email, password, firstName, lastName } = data

  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)

    return [response.user, { firstName, lastName }]
  } catch (err) {
    return err.message
  }
})
