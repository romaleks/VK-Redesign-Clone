import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/user'
import icons from '../../data/icons'
import { useRef } from 'react'
import { createPost } from '../../redux/news'

const PostForm = () => {
  const user = useSelector(selectUser)
  const titleRef = useRef()
  const descRef = useRef()
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    const title = titleRef.current.value
    const description = descRef.current.value
    const source = `${user.userData.firstName} ${user.userData.lastName}`
    const image = null
    const logo = null //user.userData.avatar
    const publishedAt = Date.now()

    dispatch(
      createPost({
        uid: user.userData.userId,
        title,
        description,
        source,
        image,
        logo,
        publishedAt,
      })
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='group flex flex-col gap-2 rounded-lg border border-gray-300 px-4 py-2'
    >
      <div className='flex gap-2'>
        <input
          type='text'
          ref={titleRef}
          placeholder={`${
            user.userData ? user.userData.firstName : 'Loading...'
          }, tell us something new...`}
          className='flex-1 rounded-full bg-gray-200 px-6 py-1 text-lg font-medium outline-none
        placeholder:text-gray-400 focus:bg-gray-300'
        />
        <div className='cursor-pointer rounded-lg bg-gray-200 p-1 duration-75 hover:bg-gray-300'>
          <img src={icons.photos} alt='photo' className='h-8' />
        </div>
        <div className='cursor-pointer rounded-lg bg-gray-200 p-1 duration-75 hover:bg-gray-300'>
          <img src={icons.music} alt='music' className='h-8' />
        </div>
        <div
          onClick={handleSubmit}
          className='cursor-pointer rounded-lg bg-gray-200 p-1 duration-75 hover:bg-gray-300'
        >
          <img src={icons.send} alt='send' className='h-8' />
        </div>
      </div>
      <textarea
        placeholder='Description...'
        ref={descRef}
        className='hidden h-full w-full rounded-lg bg-gray-200 px-6 py-1 text-lg font-medium
        outline-none placeholder:text-gray-400 focus:bg-gray-300 group-focus-within:block'
      ></textarea>
    </form>
  )
}

export default PostForm
