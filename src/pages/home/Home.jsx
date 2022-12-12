import LeftSidebar from '../../components/LeftSidebar'
import RightSidebar from '../../components/RightSidebar'

const Home = () => {
  return (
    <div className='m-auto flex max-w-7xl items-start gap-4 py-6 px-4'>
      <LeftSidebar />
      <div className='flex-1'></div>
      <RightSidebar />
    </div>
  )
}

export default Home
