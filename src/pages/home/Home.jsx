import Header from '../../components/Header'
import LeftSidebar from '../../components/LeftSidebar'
import RightSidebar from '../../components/RightSidebar'
import PostForm from './PostForm'
import Post from './Post'
import { useEffect, useState } from 'react'
import { selectUser, saveData } from '../../redux/user'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'

const Home = () => {
  const [render, setRender] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        const { email, uid } = userAuth
        dispatch(saveData({ email, uid }))
      }
    })
  }, [])

  useEffect(() => {
    if (user.userData) {
      setRender(true)
    }
  })

  return render ? (
    <>
      <Header />
      <div className='m-auto flex max-w-7xl items-start gap-4 py-6 px-4'>
        <LeftSidebar />
        <div className='flex flex-1 flex-col gap-4'>
          <PostForm />
          <Post source='Tesla Inc.' verified={true} />
          <Post source='BBC' verified={true} />
          <Post source='Amazon' verified={true} />
        </div>
        <RightSidebar />
      </div>
    </>
  ) : (
    <p>Loading...</p>
  )
}

export default Home
