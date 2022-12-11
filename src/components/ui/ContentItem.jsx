const ContentItem = ({ title, subtitle, image }) => {
  return (
    <div className='flex cursor-pointer items-center gap-3 p-3 hover:bg-gray-200'>
      <div className='h-10 w-10 rounded-full bg-gray-300'>
        <img src={image} alt='avatar' />
      </div>
      <div>
        <h3 className='font-bold'>{title}</h3>
        <span className='text-sm font-semibold text-gray-400'>{subtitle}</span>
      </div>
    </div>
  )
}

export default ContentItem
