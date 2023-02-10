import ReactionBtn from '../../components/ui/ReactionBtn'
import icons from '../../data/icons'
import logos from '../../data/logos'
import moment from 'moment/moment'

const Post = ({ source, title, description, image, timeAgo, verified }) => {
  return (
    <div className='flex flex-col gap-4 rounded-lg border border-gray-300 p-6'>
      <div className='flex gap-3'>
        <div className='h-12 w-12 rounded-full border border-gray-300 p-1.5'>
          <img src={logos[source]} alt='logo' />
        </div>
        <div className='leading-3'>
          <div className='flex items-center gap-1.5'>
            <h2 className='text-2xl font-bold'>{source}</h2>
            {verified ? (
              <img src={icons.tick} alt='verified' className='h-6' />
            ) : null}
          </div>
          <span className='font-medium text-gray-400'>
            {moment(timeAgo).fromNow()}
          </span>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='font-medium'>{description}</p>
        <div className='grid h-96 grid-cols-3 grid-rows-5 gap-4'>
          <div className='col-span-2 row-span-full rounded-lg bg-gray-200'></div>
          <div className='row-span-2 rounded-lg bg-gray-200'></div>
          <div className='row-span-2 rounded-lg bg-gray-200'></div>
          <div className='rounded-lg bg-gray-200'></div>
        </div>
      </div>
      <div className='flex gap-3'>
        <ReactionBtn icon='like' />
        <ReactionBtn icon='comment' />
        <ReactionBtn icon='share' />
      </div>
    </div>
  )
}

export default Post
