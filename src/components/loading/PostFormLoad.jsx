import { Skeleton } from 'antd'

const PostFormLoad = () => {
  return (
    <div className='flex items-center gap-4 rounded-lg border border-gray-300 px-4 py-2'>
      <Skeleton active paragraph={false}></Skeleton>
      <Skeleton.Button active></Skeleton.Button>
      <Skeleton.Button active></Skeleton.Button>
      <Skeleton.Button active></Skeleton.Button>
    </div>
  )
}

export default PostFormLoad
