import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signinUser } from './userActions'
import Input from './Input'
import SubmitBtn from './SubmitBtn'
import Checkbox from 'antd/es/checkbox/Checkbox'
import logos from '../../data/logos'

const Signin = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    dispatch(signinUser({ email, password }))
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
                Welcome back!
              </h2>
              <p className='text-lg text-gray-400'>
                Please enter your details.
              </p>
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
            <div>
              <Checkbox className='font-medium'>Remember for 30 days</Checkbox>
            </div>
            <SubmitBtn title='Sign in' />
            <p className='text-center text-sm'>
              Don't have an account?{' '}
              <Link
                to='/signup'
                className='cursor-pointer font-bold text-blue-400'
              >
                Sign up for free
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className='flex-1'></div>
    </div>
  )
}

export default Signin
