import { useState } from 'react'
import icons from '../../data/icons'

const ReactionBtn = ({ icon, count, onClick }) => {
  const [curCount, setCurCount] = useState(count)

  const handleClick = () => {
    onClick()
    setCurCount(prev => prev + 1)
  }

  return (
    <div
      onClick={handleClick}
      className='flex cursor-pointer items-center gap-1.5 rounded-xl bg-gray-200 py-2 px-3 hover:bg-gray-300'
    >
      <img src={icons[icon]} className='h-6' />
      <span className='text-lg font-bold'>
        {count !== undefined ? curCount : '—'}
      </span>
    </div>
  )
}

export default ReactionBtn
