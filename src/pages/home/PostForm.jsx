import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/user'
import icons from '../../data/icons'

const PostForm = () => {
  const user = useSelector(selectUser)

  return (
    <div className='flex gap-2 rounded-lg border border-gray-300 px-4 py-2'>
      <input
        type='text'
        placeholder={`${
          user.userData ? user.userData.firstName : 'Loading...'
        }, tell us something new...`}
        className='flex-1 rounded-full bg-gray-200 px-6 py-1 text-lg font-medium outline-none
        placeholder:text-gray-400 focus:bg-gray-300'
      />
      {['photos', 'videos', 'music'].map((btn, index) => {
        return (
          <div
            key={index}
            className='cursor-pointer rounded-lg bg-gray-200 p-1 duration-75 hover:bg-gray-300'
          >
            <img src={icons[btn]} alt={btn} className='h-8' />
          </div>
        )
      })}
    </div>
  )
}

export default PostForm
