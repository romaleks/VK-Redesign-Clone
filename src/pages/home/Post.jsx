import ReactionBtn from '../../components/ui/ReactionBtn'
import icons from '../../data/icons'
import logos from '../../data/logos'
import moment from 'moment/moment'
import noImage from '../../assets/imgs/no-image.png'

const Post = ({
  source,
  title,
  description,
  logo,
  image,
  timeAgo,
  verified,
  articleSrc,
}) => {
  const onImageError = e => {
    e.target.src = noImage
  }

  return (
    <div className='flex flex-col gap-4 rounded-lg border border-gray-300 p-6'>
      <div className='flex gap-3'>
        <div className='h-12 w-12 rounded-full border border-gray-300 p-1.5'>
          <img src={logos[logo]} alt='logo' />
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
        <div className='h-full'>
          <img
            src={image}
            alt='image'
            onError={onImageError}
            className='w-full rounded-lg bg-gray-200'
          ></img>
        </div>
      </div>
      <div className='flex items-center justify-between gap-3'>
        <div className='flex gap-3'>
          <ReactionBtn icon='like' />
          <ReactionBtn icon='comment' />
          <ReactionBtn icon='share' />
        </div>
        <a
          href={articleSrc}
          className='flex gap-1 text-xl text-blue-500 hover:underline'
        >
          Source <img src={icons.link} className='h-6' />
        </a>
      </div>
    </div>
  )
}

export default Post
