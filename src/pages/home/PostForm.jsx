import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/user'
import { useEffect, useRef, useState } from 'react'
import { createPost, selectNews } from '../../redux/news'
import { notification, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import icons from '../../data/icons'

const PostForm = () => {
  const user = useSelector(selectUser)
  const news = useSelector(selectNews)
  const titleRef = useRef()
  const descRef = useRef()
  const dispatch = useDispatch()
  const [imgPreview, setImgPreview] = useState(null)
  const [inputState, setInputState] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    if (!titleRef.current.value) {
      notification.error({
        message: 'Error!',
        description: 'Please write any title to the post.',
        placement: 'top',
        duration: 3,
      })
      return
    }

    const title = titleRef.current.value
    const description = descRef.current.value
    const imageRef = imgPreview
    const source = `${user.userData.firstName} ${user.userData.lastName}`
    const logo = null //user.userData.avatar
    const publishedAt = Date.now()

    dispatch(
      createPost({
        uid: user.userData.userId,
        title,
        description,
        source,
        imageRef,
        logo,
        publishedAt,
      })
    )
  }

  const handleImgChange = e => {
    const image = e.target.files[0]
    setInputState(true)
    setImgPreview(image)
  }

  const handleInputChange = e => {
    if (e.target.value) {
      setInputState(true)
    } else {
      setInputState(false)
    }
  }

  useEffect(() => {
    if (news.success) {
      titleRef.current.value = ''
      descRef.current.value = ''
      titleRef.current.blur()
      setImgPreview(null)
      setInputState(false)
    }
  }, [news.success])

  return (
    <form
      action=''
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
          onChange={handleInputChange}
          className='flex-1 rounded-full bg-gray-200 px-6 py-1 text-lg font-medium outline-none
          placeholder:text-gray-400 focus:bg-gray-300'
        />
        <div>
          <label
            htmlFor='photo'
            className='block cursor-pointer rounded-lg bg-gray-200 p-1 duration-75 hover:bg-gray-300'
          >
            <img
              src={icons.photos}
              alt='photo'
              className='h-8 w-8 cursor-pointer'
            />
          </label>
          <input
            type='file'
            accept='image/png, image/gif, image/jpeg'
            id='photo'
            className='hidden'
            onChange={handleImgChange}
          />
        </div>
        <div className='cursor-pointer rounded-lg bg-gray-200 p-1 duration-75 hover:bg-gray-300'>
          <img src={icons.music} alt='music' className='h-8 w-8' />
        </div>
        <button
          id='myForm'
          onClick={handleSubmit}
          className='cursor-pointer rounded-lg bg-gray-200 p-1 duration-75 hover:bg-gray-300'
        >
          {news.loading ? (
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
              className='flex h-8 w-8 items-center justify-center'
            />
          ) : (
            <img src={icons.send} alt='send' className='h-8' />
          )}
        </button>
      </div>
      <div
        className='hidden group-focus-within:block'
        style={inputState ? { display: 'block' } : null}
      >
        <textarea
          placeholder='Description...'
          ref={descRef}
          onChange={handleInputChange}
          className='h-full w-full rounded-lg bg-gray-200 px-6 py-1 text-lg font-medium
        outline-none placeholder:text-gray-400 focus:bg-gray-300'
        ></textarea>
        <img
          src={imgPreview ? URL.createObjectURL(imgPreview) : null}
          alt=''
          className='w-full rounded-lg'
        />
      </div>
    </form>
  )
}

export default PostForm
