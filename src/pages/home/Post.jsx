import ReactionBtn from '../../components/ui/ReactionBtn'
import like from '../../assets/svgs/like.svg'
import comment from '../../assets/svgs/comment.svg'
import share from '../../assets/svgs/share.svg'
import icons from '../../data/icons'
import logos from '../../data/logos'

const Post = ({ source, verified }) => {
  return (
    <div className='flex flex-col gap-4 rounded-lg border border-gray-300 p-6'>
      <div className='flex gap-3'>
        <div className='h-12 w-12 rounded-full border border-gray-300 p-1.5'>
          <img src={logos[source]} alt='logo' />
        </div>
        <div className='leading-3'>
          <div className='flex items-center gap-1.5'>
            <h2 className='text-xl font-bold'>{source}</h2>
            {verified ? (
              <img src={icons.tick} alt='verified' className='h-6' />
            ) : null}
          </div>
          <span className='font-medium text-gray-400'>5 minutes ago</span>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='font-medium'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi illum
          necessitatibus magni, ab incidunt enim tempora nisi vero eveniet earum
          accusantium fuga impedit numquam vitae laborum repudiandae perferendis
          iusto qui.
        </p>
        <div className='grid h-96 grid-cols-3 grid-rows-5 gap-4'>
          <div className='col-span-2 row-span-full rounded-lg bg-gray-200'></div>
          <div className='row-span-2 rounded-lg bg-gray-200'></div>
          <div className='row-span-2 rounded-lg bg-gray-200'></div>
          <div className='rounded-lg bg-gray-200'></div>
        </div>
      </div>
      <div className='flex gap-3'>
        <ReactionBtn icon={like} />
        <ReactionBtn icon={comment} />
        <ReactionBtn icon={share} />
      </div>
    </div>
  )
}

export default Post
