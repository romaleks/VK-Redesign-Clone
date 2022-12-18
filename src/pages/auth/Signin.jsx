import { useRef } from 'react'
import Input from './Input'
import SubmitBtn from './SubmitBtn'
import Checkbox from 'antd/es/checkbox/Checkbox'
import logos from '../../data/logos'
import { Link } from 'react-router-dom'

const Signin = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <div className='flex h-screen'>
      <div className='flex flex-1 flex-col p-6'>
        <div className='flex items-center gap-4'>
          <div className='inline-block cursor-pointer rounded-2xl bg-blue-400 p-2'>
            <img src={logos.vk_w} alt='' className='h-14' />
          </div>
          <h1 className='text-5xl font-bold text-blue-400'>VKontakte</h1>
        </div>
        <div className='flex flex-1 items-center'>
          <form className='m-auto flex w-full max-w-sm flex-col gap-8'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold text-blue-400'>
                Welcome back!
              </h2>
              <p className='text-lg text-gray-400'>
                Please enter your details.
              </p>
            </div>
            <Input type='email' reference={emailRef} title='Email' />
            <Input type='password' reference={passwordRef} title='Password' />
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
