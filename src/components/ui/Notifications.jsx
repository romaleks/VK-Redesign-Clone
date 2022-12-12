import bell from '../../assets/svgs/bell.svg'

const Notifications = () => {
  return (
    <div className='group flex translate-y-0.5 cursor-pointer items-center gap-3 rounded-lg py-2 px-4 duration-75 hover:bg-blue-600'>
      <div className='relative'>
        <img src={bell} alt='notifications' className='h-8' />
        <div
          className='absolute top-0 -right-2 flex items-center justify-center rounded-full 
        bg-red-400 px-1.5 text-sm text-white ring-2 ring-blue-500 duration-75 group-hover:ring-blue-600'
        >
          27
        </div>
      </div>
      <div className='text-white'>Notifications</div>
    </div>
  )
}

export default Notifications
