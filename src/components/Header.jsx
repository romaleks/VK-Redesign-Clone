import logo from '../assets/svgs/logo.svg'
import bell from '../assets/svgs/bell.svg'

const Header = () => {
  return (
    <div className='p-4 bg-blue-500'>
      <div className='m-auto flex gap-4 justify-between items-end max-w-7xl'>
        <div className='flex basis-80'>
          <div className='p-2 inline-block bg-white rounded-xl cursor-pointer'>
            <img src={logo} alt='' className='h-10' />
          </div>
        </div>
        <input
          placeholder='Search'
          className='p-2 flex-1 text-white text-center font placeholder:text-blue-500 outline-none bg-blue-800 rounded-full'
        ></input>
        <div className='flex items-center gap-1 -translate-y-1 cursor-pointer'>
          <img src={bell} alt='notifications' className='h-8' />
          <div className='text-white'>Notifications</div>
        </div>
      </div>
    </div>
  )
}

export default Header
