import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { auth, database } from '../../firebase/firebase'
import { ref, set } from 'firebase/database'

export const signupUser = createAsyncThunk('user/signupUser', async data => {
  const { email, password, firstName, lastName } = data

  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)

    set(ref(database, 'users/' + response.user.uid), {
      firstName,
      lastName,
      email,
    })

    return response.user
  } catch (err) {
    return err.message
  }
})

export const signinUser = createAsyncThunk('user/signupUser', async data => {
  const { email, password, firstName, lastName } = data

  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    console.log(response)
    return response.user
  } catch (err) {
    return err.message
  }
})
