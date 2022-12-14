const ReactionBtn = ({ icon }) => {
  return (
    <div className='flex cursor-pointer items-center gap-1.5 rounded-xl bg-gray-200 py-2 px-3 hover:bg-gray-300'>
      <img src={icon} className='h-6' />
      <span className='text-lg font-bold'>132</span>
    </div>
  )
}

export default ReactionBtn
