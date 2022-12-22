import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Input from './Input'
import SubmitBtn from './SubmitBtn'
import logos from '../../data/logos'
import { signupUser } from './userActions'

const Signup = () => {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value

    dispatch(signupUser({ firstName, lastName, email, password, navigate }))
  }

  return (
    <div className='flex h-screen'>
      <div className='flex flex-1 flex-col p-6'>
        <div className='flex items-center gap-4'>
          <div className='inline-block cursor-pointer rounded-2xl bg-blue-400 p-2'>
            <img src={logos.vk_w} alt='Logo' className='h-14' />
          </div>
          <h1 className='text-5xl font-bold text-blue-400'>VKontakte</h1>
        </div>
        <div className='flex flex-1 items-center'>
          <form
            onSubmit={handleSubmit}
            className='m-auto flex w-full max-w-sm flex-col gap-8'
          >
            <div className='text-center'>
              <h2 className='text-3xl font-bold text-blue-400'>
                Create an account
              </h2>
              <p className='text-lg text-gray-400'>
                Please enter your details.
              </p>
            </div>
            <div className='flex gap-4'>
              <Input
                type='text'
                reference={firstNameRef}
                title='First Name'
                required={true}
              />
              <Input type='text' reference={lastNameRef} title='Last Name' />
            </div>
            <Input
              type='email'
              reference={emailRef}
              title='Email'
              required={true}
            />
            <Input
              type='password'
              reference={passwordRef}
              title='Password'
              required={true}
            />
            <SubmitBtn onSubmit={handleSubmit} title='Sign up' />
            <p className='text-center text-sm'>
              Already have an account?{' '}
              <Link
                to='/signin'
                className='cursor-pointer font-bold text-blue-400 hover:underline'
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className='flex-1'></div>
    </div>
  )
}

export default Signup
