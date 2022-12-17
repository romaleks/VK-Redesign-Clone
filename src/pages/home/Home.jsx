import LeftSidebar from '../../components/LeftSidebar'
import RightSidebar from '../../components/RightSidebar'
import PostForm from './PostForm'
import Post from './Post'
import { signupUser } from '../auth/userAcitons'
import { useDispatch } from 'react-redux'
const Home = () => {
  const dispatch = useDispatch()
  return (
    <div className='m-auto flex max-w-7xl items-start gap-4 py-6 px-4'>
      <LeftSidebar />
      <div className='flex flex-1 flex-col gap-4'>
        <PostForm />
        <Post source='Tesla Inc.' verified={true} />
        <Post source='BBC' verified={true} />
        <Post source='Amazon' verified={true} />
      </div>
      <button
        onClick={() => {
          dispatch(
            signupUser({ email: 'romanov1371@gmail.com', password: 'dffsdfk' })
          )
        }}
        className='h-10 w-10'
      ></button>
      <RightSidebar />
    </div>
  )
}

export default Home
