import logo from '../assets/svgs/logo.svg'
import Notifications from './ui/Notifications'

const Header = () => {
  return (
    <div className='bg-blue-500 p-4'>
      <div className='m-auto flex max-w-7xl items-end justify-between gap-6'>
        <div className='flex basis-80'>
          <div className='inline-block cursor-pointer rounded-xl bg-white p-2'>
            <img src={logo} alt='' className='h-10' />
          </div>
        </div>
        <input
          placeholder='Search'
          className='font flex-1 rounded-full bg-blue-800 p-2 text-center text-white outline-none placeholder:text-blue-500'
        ></input>
        <Notifications />
      </div>
    </div>
  )
}

export default Header
