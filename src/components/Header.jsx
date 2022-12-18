import Notifications from './ui/Notifications'
import logos from '../data/logos'

const Header = () => {
  return (
    <div className='bg-blue-500 p-4 pb-2'>
      <div className='m-auto flex max-w-7xl items-end justify-between gap-6'>
        <div className='flex basis-60'>
          <div className='inline-block cursor-pointer rounded-xl bg-white p-2'>
            <img src={logos.vk_b} alt='' className='h-10' />
          </div>
        </div>
        <input
          placeholder='Search'
          className='font flex-1 rounded-full bg-blue-800 p-2 text-center text-white outline-none placeholder:text-blue-500'
        ></input>
        <div className='flex basis-60 justify-end'>
          <Notifications />
        </div>
      </div>
    </div>
  )
}

export default Header
