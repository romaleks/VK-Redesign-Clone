import icons from '../../data/icons'

const SectionItem = ({ title }) => {
  return (
    <div className='flex cursor-pointer items-center gap-2 rounded-lg p-3 hover:bg-gray-200'>
      <img src={icons[title.toLowerCase()]} alt={title} className='h-6' />
      <span className='font-semibold text-blue-400'>{title}</span>
    </div>
  )
}

export default SectionItem
