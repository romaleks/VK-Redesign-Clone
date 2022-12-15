import icons from '../../data/icons'
import logos from '../../data/logos'

const ContentItem = ({ title, subtitle, verified, isPerson = false }) => {
  return (
    <div className='flex cursor-pointer items-center gap-3 p-3 hover:bg-gray-200'>
      <div className='h-10 w-10 overflow-hidden rounded-full bg-white'>
        {isPerson ? (
          <img src={logos.avatar} alt='avatar' />
        ) : (
          <img src={logos[title]} alt='avatar' className='p-1' />
        )}
      </div>
      <div className='flex flex-col'>
        <div className='flex items-center gap-1'>
          <h3 className='lea font-bold'>{title}</h3>
          {verified ? (
            <img src={icons.tick} alt='verified' className='h-4' />
          ) : null}
        </div>
        <span className='text-sm font-semibold text-gray-400'>{subtitle}</span>
      </div>
    </div>
  )
}

export default ContentItem
