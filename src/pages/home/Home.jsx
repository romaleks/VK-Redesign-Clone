import Header from '../../components/Header'
import LeftSidebar from '../../components/LeftSidebar'
import RightSidebar from '../../components/RightSidebar'
import PostForm from './PostForm'
import Post from './Post'
import { useEffect } from 'react'
import { selectUser, saveData } from '../../redux/user'
import { useDispatch, useSelector } from 'react-redux'
import { database } from '../../firebase/firebase'
import { ref, onValue } from 'firebase/database'

const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    const userRef = ref(database, 'users/' + user.userId)
    onValue(userRef, async snapshot => {
      const { email, firstName, lastName } = await snapshot.val()
      dispatch(saveData({ email, firstName, lastName }))
    })
  }, [])

  return (
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
  )
}

export default Home
