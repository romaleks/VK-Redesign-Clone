import { Skeleton } from 'antd'

const PostLoad = () => {
  return (
    <div className='flex flex-col gap-4 rounded-lg border border-gray-300 p-6'>
      <div className='flex gap-3'>
        <Skeleton.Avatar active size={50}></Skeleton.Avatar>
        <Skeleton
          active
          title={false}
          paragraph={{ rows: 2, width: [100, 150] }}
        ></Skeleton>
      </div>
      <div className='flex flex-col gap-3'>
        <Skeleton
          active
          title={false}
          paragraph={{ rows: 3, width: ['100%', '75%', '40%'] }}
        ></Skeleton>
        <div className='grid h-96 grid-cols-3 grid-rows-5 gap-4'>
          <div className='col-span-2 row-span-full rounded-lg bg-gray-200'></div>
          <div className='row-span-2 rounded-lg bg-gray-200'></div>
          <div className='row-span-2 rounded-lg bg-gray-200'></div>
          <div className='rounded-lg bg-gray-200'></div>
        </div>
        <div className='flex gap-3'>
          <Skeleton.Button active size='large'></Skeleton.Button>
          <Skeleton.Button active size='large'></Skeleton.Button>
          <Skeleton.Button active size='large'></Skeleton.Button>
        </div>
      </div>
    </div>
  )
}

export default PostLoad
