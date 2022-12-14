import LeftSidebar from '../../components/LeftSidebar'
import RightSidebar from '../../components/RightSidebar'
import PostForm from './PostForm'
import Post from './Post'

const Home = () => {
  return (
    <div className='m-auto flex max-w-7xl items-start gap-4 py-6 px-4'>
      <LeftSidebar />
      <div className='flex flex-1 flex-col gap-4'>
        <PostForm />
        <Post source='Tesla Inc.' />
        <Post source='BBC' />
        <Post source='Amazon' />
      </div>
      <RightSidebar />
    </div>
  )
}

export default Home
