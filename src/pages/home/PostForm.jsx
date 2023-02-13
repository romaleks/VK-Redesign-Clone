import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/user'
import icons from '../../data/icons'
import { useRef } from 'react'
import { createPost } from '../../redux/news'

const PostForm = () => {
  const user = useSelector(selectUser)
  const titleRef = useRef()
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    const title = titleRef.current.value
    dispatch(createPost({ uid: user.userData.userId, title }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex gap-2 rounded-lg border border-gray-300 px-4 py-2'
    >
      <input
        type='text'
        ref={titleRef}
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
    </form>
  )
}

export default PostForm
